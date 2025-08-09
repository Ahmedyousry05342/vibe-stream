import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import "../App.css";
import { toggleGptButton } from "../utils/GptSlice";
import movieImg from "../assets/Movie.png";
import signOutLogo from "../assets/signout.png";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptButtonStatus = useSelector((store) => store.gpt.gptButton);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptButton = () => {
    dispatch(toggleGptButton());
  };
  return (
    <header className="w-full md:bg-transparent bg-black flex justify-between items-center px-5 md:px-20 py-8 md:absolute z-40 ">
      <div>
        <img className="h-9 md:h-16" src={movieImg} alt="" />
      </div>
      {user && (
        <div className="flex relative items-center gap-2">
          <p className="font-semibold text-white hidden md:inline">
            Welcome {user.displayName}
          </p>
          <button className="uiverse" onClick={handleGptButton}>
            <div className="wrapper">
              <span>{gptButtonStatus ? "Browse" : "GPT"}</span>
              <div className="circle circle-12"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-1"></div>
            </div>
          </button>
          <p
            onClick={handleSignOut}
            className="text-white font-semibold cursor-pointer p-2 border-2 border-transparent rounded-full transition-all duration-200 ease-out hover:border-green-400/50 hover:bg-green-400/10 hover:scale-105 active:scale-95 active:bg-red-500/20 group"
          >
            <img
              className="w-10 transition-all duration-200 ease-out group-hover:brightness-110 group-active:brightness-90"
              src={signOutLogo}
              alt="Sign Out"
            />
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;
