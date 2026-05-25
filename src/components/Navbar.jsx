import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (<>
    
     
    <div className="w-64 h-screen bg-white text-black fixed left-0 top-0 p-5">
     
 <h1 className="text-xl  font-bold">
        E-Class
      </h1>


      <ul className="flex flex-col gap-8 text-3xl">

        <li className="hover:bg-white hover:text-blue-500 p-5 rounded-xl transition">
          <Link to="/">  🏠︎ Home</Link>
        </li>

        <li className="hover:bg-white hover:text-blue-500 p-5 rounded-xl transition">
          <Link to="/about">   ⓘ About</Link>
        </li>

        <li className="hover:bg-white hover:text-blue-500 p-5 rounded-xl transition">
          <Link to="/user">  👤 User</Link>
        </li>

      </ul>

    </div></>
  );
}

export default Navbar;