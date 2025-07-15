import React from 'react';
import profile from '../assets/profile.jpg';

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <div className="about-container">
      <img src={profile} alt="Profile" className="profile-img" />
      <p>
       I am Mannaswini, a third‑year B.Tech Computer Science and Engineering student at REVA University, passionate about full stack development and exploring generative AI. I have hands‑on experience in building web applications with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, and a strong foundation in C and Java. My projects include a student management system with CRUD operations and grade tracking, and I have successfully completed challenging projects under strict deadlines while mentoring peers along the way.

I actively participate in hackathons hosted by GeeksforGeeks, Google Developer Student Clubs, and Argonyx, honing my quick leadership and problem‑solving skills. With certifications in Enterprise Data Science and Design Thinking from IBM and multiple Google Cloud badges, I aspire to contribute to open‑source AI tools and develop products that create real‑world impact in education, healthcare, and beyond.
      </p>
    </div>
  </section>
);

export default About;
