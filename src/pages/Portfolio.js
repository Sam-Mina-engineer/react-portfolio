import React from 'react';
import Project from '../components/Project';

// Project list

const Portfolio = () => {
  return (

    // Portfolio container

    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {/* Each Project component represents a different project in the portfolio */}
        
        {/* Weather Dashboard */}
        <Project
          title="Weather Dashboard"
          image="./assets/images/weatherdashboard.png"
          deployedLink="https://sam-mina-engineer.github.io/Weather-Dashboard/"
          githubLink="https://github.com/Sam-Mina-engineer/Weather-Dashboard"
        />

        {/* Placeholder */}
        {/* Add more <Project /> components here for other projects */}
        
      </div>
    </section>
  );
};

export default Portfolio;

