import { useState } from "react";
import { useRef } from "react";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

function Body() {
  const [isSignIn, setisSignIn] = useState(true);
  const [error, setError] = useState(null);

  const handleAuth = () => {
    setisSignIn(!isSignIn);
  };

  const dispatch = useDispatch()
  const displayName = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButton = () => {
    const massage = validate(email.current.value, password.current.value);
    setError(massage);

    if (massage) return;

    if (!isSignIn) {
      //signup

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
          }) 
            .then(() => {
              // Profile updated!
              const {uid,email,displayName} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            })
            .catch((error) => {
              setError(error)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div
      className="relative w-full h-screen md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG_IMG})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Login Box */}
      <div className="absolute top-70 md:top-1/2 left-1/2 w-11/12 max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg z-10">
        <div className="bg-black/70 text-white p-10 rounded-md">
          <h2 className="text-3xl font-bold mb-6">
            {isSignIn ? "Login" : "Sign Up"}
          </h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {!isSignIn && (
              <input
                type="text"
                ref={displayName}
                placeholder="Full Name"
                className="p-3 rounded bg-[#333] focus:outline-none"
              />
            )}
            <input
              required
              ref={email}
              type="text"
              placeholder="Email or phone number"
              className="p-3 rounded bg-[#333] focus:outline-none"
            />
            <input
              required
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-[#333] focus:outline-none"
            />

            <p className="text-red-500 font-bold text-md">{error}</p>

            <button
              className="bg-red-600 cursor-pointer hover:bg-red-700 transition-colors text-white py-3 rounded font-semibold"
              onClick={handleButton}
            >
              {isSignIn ? "Login" : "Sign Up"}
            </button>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>

          <div className="text-sm text-gray-400 mt-6">
            {isSignIn ? `New to Netflix? ` : "Already a User?"}
            <a
              href="#"
              className="text-white hover:underline"
              onClick={handleAuth}
            >
              {isSignIn ? "Sign up now." : "Login Now"}
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This is personal project, this project do not associate itself to any company.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
