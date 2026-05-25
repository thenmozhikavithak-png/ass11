import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      
      <section className="bg-[url('img2.png')] bg-cover bg-center h-screen text-white mt-10 text-center py-10 px-5">
        
        <h1 className="text-5xl font-bold">
          Welcome to E-Class
        </h1>

        <p className="mt-5 text-lg">
          Learn anytime, anywhere with expert instructors
        </p>

        <button className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
          Start Learning
        </button>

      </section>

      <section className="mt-10 py-16 px-8 bg-[url('img.png')] bg-cover bg-center  ">

       <h2 className="text-3xl font-bold mt-20 text-center text-white">
  Our Features
</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8">

          <div className="bg-blue-200 p-15 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Live Classes
            </h3>

            <p className="text-gray-600">
              Attend live interactive classes from expert mentors.
            </p>
          </div>

          <div className="bg-blue-200 p-15 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Recorded Videos
            </h3>

            <p className="text-gray-600">
              Watch recorded sessions anytime for revision.
            </p>
          </div>

          <div className="bg-blue-200 p-15 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Certificates
            </h3>

            <p className="text-gray-600">
              Earn certificates after completing your courses.
            </p>
          </div>

        </div>
      </section>

 
      <section className="py-16 px-8 bg-white">

        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">
              Full Stack Development
            </h3>

            <p className="mt-3 text-gray-600">
              Learn React, Node.js, MongoDB and more.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">
              UI/UX Design
            </h3>

            <p className="mt-3 text-gray-600">
              Create beautiful and user-friendly designs.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold">
              Python Programming
            </h3>

            <p className="mt-3 text-gray-600">
              Master Python from beginner to advanced level.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;