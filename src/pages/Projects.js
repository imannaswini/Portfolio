import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
