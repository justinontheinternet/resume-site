import React from 'react';

const Projects = () => {
  return (
    <div className="section">
      <a name="projects" className="bookmark"></a>
      <div className="title"><hr /><h2>Projects</h2><hr /></div>

      <div className="project">
        <a href="https://github.com/justinontheinternet/game-plan" target="_blank">
          <h3 className="project-title">GamePlan</h3>
          <p className="project-desc">A video game release list built using React with Redux, React-Router, and the Giant Bomb API.</p>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/justinontheinternet/blog-app" target="_blank">
          <h3 className="project-title">Blog App</h3>
          <p className="project-desc">A blog app written during the Modern React with Redux course.</p>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/justinontheinternet/pickmeup-ui" target="_blank">
          <h3 className="project-title">pickmeUp</h3>
          <p className="project-desc">For our final project at Lighthouse Labs, my partners and I teamed up to make a carpool app.</p>
          <p className="project-desc">We wanted to continue learning and challenging ourselves, and so decided on a Postgres database with a Rails API
           for our back end. On the front, we broke out of the school curriculum and built a React app running on a Node server.
            We learned about components, ES6, and took on Material-UI for styling.</p>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/justinontheinternet/lend_tracker_app" target="_blank">
          <h3 className="project-title">Sh!# Tracker</h3>
          <p className="project-desc">My first group project. An app that helps you keep track of things you've lent out and borrowed. Built with Ruby,
           Sinatra, and ActiveRecord, I wrote all the back-end code.</p>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/justinontheinternet/rotten_mangoes" target="_blank">
          <h3 className="project-title">Rotten Mangoes</h3>
          <p className="project-desc">An app designed to teach us Rails. A simple movie review site, users can sign up, log in, add a movie, an image, and a review.</p>
        </a>
      </div>

      <div className="project">
        <a href="https://github.com/justinontheinternet/game/tree/twoop" target="_blank">
          <h3 className="project-title">Math Game</h3>
          <p className="project-desc">One of the first object-oriented programs I wrote using Ruby, which was rewritten from an earlier, method-based version.</p>
        </a>
      </div>      
    </div>
  );
}

export default Projects;