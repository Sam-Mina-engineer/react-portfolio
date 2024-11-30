import React from 'react';

// Footer

const Footer = () => {
  return (
    // Footer container which will include social media links

    <footer>
      <ul>
        {/* GitHub profile link */}
        <li>
          <a
            href="https://github.com/Sam-Mina-engineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>

        {/* LinkedIn profile link */}
        <li>
          <a
            href="https://www.linkedin.com/in/sam-mina-2b07b9b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

