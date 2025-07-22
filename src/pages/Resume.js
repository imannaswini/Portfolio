import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>
      <p>You can  download my resume below:</p>

      {/* ✅ Download button */}
      <a
        href="/Resume.pdf"
        download
        className="resume-btn"
      >
        📄 Download Resume
      </a>

      {/* ✅ Embedded preview */}
     
    </section>
  );
};

export default Resume;
