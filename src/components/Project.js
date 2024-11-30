import React from 'react';

// Projection section of portfolio

const Project = () => {
  return (
    
    // Project container

    <div className="project">
      {/* Project title */}
      <h3>Weather Dashboard</h3>

      {/* Project image */}
      <img src="./assets/images/weatherdashboard.png" alt="Weather Dashboard screenshot" />

      {/* Links to the deployed application and GitHub repository */}
      <div className="project-links">
        {/* Deployed application link */}
        <a
          href="https://sam-mina-engineer.github.io/Weather-Dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Deployed Application
        </a>

        {/* GitHub repository link */}
        <a
          href="https://github.com/Sam-Mina-engineer/Weather-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;

