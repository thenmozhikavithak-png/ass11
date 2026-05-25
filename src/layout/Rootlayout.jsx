import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Rootlayout() {
  return (<>
    
    <div className="flex">

      <Navbar />

      <div className="ml-64 w-full min-h-screen">

        <Outlet />

        <Footer />

      </div>

    </div></>
  );
}

export default Rootlayout;