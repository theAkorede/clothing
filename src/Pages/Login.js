import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/akoredeSlice";
import { ToastContainer,toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // ...
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-5 md:p-10">
      <div className="text-2xl font-semibold mb-5 text-center">
        Welcome back! Please Enter Your Details
      </div>

      <div className="w-full max-w-md mx-auto space-y-4">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="w-full max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <label className="text-sm cursor-pointer">Remember me</label>
        </div>
        <p className="text-sm font-medium cursor-pointer underline">
          Forgot password
        </p>
      </div>

      <div className="w-full max-w-md mx-auto space-y-4">
        <button className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
          Log in
        </button>
        <button className="w-full py-3 border border-black rounded-md hover:border-gray-800 hover:text-gray-800 transition duration-300">
          Register
        </button>
      </div>

      <div
        onClick={handleGoogleLogin}
        className="w-full max-w-md mx-auto bg-white border border-black rounded-md p-4 flex items-center justify-center cursor-pointer"
      >
        <FcGoogle className="h-6 mr-2" />
        Sign in with Google
      </div>
      <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
        Sign Out
      </button>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="w-full max-w-md mx-auto mt-4 border-t border-gray-300 pt-4 text-center relative">
        <p className="text-lg text-gray-800 bg-white px-4 inline-block relative z-10">
          or
        </p>
      </div>

      <div className="text-sm text-black mt-4 text-center">
        Don't have an account?{" "}
        <span className="font-semibold underline cursor-pointer">
          Sign Up for free
        </span>
      </div>
    </div>
  );
};

export default Login;
