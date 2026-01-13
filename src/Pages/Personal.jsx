import React from "react";
import Skills from "./skills";

function ProfilePage() {
  return (<>
  <section id="about" className="bg-[#165f69ff] py-16 px-10">
    <div className="flex bg-[#165f69ff] p-10">
      
      {/* Left Panel */}
      <div className="w-[30%] bg-[#080808ff] text-white rounded-2xl flex flex-col items-center justify-center">
        <img
          src="/profile.jpg"
          alt="PROFILE"
          className="w-40 h-40 rounded-full object-cover"
        />
        <p className="mt-2 text-sm opacity-70">Asish Joy</p>
      </div>

      {/* Right Panel */}
      <div className="w-[70%] ml-8 bg-white rounded-2xl p-8 flex flex-col gap-5">

        {/* Personal Details */}
        <div className="border-2 border-gray-300 rounded-lg px-4 py-3 text-lg">
          ASISH JOY
        </div>

        <div className="border-2 border-gray-300 rounded-lg px-4 py-3 text-lg">
          MERN Stack Developer
        </div>

        <div className="border-2 border-gray-300 rounded-lg px-4 py-3 min-h-[120px] text-base">
          <b>About</b>
          <p className="mt-2">
            Passionate developer focused on building responsive and modern web
            applications using React, Node.js, and MongoDB.
          </p>
        </div>
      </div>

    </div>
    <Skills/>
    </section>
    
   </>
  );
}

export default ProfilePage;
