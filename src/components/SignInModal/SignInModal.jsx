import React, { useEffect, useRef } from "react";
import { FaGoogle, FaEnvelope, FaApple, FaFacebook } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../assets/lottiefiles/signinlottie.json"
import { FcGoogle } from "react-icons/fc";

const SignInModal = ({ onClose, onSwitchToSignUp }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

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
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Don't have an account?{" "}
              <button
                onClick={onSwitchToSignUp}
                className="text-indigo-600 font-bold hover:underline cursor-pointer bg-transparent border-0 p-0"
              >
                Join Here
              </button>
            </p>
          </div>

          <div className="space-y-3">
            <button className="w-full cursor-pointer text-black font-semibold flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <FcGoogle size={24} />
              Continue with Google
            </button>
            <button className="w-full text-black font-semibold cursor-pointer flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              <FaEnvelope className="text-xl" />
              Continue with Email/Password
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
            <button className="btn bg-transparent text-black flex-1">
              <FaApple size={24} /> Apple
            </button>
            <button className="btn bg-transparent text-black flex-1">
              <FaFacebook size={22} /> Facebook
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            By signing in, you agree to the Fiverr{" "}
            <a href="#" className="text-indigo-600 underline">
              Terms of Service
            </a>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <a href="#" className="text-indigo-600 underline">
              Privacy Policy
            </a>{" "}
            to learn how we use your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
