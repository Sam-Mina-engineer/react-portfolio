import React from 'react';
import { Link } from 'react-router-dom';

// Navigation Component

const Navigation = () => {
  return (

    // The navigation container which holds the different section links

    <nav>
      <ul>
        {/* Each list item contains a Link component */}
        
        {/* About Me link */}
        <li>
          <Link to="/about">About Me</Link>
        </li>

        {/* Portfolio link */}
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        {/* Contact link */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {/* Resume link */}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

