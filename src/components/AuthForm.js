import React, { useState } from 'react';
import { authService } from 'fbase';

const AuthForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {target :{value, name}} = event;
        if(name === "email") setEmail(value);
        else if(name === "password") setPassword(value);
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            if(newAccount) {
                await authService.createUserWithEmailAndPassword(email, password);
                await authService.currentUser.sendEmailVerification();
                window.alert("email에서 인증메일을 통해 가입을 완료해 주세요!");
                setEmail("");
                setPassword("");
            } else {
                await authService.signInWithEmailAndPassword(email, password);
                const verified = await authService.currentUser.emailVerified;
                if(!verified) {
                    const again = window.confirm("email 인증이 필요합니다.\n인증 메일이 안보인다면 확인을 눌러주세요!");
                    if(again) await authService.currentUser.sendEmailVerification();
                    authService.signOut();
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input name="email" type="text" placeholder="Email" required value={email} onChange={onChange} className="authInput" />
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} className="authInput" />
                <input type="submit" value={newAccount ? "Create Account" : "Sign In"} className="authInput authSubmit" />
            {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                {newAccount ? "Sign In" : "Create Account"}
            </span>
        </>
    );
};

export default AuthForm;