import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";


function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      navigate("/browse")
    } else {
      dispatch(removeUser())
      navigate("/")
    }
  });

  return () => unSubscribe();

  }, [])
  

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
      });
      
  };
  return (
    <header className="w-full flex justify-between px-10 md:px-20 py-8 absolute z-40 ">
      <div>
        <img
          className="h-6 md:h-10"
          src={LOGO}
          alt=""
        />
      </div>
      {user && <div className="flex items-center gap-2">
        <p className="font-semibold text-white">Welcome <span className="text-red-700 font-semibold">{user.displayName}</span></p>
        <p onClick={handleSignOut} className="bg-red-700 text-white p-2 rounded-2xl px-6 font-bold cursor-pointer">
          sign out
        </p>
      </div>}
    </header>
  );
}

export default Header;
