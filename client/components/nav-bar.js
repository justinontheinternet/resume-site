import React from 'react';

const NavBar = () => {
  return (
    <header>
      <div className="navbar">
        <h3><a href="#about">About</a></h3>
        <h3><a href="#projects">Projects</a></h3>
        <h3><a href="#education">Education</a></h3>
        <h3><a href="#employment">Employment</a></h3>
        <h3><a href="#contact">Contact</a></h3>
      </div>
    </header>
  );
}

export default NavBar;