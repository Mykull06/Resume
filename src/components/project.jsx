import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    //update the syntax below with real links and projects
    <div className="project">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
