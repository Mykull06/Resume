import React from 'react';
import profilePicture from '../assets/profilePicture.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img
          src={profilePicture}
          alt="Michael Garcia"
          className="about-me-photo"
        />
        <p>
          Hi, I’m Michael Garcia, a passionate and dedicated web developer
          currently honing my skills in building modern web applications.
          I enjoy creating innovative and functional designs that enhance user experiences. 
          When I’m not coding, you’ll find me exploring new technologies, boxing, or spending time with family.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
