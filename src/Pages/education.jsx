import React from "react";

function Education() {
  return (
    <section id="education" className="bg-[#165f69ff] py-16 px-10">
      <div className="bg-white rounded-2xl p-8 max-w-[95%] mx-auto flex flex-col gap-6">

        <h2 className="text-lg font-semibold">Education & Experience</h2>

        {/* Internship */}
        <div className="border-2 border-gray-300 rounded-lg p-5">
          <h3 className="text-base font-semibold mb-2">
            MERN STACK Development Intern
          </h3>
          <p className="text-gray-700 text-sm mb-1 font-semibold">
            Synnefo Solutions
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <span className="font-semibold">Duration:</span> 04/2025 – Present  
            <span className="ml-4 font-semibold">Location:</span> Ernakulam, Kerala
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Built internal web tools and client-facing applications using React and Node.js</li>
            <li>Collaborated with design and QA teams to deliver pixel-perfect, bug-free UIs</li>
            <li>Integrated RESTful APIs and managed MongoDB schemas</li>
            <li>Improved performance of several legacy components through refactoring</li>
          </ul>
        </div>

        {/* Degree */}
        <div className="border-2 border-gray-300 rounded-lg p-5">
          <h3 className="text-base font-semibold mb-2">
            B.Sc. Computer Science
          </h3>
          <p className="text-gray-700 text-sm mb-1 font-semibold">
            University of Kerala
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <span className="font-semibold">Duration:</span> 10/2022 – 04/2025
          </p>
          <p className="text-gray-700 text-sm mb-3">
            Kerala, India
          </p>
          {/* BSc Points */}
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Strong foundation in programming, data structures, algorithms, and software development</li>
            <li>Proficient in Python, Java, C++, JavaScript, SQL, and Git</li>
            <li>Experience in web, mobile, and desktop application development through projects</li>
            <li>Knowledge of databases, operating systems, computer networks, and system design</li>
            <li>Participated in coding competitions, hackathons, and relevant workshops or certifications</li>
            <li>Excellent problem-solving, teamwork, and adaptability skills for practical technology solutions</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Education;
