import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Home() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const logoutToApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div>
      <h1 className="h-10 text-4xl">Home</h1>

      <button onClick={logoutToApp}>logout</button>
    </div>
  );
}

export default Home;
