import React from "react";
import { Link } from "react-router-dom";

function User() {

  const users = [
    {
      id: 1,
      name: "Kavi",
      course: "Full Stack Development",
    },

    {
      id: 2,
      name: "Arun",
      course: "UI/UX Design",
    },

    {
      id: 3,
      name: "Priya",
      course: "Python Programming",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">

      <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">
        Students
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h2 className="text-2xl font-bold">
              {user.name}
            </h2>

            <p className="mt-3 text-gray-600">
              {user.course}
            </p>

            <Link
              to={`/userdetail/${user.id}`}
              className="inline-block mt-5 bg-blue-500 text-white px-5 py-2 rounded-xl"
            >
              View Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default User;