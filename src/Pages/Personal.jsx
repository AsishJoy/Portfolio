import React from "react";
import Skills from "./skills";

function ProfilePage() {
  return (
    <section
      id="about"
      className="relative min-h-screen animated-bg overflow-hidden px-10 py-20 hover:-translate-y-2 transition duration-500 transition transform shadow-lg"
    >
      {/* Glow Orbs */}
      <div
        className="absolute w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[120px] 
                   top-[-100px] left-[-100px] float-orb"
      ></div>

      <div
        className="absolute w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[120px] 
                   bottom-[-100px] right-[-100px] float-orb"
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Card */}
      <div className="relative z-10 flex justify-center fade-up">
        <div
          className="max-w-6xl w-full bg-white/5 backdrop-blur-xl rounded-3xl 
                     border border-white/10 shadow-xl overflow-hidden
                     grid grid-cols-1 md:grid-cols-2"
        >

          {/* LEFT CONTENT */}
          <div className="p-10 flex flex-col justify-between">
            <div>
             

              {/* BIG NAME */}
              <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight  hover:-translate-y-2 transition duration-500 transition transform shadow-lg">
                ASISH
              </h1>
              <h1 className="text-indigo-400 text-5xl md:text-6xl font-extrabold mb-6 leading-tight  hover:-translate-y-2 transition duration-500 transition transform shadow-lg">
                JOY
              </h1>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Passionate MERN Stack Developer focused on building elegant, scalable and
                modern web applications using React, Node.js and MongoDB.
              </p>
            </div>

            {/* INFO GRID */}
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <p className="text-gray-500">Role</p>
                <p className="font-semibold">MERN Developer</p>
              </div>
              <div>
                <p className="text-gray-500">Age</p>
                <p className="font-semibold">22</p>
              </div>
              <div>
                <p className="text-gray-500">DOB</p>
                <p className="font-semibold">27 Dec 2003</p>
              </div>
              <div>
                <p className="text-gray-500">Place</p>
                <p className="font-semibold">KOCHI</p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <a
                href="/Asish_Joy_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                           bg-gradient-to-r from-indigo-500 to-blue-500
                           text-white text-sm font-semibold
                           hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30
                           transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center p-10">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-[420px] w-auto rounded-2xl object-cover
                         border-1 border-indigo-400 shadow-xl shadow-indigo-500/30  hover:-translate-y-2 transition duration-500 transition transform shadow-lg"
            />
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
