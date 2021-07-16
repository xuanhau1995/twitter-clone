import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login } from "../features/userSlice";
import { Route, useHistory } from "react-router-dom";
import SignUp from "./SignUp";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorname, setErrorName] = useState("");
  const dispatch = useDispatch();
  const historty = useHistory();
  console.log(name);

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return setErrorName("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            // photoURL: profliePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                // photoUrl: profliePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    // <div>
    //   <h1>login</h1>
    //   <input
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     type="text"
    //     placeholder="name"
    //   />
    //   <input
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     type="text"
    //     placeholder="Email"
    //   />
    //   <input
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     type="password"
    //     placeholder="Password"
    //   />
    //   <button onClick={register}>Submit</button>
    //   <button onClick={loginToApp}>Login</button>
    // </div>

    <>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-7">
          <img
            className="object-cover h-full"
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          />
        </div>
        <div className="col-span-5 p-8">
          <div className="h-full flex items-center">
            <div>
              <div>
                <img
                  alt="logo"
                  className="h-10"
                  src="https://logonoid.com/images/twitter-logo.png"
                />
              </div>
              <form>
                <h1 className="text-6xl font-bold mb-10">Happening now</h1>
                <p className="text-3xl font-bold pb-8 tracking-wider">
                  Join Twitter Today.
                </p>
                <form className=" space-y-6">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-md"
                  />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-md"
                  />
                </form>
                <Route path="/sign-up" component={SignUp} />
                <button
                  onClick={() => historty.push("/sign-up")}
                  className="h-12 rounded-full justify-center items-center text-white font-semibold bg-blue-400 flex w-4/5 mb-4 hover:bg-blue-500 duration-500"
                >
                  Sign Up
                </button>
                <button className="h-12 rounded-full justify-center items-center text-blue-400 font-semibold border border-blue-400 hover:bg-blue-100 flex w-4/5">
                  Login
                </button>
                <p className="" onClick={register}>
                  refff
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
