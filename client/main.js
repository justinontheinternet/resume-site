import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav-bar';
import About from './components/about';
import Projects from './components/projects';
import Education from './components/education';
import Employment from './components/employment';
import Contact from './components/contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <About />
        <Projects />
        <Education />
        <Employment />
        <Contact />
      </div>
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});