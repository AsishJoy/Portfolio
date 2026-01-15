import React from "react";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Network,

  Braces,
  Palette,
  Atom,
  Server,
  GitBranch,
  Github,
  Monitor,
  ShieldCheck,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      title: "Programming",
      icon: <Code2 size={26} />,
      items: [
        { name: "HTML", icon: <Braces size={36} /> },
        { name: "CSS", icon: <Palette size={36} /> },
        { name: "JS", icon: <Braces size={36} /> },
      ],
    },
    {
      title: "Frameworks",
      icon: <Layers size={26} />,
      items: [
        { name: "React", icon: <Atom size={36} /> },
        { name: "Node", icon: <Server size={36} /> },
        { name: "Express", icon: <Network size={36} /> },
      ],
    },
    {
      title: "Database",
      icon: <Database size={26} />,
      items: [
        { name: "MongoDB", icon: <Database size={36} /> },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench size={26} />,
      items: [
        { name: "Git", icon: <GitBranch size={36} /> },
        { name: "GitHub", icon: <Github size={36} /> },
        { name: "VS Code", icon: <Monitor size={36} /> },
      ],
    },
    {
      title: "Architecture",
      icon: <Network size={26} />,
      items: [
        { name: "REST", icon: <Network size={36} /> },
        { name: "JWT", icon: <ShieldCheck size={36} /> },
      ],
    },
  ];

  return (
    <div className="px-10 pb-10">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-full ml-auto">
        <h2 className="text-white font-semibold text-xl mb-6">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700
                         hover:scale-105 transition transform shadow-lg
                         flex flex-col gap-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="text-indigo-400 bg-gray-900 p-3 rounded-lg">
                  {skill.icon}
                </div>
                <h4 className="text-white font-semibold text-sm">
                  {skill.title}
                </h4>
              </div>

              {/* Bigger Skill Icons */}
              <div className="grid grid-cols-3 gap-5">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2
                               text-gray-300 hover:text-indigo-400 transition"
                  >
                    <div
                      className="bg-gray-900 p-3 rounded-full
                                 hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]
                                 transition"
                    >
                      {item.icon}
                    </div>
                    <span className="text-xs">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
