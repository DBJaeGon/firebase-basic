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
        setUserObj(user);
      }
      setInit(true);
    });
  }, [])

  return (
    <>
      {init ? <AppRouter isSignIn={Boolean(userObj)} userObj={userObj} />  : "Initializing..."}
      <footer>&copy; firebaseBasic {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
