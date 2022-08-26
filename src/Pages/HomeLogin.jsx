import React from "react";
import { useState, useEffect } from "react";
import { keyCheck } from "../Features/WeatherSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeLogin() {
  const [title, setTitle] = useState("");
  const { isError } = useSelector((state) => state.weatherSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const key = sessionStorage.getItem("login-key") || null;

  const check = () => {
    dispatch(keyCheck(title));
  };

  useEffect(() => {
    if (key) {
      return navigate("/dashboard");
    }
  }, [navigate, key, title, isError]);

  useEffect(() => {
    sessionStorage.getItem("login-key");
  }, [key]);

  return (
    <div className="bg-slate-900	flex flex-col justify-center items-center h-screen">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}
      {toast}
      <div className="mb-36 flex items-center">
        <input
          type="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Api Key"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {title && (
          <button
            type="button"
            onClick={check}
            className="ml-2 focus:outline-none text-white bg-purple-700 p-4 hover:bg-purple-800  focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default HomeLogin;
