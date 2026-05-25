import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8">

     
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500">
          About E-Class
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
          E-Class is an online learning platform designed to help students
          learn new skills anytime and anywhere with expert guidance.
        </p>
      </div>

    
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-5">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide quality education to every student
            through interactive online classes, practical projects,
            and easy-to-understand lessons.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students Learning"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="mt-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose E-Class?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Expert Mentors
            </h3>

            <p className="text-gray-600">
              Learn from experienced industry professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Flexible Learning
            </h3>

            <p className="text-gray-600">
              Study at your own pace anytime, anywhere.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-3">
              Practical Projects
            </h3>

            <p className="text-gray-600">
              Build real-world projects to improve your skills.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;