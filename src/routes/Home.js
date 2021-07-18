import React, { useEffect, useRef, useState } from 'react';
import { dbService, storageService } from 'fbase';
import Nweet from 'components/Nweet';
import { v4 as uuidv4} from 'uuid';

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    const fileInput = useRef();
    // const getNweets = async() => {
    //     const dbNweets = await dbService.collection("nweets").get();
    //     dbNweets.forEach(doc => {
    //         const nweetObj = {
    //             ...doc.data(),
    //             id: doc.id
    //         };
    //         setNweets((prev) => [nweetObj, ...prev]);
    //     });
    // };
    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setNweets(nweetArray);
        });
        // setNweets([]);
        // getNweets();
    }, [])
    const onSubmit = async(event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        }
        await dbService.collection("nweets").add(nweetObj);
        // await dbService.collection("nweets").add({
        //     text: nweet,
        //     createdAt: Date.now(),
        //     creatorId: userObj.uid
        // });
        setNweet("");
        setAttachment("");
        fileInput.current.value = "";
    };
    const onChange =(event) => {
        const {target: {value}} = event;
        setNweet(value);
    }
    const onFileChange = (event) => {
        const {target: {files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => {
        setAttachment("");
        fileInput.current.value = "";
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={nweet} placeholder="what's on your mind" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange} ref={fileInput} />
                <input type="submit" value="Nweet" />
                {attachment && 
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>
                }
            </form>
            <div>
                {nweets.map(nweet => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};

export default Home;