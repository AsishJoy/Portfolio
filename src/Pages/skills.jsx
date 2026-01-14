import React from "react";

function Skills() {
  return (
    <div className="  px-10 pb-10">

      {/* White Container (same as ProfilePage right panel) */}
      <div className="bg-gray-900 rounded-2xl p-8 max-w-[100%] ml-auto">

        <h2 className="text-white font-semibold text-xl mt-5">
          Skills
        </h2><br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Skill Card */}
          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
            <h4 className="font-semibold text-sm mb-1 text-indigo-400">
              Programming Languages & Core Technologies
            </h4>
            <p className="text-gray-300 text-sm">
              HTML5, CSS3, JavaScript (ES6+)
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
            <h4 className="font-semibold text-sm mb-1 text-indigo-400">
              Frameworks & Libraries
            </h4>
            <p className="text-gray-300 text-sm">
              React.js, Node.js, Express.js, Redux, React Router,
              Multer, Socket.io, JWT
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
            <h4 className="font-semibold text-sm mb-1 text-indigo-400">
              Databases
            </h4>
            <p className="text-gray-300 text-sm">
              MongoDB
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
            <h4 className="font-semibold text-sm mb-1 text-indigo-400">
              Tools & Platforms
            </h4>
            <p className="text-gray-300 text-sm">
              Git, GitHub, VS Code
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
            <h4 className=" font-semibold text-sm mb-1 text-indigo-400">
              Concepts & Architecture
            </h4>
            <p className="text-gray-300 text-sm ">
              Middleware & API structure, RESTful APIs, MVC architecture,
              JWT Auth, Axios / Fetch API
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
