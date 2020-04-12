import React from 'react';
const projectData = require('../projects.json');

const Projects = () => {
  return (
    <div id="project-grid-container">
      <div className="project-grid-item">
        <p className="projects-decorater">projects</p>
      </div>

      { projectData.map(project =>
        <div key={project.id} className="project-grid-item">
          <p className="project-name">{project.project_name}</p>
          <a className="live-link" href={project.live_link} rel="noreferrer noopener" target="_blank">
            <img className="project-thumbnail" src={require(`../images/${project.target}`)} alt={project.project_name} />
          </a>
        </div>
      )}
      
    </div>
  )
}

export default Projects