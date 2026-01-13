import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-400">Contact Me</h1>
        <p className="text-gray-400 mt-2">
          Feel free to reach out through any platform below
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/asish-joy-a6a0ba306?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMMElVWwlQ1qU9N9QbY86eA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-indigo-400">
            LinkedIn
          </h2>
          <p className="text-gray-300 mt-2">
            Connect with me professionally
          </p>
          <p className="text-indigo-300 mt-1">
            linkedin.com/in/your-profile
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/AsishJoy"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-indigo-400">
            GitHub
          </h2>
          <p className="text-gray-300 mt-2">
            View my projects and code
          </p>
          <p className="text-indigo-300 mt-1">
            github.com/your-username
          </p>
        </a>

        {/* Email */}
        <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-indigo-400">
            Email
          </h2>
          <p className="text-gray-300 mt-2">
            Send me an email
          </p>
          <p className="text-indigo-300 mt-1">
            joyasish94@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-indigo-400">
            Contact
          </h2>
          <p className="text-gray-300 mt-2">
            Call or WhatsApp
          </p>
          <p className="text-indigo-300 mt-1">
            +91 954492517
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
