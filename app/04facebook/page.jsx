import React from "react";

function facebook() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between bg-gray-100">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left p-6">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" className="w-80 mx-auto md:mx-0 p-0"  />
          <p className="text-2xl md:text-3xl mt-2 md:mt-6 max-w-md">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <input
            type="text"
            placeholder="Email address or phone number"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-600"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md mb-3">
            Log In
          </button>
          <div className="text-center mb-3">
            <a
              href="#"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgotten password?
            </a>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-md">
              Create New Account
            </button>
          </div>
          <div className="text-center text-sm mt-5">
            <span className="font-bold hover:underline cursor-pointer">
              Create a Page
            </span>{' '}
            for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );
} 

export default facebook;
