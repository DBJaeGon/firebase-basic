import React, { useRef, useState } from 'react';
import { dbService, storageService } from 'fbase';
import { v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const NweetFcatory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");
    const fileInput = useRef();

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

    const onSubmit = async(event) => {
        if(nweet === "") return;
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

    return (
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input type="text" onChange={onChange} value={nweet} placeholder="what's on your mind?" maxLength={120} className="factoryInput__input" />
                <input type="submit" value="&rarr;" className="factoryInput__arrow" />
            </div>
            <label for="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>
            <input id="attach-file" type="file" accept="image/*" onChange={onFileChange} ref={fileInput} style={{ opacity: 0 }} />
            {attachment && 
                <div className="factoryForm__attachment">
                    <img src={attachment} style={{ backgroundImage: attachment }} />
                    <div className="factoryForm__clear" onClick={onClearAttachment}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            }
        </form>
    );
};

export default NweetFcatory;