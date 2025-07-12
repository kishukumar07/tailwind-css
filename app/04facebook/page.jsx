import React from "react";

function facebook() {
  return (
     <div className="bg-gray-100">
      <div className="container mx-auto w-4/5 flex items-center justify-center">
        {/* Left Section */}
        <div className="left w-1/3 mx-14">
          <img className="w-80" src="fb.svg" alt="Facebook logo" />
          <p className="text-3xl mx-8">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Right Section */}
        <div className="right flex flex-col bg-white p-8 rounded-xl w-1/4 text-lg relative">
          <input
            className="px-4 h-12 my-2 border border-gray-200 outline-blue-600 rounded-lg"
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className="px-4 h-12 my-2 border border-gray-200 outline-blue-600 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold">
            Log In
          </button>
          <span className="text-blue-600 text-sm my-2 cursor-pointer hover:underline">
            Forgotten password?
          </span>
          <hr className="my-2" />
          <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit">
            Create New Account
          </button>
          <span className="absolute bottom-12 text-sm cursor-pointer font-bold hover:underline">
            Create a Page <br /> for a celebrity, brand or business.
          </span>
        </div>
      </div>
    </div>
  )
} 

export default facebook;
