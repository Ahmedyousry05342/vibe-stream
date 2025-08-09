import { useState, useRef } from "react";
import { validate } from "../utils/validate";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Body() {
  const [isSignIn, setisSignIn] = useState(true);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = () => {
    setisSignIn(!isSignIn);
    setError(null); // Clear errors when switching
  };

  const dispatch = useDispatch();
  const displayName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButton = async () => {
    setIsLoading(true);
    const massage = validate(email.current.value, password.current.value);
    setError(massage);

    if (massage) {
      setIsLoading(false);
      return;
    }

    if (!isSignIn) {
      // signup
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        
        await updateProfile(user, {
          displayName: displayName.current.value,
        });
        
        const { uid, email: userEmail, displayName: userDisplayName } = auth.currentUser;
        dispatch(addUser({ uid, email: userEmail, displayName: userDisplayName }));
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + " " + errorMessage);
      }
    } else {
      // sign in
      try {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode + " " + errorMessage);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse opacity-60" style={{backgroundColor: '#00FF00AA', animation: 'float 6s ease-in-out infinite, pulse 2s infinite'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-ping opacity-40" style={{backgroundColor: '#00FF00', animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite, drift 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 rounded-full animate-pulse opacity-50" style={{backgroundColor: '#66FF66', animation: 'bounce 3s infinite, pulse 2.5s infinite'}}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 rounded-full animate-ping opacity-30" style={{backgroundColor: '#00FF00AA', animation: 'spin 10s linear infinite, ping 3s infinite'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/5 w-0.5 h-0.5 rounded-full opacity-40" style={{backgroundColor: '#00FF00', animation: 'twinkle 4s ease-in-out infinite'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full opacity-30" style={{backgroundColor: '#66FF66', animation: 'float 7s ease-in-out infinite reverse'}}></div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 w-20 h-20 opacity-10" style={{animation: 'orbit 20s linear infinite'}}>
          <div className="absolute top-0 left-1/2 w-1 h-1 rounded-full" style={{backgroundColor: '#00FF00', transform: 'translateX(-50%)'}}></div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 opacity-05" style={{animation: 'orbit 30s linear infinite reverse'}}>
          <div className="absolute top-0 left-1/2 w-0.5 h-0.5 rounded-full" style={{backgroundColor: '#66FF66', transform: 'translateX(-50%)'}}></div>
        </div>
      </div>
      
      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes drift {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(30px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translate(-50%, -40%) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        @keyframes fadeInScale {
          from { 
            opacity: 0;
            transform: scale(0.8);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px #00FF0040; }
          50% { box-shadow: 0 0 30px #00FF0080, 0 0 40px #00FF0060; }
        }
      `}</style>

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Login Box */}
      <div className="absolute top-1/2 left-1/2 w-11/12 max-w-md transform -translate-x-1/2 -translate-y-1/2 z-10" style={{animation: 'slideInUp 0.8s ease-out'}}>
        <div className="relative">
          {/* Glow effect behind the card */}
          <div className="absolute inset-0 rounded-xl blur-xl" style={{background: 'linear-gradient(to right, #00FF0033, #00FF0055)', animation: 'glowPulse 3s ease-in-out infinite'}}></div>
          
          {/* Main Card */}
          <div className="relative bg-black/80 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden" style={{borderColor: '#00FF0050', borderWidth: '1px', borderStyle: 'solid'}}>
            {/* Header with gradient */}
            <div className="p-8 pb-6" style={{background: 'linear-gradient(to right, #00FF0019, #00FF0010)', animation: 'fadeInScale 0.6s ease-out 0.2s both'}}>
              <h2 className="text-3xl font-bold mb-2" style={{background: 'linear-gradient(to right, #00FF00, #66FF66)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'slideInLeft 0.8s ease-out 0.4s both'}}>
                {isSignIn ? "Welcome Back" : "Join Us"}
              </h2>
              <p className="text-gray-400 text-sm" style={{animation: 'slideInLeft 0.8s ease-out 0.6s both'}}>
                {isSignIn ? "Sign in to continue your journey" : "Create your account to get started"}
              </p>
            </div>

            <div className="p-8 pt-6">
              <div className="flex flex-col gap-5" style={{animation: 'fadeInScale 0.6s ease-out 0.4s both'}}>
                {/* Name Input for Sign Up */}
                {!isSignIn && (
                  <div className="relative group" style={{animation: 'slideInLeft 0.6s ease-out 0.8s both'}}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 transition-all duration-300" style={{'--focus-color': '#00FF00'}} />
                    </div>
                    <input
                      type="text"
                      ref={displayName}
                      placeholder="Full Name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 focus:ring-2 transform hover:scale-[1.01]"
                      style={{'--focus-border': '#00FF00', '--focus-ring': '#00FF0033'}}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00FF00';
                        e.target.style.boxShadow = `0 0 0 2px #00FF0033`;
                        e.target.style.transform = 'scale(1.01)';
                        e.target.previousElementSibling.querySelector('svg').style.color = '#00FF00';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#4B5563';
                        e.target.style.boxShadow = 'none';
                        e.target.style.transform = 'scale(1)';
                        e.target.previousElementSibling.querySelector('svg').style.color = '#9CA3AF';
                      }}
                    />
                  </div>
                )}

                {/* Email Input */}
                <div className="relative group" style={{animation: !isSignIn ? 'slideInLeft 0.6s ease-out 1s both' : 'slideInLeft 0.6s ease-out 0.8s both'}}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 transition-all duration-300" />
                  </div>
                  <input
                    required
                    ref={email}
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 focus:ring-2 transform hover:scale-[1.01]"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00FF00';
                      e.target.style.boxShadow = `0 0 0 2px #00FF0033`;
                      e.target.style.transform = 'scale(1.01)';
                      e.target.previousElementSibling.querySelector('svg').style.color = '#00FF00';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#4B5563';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'scale(1)';
                      e.target.previousElementSibling.querySelector('svg').style.color = '#9CA3AF';
                    }}
                  />
                </div>

                {/* Password Input */}
                <div className="relative group" style={{animation: !isSignIn ? 'slideInLeft 0.6s ease-out 1.2s both' : 'slideInLeft 0.6s ease-out 1s both'}}>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 transition-all duration-300" />
                  </div>
                  <input
                    required
                    ref={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none transition-all duration-300 text-white placeholder-gray-400 focus:ring-2 transform hover:scale-[1.01]"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#00FF00';
                      e.target.style.boxShadow = `0 0 0 2px #00FF0033`;
                      e.target.style.transform = 'scale(1.01)';
                      e.target.previousElementSibling.querySelector('svg').style.color = '#00FF00';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#4B5563';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'scale(1)';
                      e.target.previousElementSibling.querySelector('svg').style.color = '#9CA3AF';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center transform transition-transform duration-200 hover:scale-110"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 transition-all duration-300" style={{'--hover-color': '#00FF00'}} onMouseEnter={(e) => e.target.style.color = '#00FF00'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'} />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 transition-all duration-300" onMouseEnter={(e) => e.target.style.color = '#00FF00'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'} />
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3" style={{animation: 'slideInLeft 0.4s ease-out'}}>
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  className="relative text-black py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  style={{
                    background: isLoading ? '#00CC00' : 'linear-gradient(to right, #00FF00, #00CC00)',
                    boxShadow: '0 4px 14px 0 #00FF0040',
                    animation: !isSignIn ? 'slideInLeft 0.6s ease-out 1.4s both' : 'slideInLeft 0.6s ease-out 1.2s both'
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) {
                      e.target.style.background = 'linear-gradient(to right, #00CC00, #009900)';
                      e.target.style.boxShadow = '0 8px 25px 0 #00FF0060';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) {
                      e.target.style.background = 'linear-gradient(to right, #00FF00, #00CC00)';
                      e.target.style.boxShadow = '0 4px 14px 0 #00FF0040';
                    }
                  }}
                  onClick={(e) => {
                    // Add ripple effect
                    const rect = e.target.getBoundingClientRect();
                    const ripple = document.createElement('span');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(0, 0, 0, 0.3)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.left = (e.clientX - rect.left) + 'px';
                    ripple.style.top = (e.clientY - rect.top) + 'px';
                    ripple.style.width = ripple.style.height = '20px';
                    e.target.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                    
                    handleButton();
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                      {isSignIn ? "Signing In..." : "Creating Account..."}
                    </div>
                  ) : (
                    isSignIn ? "Sign In" : "Create Account"
                  )}
                </button>

                {/* Remember Me & Help */}
                <div className="flex items-center justify-between text-sm" style={{animation: !isSignIn ? 'slideInLeft 0.6s ease-out 1.6s both' : 'slideInLeft 0.6s ease-out 1.4s both'}}>
                  <label className="flex items-center text-gray-400 hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105">
                    <input 
                      type="checkbox" 
                      className="mr-2 w-4 h-4 bg-gray-800 border-gray-600 rounded focus:ring-2 transition-all duration-300" 
                      style={{'--focus-ring': '#00FF0080'}}
                      onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px #00FF0080`}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-gray-400 transition-all duration-300 hover:scale-105" onMouseEnter={(e) => e.target.style.color = '#00FF00'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                    Need help?
                  </a>
                </div>
              </div>

              {/* Toggle Auth Mode */}
              <div className="text-center mt-8 pt-6 border-t border-gray-700" style={{animation: !isSignIn ? 'fadeInScale 0.6s ease-out 1.8s both' : 'fadeInScale 0.6s ease-out 1.6s both'}}>
                <span className="text-gray-400 text-sm">
                  {isSignIn ? "New to VibeStream? " : "Already have an account? "}
                </span>
                <button
                  onClick={handleAuth}
                  className="font-medium transition-all duration-300 ml-1 hover:scale-105"
                  style={{color: '#00FF00'}}
                  onMouseEnter={(e) => e.target.style.color = '#66FF66'}
                  onMouseLeave={(e) => e.target.style.color = '#00FF00'}
                >
                  {isSignIn ? "Sign up now" : "Sign in"}
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 mt-6 text-center leading-relaxed" style={{animation: !isSignIn ? 'fadeInScale 0.6s ease-out 2s both' : 'fadeInScale 0.6s ease-out 1.8s both'}}>
                This is a personal project and does not associate itself with any company.{" "}
                <a href="#" className="transition-all duration-300 hover:scale-105 inline-block" style={{color: '#00FF00'}} onMouseEnter={(e) => e.target.style.color = '#66FF66'} onMouseLeave={(e) => e.target.style.color = '#00FF00'}>
                  Learn more
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;