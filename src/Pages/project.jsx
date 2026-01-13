import React from "react";

function Project() {
  return (
    <section id="projects" className="bg-[#165f69ff] py-16 px-10">
    <div className="bg-[#165f69ff] px-10 pb-10">

      {/* White Container (same style as Profile & Skills) */}
      <div className="bg-white rounded-2xl p-8 max-w-[100%] ml-auto flex flex-col gap-6">

        <h2 className="text-lg font-semibold">
          Projects
        </h2>

        {/* ===== Project 1 ===== */}
        <div className="border-2 border-gray-300 rounded-lg p-5">
          <h3 className="text-base font-semibold mb-2">
            Student Management System
          </h3>

          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Tools Used:</span> HTML, CSS,
            JavaScript, Node.js, MongoDB
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Developed a Student Management System that allows users to efficiently
            manage student-related book records. The system supports adding new
            book details, editing existing information, deleting records, and
            searching or filtering books based on specific criteria.
            <br /><br />
            Designed to improve data organization and accessibility, the
            application provides a clean interface for quick record updates and
            reliable data retrieval. This project demonstrates strong CRUD
            operations, structured data handling, and user-friendly UI
            implementation.
          </p>
        </div>

        {/* ===== Project 2 ===== */}
        <div className="border-2 border-gray-300 rounded-lg p-5">
          <h3 className="text-base font-semibold mb-2">
            E-Commerce Website
          </h3>

          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Tools Used:</span> HTML, CSS,
            JavaScript, Node.js, Express, MongoDB
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Developed a role-based e-commerce platform where sellers can
            register/login, add new products, edit product details, and delete
            listings, while buyers can create accounts, log in, and search for
            products.
            <br /><br />
            Implemented secure authentication, RESTful APIs, and structured
            MongoDB schemas for users and products. Built responsive UI components
            using React and managed backend logic with Node.js and Express
            following MVC architecture.
          </p>
        </div>

      </div>
    </div>
    </section>
  );
}

export default Project;
