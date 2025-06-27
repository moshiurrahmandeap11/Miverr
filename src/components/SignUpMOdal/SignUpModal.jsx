import React, { useEffect, useRef, useState } from "react";
import {  FaEnvelope, FaFacebook, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../assets/lottiefiles/joinlottie.json";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";
import MiverrLoader from "../Loader/MiverrLoader";
import toast from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";

const SignUpModal = ({ onClose, onSwitchToSignIn }) => {
  const { loading, googleUser, createUser, xUser, facebookUser } = useAuth();
  const modalRef = useRef();
  const navigate = useNavigate();
  const [showEmailForm, setShowEmailForm] = useState(false);
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const validatePassword = {
  length: password.length >= 8,
  upper: /[A-Z]/.test(password),
  lower: /[a-z]/.test(password),
  number: /\d/.test(password),
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleGoogleLogin = () => {
    googleUser()
      .then((res) => {
        if (res.user) {
          toast.success("Successfully logged in");
          onClose();
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Google sign-in failed");
      });
  };

  const handleEmailLogin = () => {
    setShowEmailForm(true);
  };

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then(res => {
      if(res.user){
        toast.success("Successfully Signed Up")
        onClose();
        navigate("/")
      }else{
        toast.error("Sign Up Failed")
      }
    }).catch(() => {
      toast.error("something went wrong")
    })
  }

  const handleXlogin = () => {
    xUser().then(res => {
      if(res.user){
        toast.success("Successfully signed up")
        onClose();
        navigate("/")
      }else{
        toast.error("Sign Up Failed")
      }
    }).catch(() => {
      toast.error("Something went wrong")
    })
  }

  const handleFacebookLogin = () => {
    facebookUser().then(res => {
      if(res.user){
        toast.success("Successfully signed up")
        onClose();
        navigate("/")
      }else {
        toast.error("Sign Up failed")
      }
    }).catch(() => {
      toast.error("Something went wrong")
    })
  }

  if (loading) {
    return <MiverrLoader />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Left - Lottie */}
        <div className="md:w-1/2 w-full bg-gray-100 flex items-center justify-center p-6">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center space-y-6">
          {!showEmailForm ? (
            <>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Create a new account
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Already have an account?{" "}
                  <button
                    onClick={onSwitchToSignIn}
                    className="text-indigo-600 font-bold hover:underline cursor-pointer bg-transparent border-0 p-0"
                  >
                    Sign In
                  </button>
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full text-black font-semibold cursor-pointer flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  <FcGoogle size={24} />
                  Continue with Google
                </button>
                <button
                  onClick={handleEmailLogin}
                  className="w-full text-black font-semibold cursor-pointer flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  <FaEnvelope className="text-xl" />
                  Continue with Email
                </button>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm text-gray-500">
                  <span className="bg-white px-2">or</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-3">
                <button onClick={handleXlogin} className="btn bg-transparent text-black flex-1">
                  <FaXTwitter size={22} /> X
                </button>
                <button onClick={handleFacebookLogin} className="btn bg-transparent text-black flex-1">
                  <FaFacebook size={22} /> Facebook
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowEmailForm(false)}
                className="flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-2"
              >
                <FaArrowLeft className="mr-1" />
                Back
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Sign up with Email
              </h2>

              <form onSubmit={handleSignUp} className="space-y-4">
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full text-black px-4 py-2 border rounded-md placeholder:text-gray-500 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-400"
  />

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="w-full text-black px-4 py-2 border rounded-md placeholder:text-gray-500 font-bold focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
    />
    <button
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>

  <div className="text-sm space-y-1">
    <p className={`font-medium ${validatePassword.length ? "text-green-600" : "text-red-500"}`}>
      • At least 8 characters
    </p>
    <p className={`font-medium ${validatePassword.upper ? "text-green-600" : "text-red-500"}`}>
      • At least 1 uppercase letter
    </p>
    <p className={`font-medium ${validatePassword.lower ? "text-green-600" : "text-red-500"}`}>
      • At least 1 lowercase letter
    </p>
    <p className={`font-medium ${validatePassword.number ? "text-green-600" : "text-red-500"}`}>
      • At least 1 number
    </p>
  </div>

  <button
    type="submit"
    className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
    disabled={
      !validatePassword.length ||
      !validatePassword.upper ||
      !validatePassword.lower ||
      !validatePassword.number
    }
  >
    Sign Up
  </button>
</form>

            </>
          )}

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            By joining, you agree to the Fiverr{" "}
            <Link to={"/legal-terms"} className="text-indigo-600 underline">
              Terms of Service
            </Link>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <Link to={"/privacy-policy"} className="text-indigo-600 underline">
              Privacy Policy
            </Link>{" "}
            to learn how we use your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
