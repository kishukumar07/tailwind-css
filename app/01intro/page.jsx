import React from "react";

function page() {
  return (
    <>
      <nav className="px-4 py-4 bg-purple-900 text-cyan-300">
        <ul className="flex">
          <li className="mx-2 cursor-pointer ">Home</li>
          <li className="mx-2 cursor-pointer ">About</li>
          <li className="mx-2 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default page;
