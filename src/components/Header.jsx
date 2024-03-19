import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        nevigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nevigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        nevigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute  w-full px-32 bg-gradient-to-b from-black py-2 z-10 flex items-center justify-between">
      <img className="w-[12vw] object-cover" src={logo} alt="golu" />

      {user && (
        <div className="flex  items-center gap-x-7">
          <img
            className="w-[3vw] object-cover rounded-sm block"
            src={user?.photoURL}
            alt="usericon"
          />

          <button
            onClick={handleSignOut}
            className="px-2 py-2 rounded-md bg-zinc-400 text-[1.2vw] text-zinc-700 font-medium transition-all ease-linear hover:bg-zinc-500 hover:text-zinc-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
