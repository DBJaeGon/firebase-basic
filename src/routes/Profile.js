import React, { useEffect, useState } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onSignOutClick = () => {
        authService.signOut();
        history.push("/");
    }
    const getMyNweets = async() => {
        const nweets = await dbService.collection("nweets").where("creatorId", "==", userObj.uid).orderBy("createdAt", "desc").get();
        console.log(nweets.docs.map(doc => doc.data()));
    };
    useEffect(() => {
        getMyNweets();  
    }, []);
    const onChange = (event) => {
        const {target: {value}} = event;
        setNewDisplayName(value);
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        if(userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
        }
        refreshUser();
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="display Name" value={newDisplayName} onChange={onChange} />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onSignOutClick}>Sign Out</button>
        </>
    );
};

export default Profile;