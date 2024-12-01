// Import React

import React from "react";
import Navigation from "./Navigation";

// Header Component
// This component will be used across multiple pages.

const Header = () => {
  return (

    <header>
      {/* Site title: Displays the developer's name */}

      <h1>Sam Mina&apos;s Portfolio</h1>

      {/* Navigation component: Handles the navigation links (About, Portfolio, Contact, Resume) */}

      <Navigation />
    </header>
  );
};

// Exporting the Header component so that it can be used elsewhere

export default Header;

