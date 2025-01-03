import React from 'react';
import resumeFile from '../assets/resumeDownload.pdf';

const Resume = () => {
  return (
    <section className="resume-page">
      <h2>Resume</h2>
      <p>
        Download my resume:{" "}
        <a
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Git/GitHub</li>
        <li>APIs</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>CI/CD Pipelines</li>
      </ul>
    </section>
  );
};

export default Resume;
