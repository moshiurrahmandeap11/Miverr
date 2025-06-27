import React, { useEffect, useRef, useState } from "react";
import { FaGoogle, FaEnvelope, FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

import animationData from "../../assets/lottiefiles/signinlottie.json";
import useAuth from "../../Hooks/useAuth/useAuth";
import MiverrLoader from "../Loader/MiverrLoader";

const SignInModal = ({ onClose, onSwitchToSignUp }) => {
  const { loading, signInUser, googleUser, xUser, facebookUser } = useAuth();
  const modalRef = useRef();
  const navigate = useNavigate();

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleGoogleLogin = async () => {
    try {
      const res = await googleUser();
      if (res.user) {
        toast.success("Logged In Successfully");
        onClose();
        navigate("/");
      }
    } catch {
      toast.error("Google login failed");
    }
  };

  const handleXLogin = async () => {
    try {
      const res = await xUser();
      if (res.user) {
        toast.success("Logged In Successfully");
        onClose();
        navigate("/");
      }
    } catch {
      toast.error("X login failed");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const res = await facebookUser();
      if (res.user) {
        toast.success("Logged In Successfully");
        onClose();
        navigate("/");
      }
    } catch {
      toast.error("Facebook login failed");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInUser(email, password);
      if (res.user) {
        toast.success("Logged In Successfully");
        onClose();
        navigate("/");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  if (loading) return <MiverrLoader />;

  return (
    <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-lg w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full bg-gray-100 flex items-center justify-center p-6">
          <Lottie
            animationData={animationData}
            loop
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

        {/* Sign In Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Don't have an account?{" "}
              <button
                onClick={onSwitchToSignUp}
                className="text-indigo-600 font-bold hover:underline"
              >
                Join Here
              </button>
            </p>
          </div>

          {!showEmailForm ? (
            <>
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                <FcGoogle size={24} /> Continue with Google
              </button>
              <button
                onClick={() => setShowEmailForm(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                <FaEnvelope className="text-xl" /> Continue with Email/Password
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm text-gray-500">
                  <span className="bg-white px-2">or</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={handleXLogin}
                  className="btn bg-transparent text-black flex-1 border border-gray-300 hover:bg-gray-100"
                >
                  <FaXTwitter size={24} /> X
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="btn bg-transparent text-black flex-1 border border-gray-300 hover:bg-gray-100"
                >
                  <FaFacebook size={22} /> Facebook
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition font-semibold"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setShowEmailForm(false)}
                className="text-sm text-gray-500 hover:underline"
              >
                Back to other options
              </button>
            </form>
          )}

          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            By signing in, you agree to the Miverr{" "}
            <Link to={"/legal-terms"} className="text-indigo-600 underline">
              Terms of Service
            </Link>{" "}
            and consent to receive occasional emails from us. Please review our{" "}
            <Link to={"/privacy-policy"} className="text-indigo-600 underline">
              Privacy Policy
            </Link>{" "}
            to understand how your data is used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
