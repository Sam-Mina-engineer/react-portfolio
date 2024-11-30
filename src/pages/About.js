import React from 'react';

// My photo avatar along with short bio.

const About = () => {
  return (
    // Container for the About Me section

    <section className="about-me">
      {/* Developer's photo avatar */}
      <div className="avatar-container">
        <img
          src="./assets/images/avatar.png"
          alt="Developer Avatar"
          className="avatar"
        />
      </div>

      {/* Developer's short bio */}
      <div className="bio">
        <h2>About Me</h2>
        <p>
          My name is Sam Mina, and I am a passionate MERN Full Stack software developer.
          I have experience building responsive web applications with technologies such as
          React, JavaScript, HTML, CSS, Node.js, Express.js, PostgreSQL, MongoDB, and Mongoose.
          I enjoy learning how to code and learning new technologies. Going through Vanderbilt
          University's full-stack web development bootcamp has been a challenge and a thrill at
          the same time. I look forward to launching a new career as a software engineer!
        </p>
      </div>
    </section>
  );
};

export default About;

