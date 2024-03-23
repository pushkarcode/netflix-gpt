import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changelanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [btntoggle, setBtntoggle] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        nevigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
    setBtntoggle(!btntoggle);
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

  const handleLanguageChange = (event) => {
    dispatch(changelanguage(event.target.value));
  };

  return (
    <div className="absolute  w-full lg:px-32 px-1 bg-gradient-to-b from-black lg:py-1 py-4 flex items-center justify-between backdrop-blur-sm z-[999] ">
      <img
        className="lg:w-[12vw] w-[24vw] object-cover cursor-pointer"
        src={logo}
        alt="golu"
      />

      {user && (
        <div className="flex items-center lg:gap-x-7 gap-x-2">
          {btntoggle && (
            <select
              onChange={handleLanguageChange}
              className="lg:px-3 lg:py-2 rounded-sm outline-none bg-zinc-600 font-medium text-md text-slate-900"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  className="text-orange-300"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="lg:w-[3vw] w-[6vw] object-cover rounded-sm block"
            src={user?.photoURL}
            alt="usericon"
          />

          <button
            onClick={handleSignOut}
            className="lg:px-2 lg:py-2 px-1 py-[.8vw] text-sm lg:text-xl rounded-sm bg-zinc-400 lg:text-[1.2vw] text-zinc-700 font-medium transition-all ease-linear hover:bg-zinc-500 hover:text-zinc-800"
          >
            Sign Out
          </button>
          <button
            onClick={handleGptSearchClick}
            className="lg:px-3 lg:py-2 rounded-sm bg-fuchsia-300 lg:text-xl lg:font-bold lg:text-zinc-700 px-1 py-1 text-sm font-semibold text-zinc-900"
          >
            GPT (search)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
