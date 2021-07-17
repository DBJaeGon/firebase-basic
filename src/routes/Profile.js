import React from 'react';
import { authService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
    const onSignOutClick = () => {
        authService.signOut();
        history.push("/");
    }
    return (
        <>
            <button onClick={onSignOutClick}>Sign Out</button>
        </>
    );
};

export default Profile;