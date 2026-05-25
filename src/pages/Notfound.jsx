import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-7xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600"
      >
        Go Back Home
      </Link>

    </div>
  );
}

export default NotFound;