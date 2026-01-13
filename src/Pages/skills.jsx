import React from "react";

function Skills() {
  return (
    <div className=" bg-[#165f69ff] px-10 pb-10">

      {/* White Container (same as ProfilePage right panel) */}
      <div className="bg-white rounded-2xl p-8 max-w-[100%] ml-auto">

        <h2 className="text-lg font-semibold mb-6">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Skill Card */}
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">
              Programming Languages & Core Technologies
            </h4>
            <p className="text-gray-700 text-sm">
              HTML5, CSS3, JavaScript (ES6+)
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">
              Frameworks & Libraries
            </h4>
            <p className="text-gray-700 text-sm">
              React.js, Node.js, Express.js, Redux, React Router,
              Multer, Socket.io, JWT
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">
              Databases
            </h4>
            <p className="text-gray-700 text-sm">
              MongoDB
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold text-sm mb-1">
              Tools & Platforms
            </h4>
            <p className="text-gray-700 text-sm">
              Git, GitHub, VS Code
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-4 md:col-span-2">
            <h4 className="font-semibold text-sm mb-1">
              Concepts & Architecture
            </h4>
            <p className="text-gray-700 text-sm">
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
