import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-gray-800">
        <div className="container flex justify-between items-center">
          <div className="w-28">
            <Link className="py-4 font-bold" to="/">LOGO</Link>
          </div>
          <div className="w-4/5">
            <ul className="flex gap-5 justify-end">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
