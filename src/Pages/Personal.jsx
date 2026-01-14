import React from "react";
import Skills from "./skills";

function ProfilePage() {
  return (
    <section
      id="about"
      className="relative min-h-screen animated-bg overflow-hidden px-10 py-20"
    >
      {/* Glow Orbs */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px] 
                      top-[-100px] left-[-100px] float-orb"></div>

      <div className="absolute w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[120px] 
                      bottom-[-100px] right-[-100px] float-orb"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center fade-up">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Profile Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 
                          shadow-xl hover:-translate-y-2 transition duration-500">
            <div className="flex flex-col items-center text-center">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
              />
              <h2 className="text-white font-semibold text-xl mt-5">
                ASISH JOY
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                MERN Stack Developer
              </p>
            </div>
          </div>

         {/* About Section */}
<div className="md:col-span-2 bg-white/5 backdrop-blur-xl rounded-3xl p-10 
                border border-white/10 shadow-xl hover:-translate-y-2 transition duration-500">

  <h3 className="text-indigo-400 font-semibold text-lg mb-3">
    About Me
  </h3>

  <p className="text-gray-300 leading-relaxed">
    Passionate developer focused on building elegant, scalable and modern web
    applications using React, Node.js, MongoDB and cloud technologies.
  </p>

  <br />

  <div className="flex flex-col gap-2 text-gray-300 leading-relaxed">
    <p>Age : 22 years</p>
    <p>Date Of Birth : 27/December/2003</p>
  </div>

  {/* Resume Button */}
  <div className="mt-6">
    <a
      href="/Asish_Joy_Resume.pdf"   // file in public folder
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                 bg-gradient-to-r from-indigo-500 to-blue-500
                 text-white text-sm font-semibold
                 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30
                 transition duration-300"
    >
      Download Resume
      ⬇️
    </a>
  </div>

</div>

        </div>
      </div>

      {/* Skills */}
      <div className="relative z-10 mt-20 fade-up">
        <Skills />
      </div>
    </section>
  );
}

export default ProfilePage;
