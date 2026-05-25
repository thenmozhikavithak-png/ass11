import React from "react";
import { useLoaderData } from "react-router-dom";

function Userdetail() {
  const user = useLoaderData();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 bg-[url('img3.png')] bg-cover bg-center">


      <div className="bg-white p-8 rounded-2xl shadow w-96 ">
        <h1 className="text-3xl font-bold text-blue-500 mb-5">
          Student Details
        </h1>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Age:</b> {user.age}</p>
        <p><b>Course:</b> {user.course}</p>
        <p><b>Email:</b> {user.email}</p>

      </div>

    </div>
  );
}

export default Userdetail;