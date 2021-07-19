import React, { useEffect, useState } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

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

    const onSignOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input type="text" placeholder="display Name" value={newDisplayName} onChange={onChange} autoFocus className="formInput" />
                <input type="submit" value="Update Profile" className="formBtn" style={{ marginTop: 10 }} />
            </form>
            <span className="formBtn cancelBtn logOut" onClick={onSignOutClick}>
                Sign Out
            </span>
        </div>
    );
};

export default Profile;