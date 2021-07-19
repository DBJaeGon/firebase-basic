import React, { useEffect, useState } from 'react';
import { dbService } from 'fbase';
import Nweet from 'components/Nweet';
import NweetFcatory from 'components/NweetFcatory';


const Home = ({ userObj }) => {
    const [nweets, setNweets] = useState([]);

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
    
    return (
        <div>
            <NweetFcatory userObj={userObj} />
            <div>
                {nweets.map(nweet => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};

export default Home;