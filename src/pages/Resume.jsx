import React from "react";

// Link to my resume.

const Resume = () => {
  return (
    // Resume container
    <section className="resume">
      <h2>Resume</h2>

      {/* Resume download link */}
      <div className="resume-download">
        <p>Download my resume:</p>
        <a
          href="/assets/resume/Sam-Mina-Resume.pdf" // Corrected path to public folder
          download="Sam-Mina-Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>

      {/* Proficiencies and skills */}
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {/* Front-end Proficiencies */}
          <li>
            <strong>Front-end:</strong> HTML, CSS, JavaScript, React
          </li>

          {/* Back-end Proficiencies */}
          <li>
            <strong>Back-end:</strong> Node.js, Express.js, REST APIs
          </li>

          {/* Database Proficiencies */}
          <li>
            <strong>Databases:</strong> PostgreSQL, Sequelize, MongoDB, Mongoose
          </li>

          {/* Additional Skills */}
          <li>
            <strong>Other Skills:</strong> Git, Testing driven development, Agile Methodologies
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
