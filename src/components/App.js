import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  // console.log(authService.currentUser);
  // setInterval(() => {
  //   console.log(authService.currentUser);
  // }, 2000);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        // setUserObj(user);
        if(user.providerData[0].providerId === "password" && !user.emailVerified) {
          setUserObj(null);
        } else {
          setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args)
          });
        }
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    // setUserObj(Object.assign({}, user));
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args)
    });
  };

  return (
    <>
      {init ? <AppRouter isSignIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser} />  : "Initializing..."}
    </>
  );
}

export default App;
