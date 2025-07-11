import React from "react";

function page() {
  return (
    <>
      <nav className="bg-green-600 flex  justify-between ">
        <img
          className="h-10 px-2 py-2 rounded-2xl"
          src="https://api-ninjas.com/images/apininjas_logo.png"
          alt="Logo"
        />

        <ul className=" px-20 py-2 flex space-x-3 justify-end">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Phone</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      <main className="bg-black flex  justify-around px-9">
        <div className="  py-40 ">
          <div className="text-6xl">The best phones in the town</div>
          <p className="w-1/2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex atque
            tenetur quibusdam. Sequi magni nemo assumenda expedita
            exercitationem doloribus sit, eligendi repudiandae saepe?
          </p>
          <div className="buttons">
            <button className="mx-2 my-4 bg-purple-800 px-3 py-2 rounded-2xl hover:text-slate-900 hover:bg-purple-300">
              Buy Now
            </button>
            <button className="mx-2 my-4 bg-purple-800 px-3 py-2 rounded-2xl hover:text-slate-900 hover:bg-purple-300">
              Contct Now
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className=""
            src="https://cdn.creazilla.com/cliparts/35685/business-man-mobile-phone-clipart-md.png"
            alt="mancall"
          />
        </div>
      </main>
    </>
  );
}

export default page;
