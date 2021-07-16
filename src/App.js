import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home";
import { selectUser } from "./features/userSlice";
import Login from "./pages/Login";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return <div className="App">{!user ? <Login /> : <Home />}</div>;
}

export default App;
