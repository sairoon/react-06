import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="container flex justify-between items-center">
        <div className="w-28">
          <h1 className="py-4 font-bold">LOGO</h1>
        </div>
        <div className="w-4/5">
          <ul className="flex gap-5 justify-end">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
