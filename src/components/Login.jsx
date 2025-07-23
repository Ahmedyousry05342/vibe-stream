import { useState } from "react";
function Body() {
  const [isSignIn, setisSignIn] = useState(true)

  const handleAuth = () => {
    setisSignIn(!isSignIn)
    console.log(isSignIn);
    
  }
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Login Box */}
      <div className="absolute top-1/2 left-1/2 w-11/12 max-w-md transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg z-10">
        <div className="bg-black/70 text-white p-10 rounded-md">
          <h2 className="text-3xl font-bold mb-6">{isSignIn?"Login":"Sign Up"}</h2>

          <form className="flex flex-col gap-4">
            {!isSignIn && <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded bg-[#333] focus:outline-none"
            />}
            <input
              type="text"
              placeholder="Email or phone number"
              className="p-3 rounded bg-[#333] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-[#333] focus:outline-none"
            />

            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white py-3 rounded font-semibold">
              {isSignIn?"Login":"Sign Up"}
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

          <div className="text-sm text-gray-400 mt-6" >
            {isSignIn?`New to Netflix? `:"Already a User?"}
            <a href="#" className="text-white hover:underline" onClick={handleAuth}>
              {isSignIn?"Sign up now.":"Login Now"}
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
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
