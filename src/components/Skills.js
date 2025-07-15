import React from "react";
import { 
  FaCode, FaJava, FaHtml5, FaCss3Alt, FaJs, 
  FaReact, FaNodeJs, FaDatabase, FaFigma 
} from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "C", icon: <FaCode className="icon" /> },
  { name: "Java", icon: <FaJava className="icon" /> },
  { name: "HTML", icon: <FaHtml5 className="icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon" /> },
  { name: "JavaScript", icon: <FaJs className="icon" /> },
  { name: "React.js", icon: <FaReact className="icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon" /> },
  { name: "MongoDB", icon: <FaDatabase className="icon" /> },
  { name: "Figma", icon: <FaFigma className="icon" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
