import React from 'react';
import Project from '../components/Project';

const PortfolioPage = () => {
  const projects = [
    //insert real data below
    {
      title: 'Sample',
      image: 'path/to/sample.jpg',
      deployedLink: 'https://sample.com',
      repoLink: 'https://github.com/Mykull06/sample',
    },
    {
      title: 'Sample',
      image: 'path/to/sample.jpg',
      deployedLink: 'https://sample.com',
      repoLink: 'https://github.com/Mykull06/sample',
    },
  ];

  return (
    <section className="portfolio-page">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
