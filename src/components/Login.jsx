import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlebuttonClick = () => {
    // * vaildate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // if(message) return;

    // if(!isSignInForm) {
    //   // sign Up
    // }
    // else {
    //   // sign In
    // }

  };

  const toggleSignInfrom = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          className="object-cover w-screen h-screen "
          src={background}
          alt=""
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-36 w-[23vw] h-[60vh] p-7  bg-neutral-900 bg-opacity-90 rounded-lg mx-auto right-0 left-0"
      >
        <h1 className="text-[2vw] text-zinc-200 font-bold p-1 mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 mx-6 mb-3 bg-zinc-500  rounded-sm outline-none px-7 text-zinc-300"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 mx-6 mb-3 bg-zinc-500  rounded-sm outline-none px-7 text-zinc-300"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 mx-6 mb-3 bg-zinc-500 rounded-sm outline-none px-7 text-zinc-300"
        />
        <p className="font-thin text-sm text-red-500 text-center">
          {errorMessage}
        </p>
        <button
          className="py-2 mt-2 ml-6 w-[15.5vw] font-semibold text-[1.2vw] text-zinc-200 bg-red-600 rounded-md"
          onClick={handlebuttonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-light text-xs text-end p-1 mr-6 text-zinc-300">
          Need help?
        </p>
        <p
          onClick={toggleSignInfrom}
          className="text-zinc-200 pt-5 -ml-2 font-semibold text-[1.1vw] cursor-pointer"
        >
          {isSignInForm
            ? "New to Netfilx? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
