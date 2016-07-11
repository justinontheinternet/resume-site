import React from 'react';

const About = () => {
  return (
    <div className="section">
      <a name="about" className="bookmark"></a>
      <div className="clearfix">
        <div className="title"><hr /><h2>About Me</h2><hr /></div>
        <img className="headshot" src="headshot.jpg" />
        <p className="about-me-desc">
          A recent convert on the joys of coding, I am naturally drawn to the back-end and strive 
          to improve my abilities in writing clean, concise code. At the same time, I have a strong 
          appreciation for design/UI/UX. Not just in tech, but in everything from game controllers to cities.
        </p>
        <p className="about-me-desc">
          What gets me pumped is generating great ideas and being part of the process to bring them to fruition 
          through a mix of logic, creativity, problem solving and attention to detail.
        </p>
      </div>
    </div>
  );
}

export default About;