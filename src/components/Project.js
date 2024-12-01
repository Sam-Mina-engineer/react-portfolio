import React from "react";

// Import the weather dashboard image from assets

import weatherdashboard from "../assets/images/weatherdashboard.png";

// Projection section of portfolio

const Project = () => {
  return (
  // Project container
    
    <div className="project">
      {/* Project title */}
      <h3>Weather Dashboard</h3>

      {/* Project image */}
      <img src={weatherdashboard} alt="Weather Dashboard screenshot" />

      {/* Links to the deployed application and GitHub repository */}
      <div className="project-links">
        <a
          href="https://sam-mina-engineer.github.io/Weather-Dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Deployed Application
        </a>
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
