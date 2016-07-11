import React from 'react';

const Education = () => {
  return (
    <div className="section">
      <div className="title"><hr/><h2>Education</h2><hr /></div>

      <div className="education-node">
        <h3 className="education-inst">Udemy.com</h3>
        <h4 className="education-course">Meteor and React for Realtime Apps</h4> <h5 className="education-year">2016</h5>
        <h4 className="education-course">Build Websites from Scratch with HTML &amp; CSS</h4> <h5 className="education-year">2016</h5>
        <h4 className="education-course">Modern React with Redux</h4> <h5 className="education-year">2016</h5>
      </div>

      <div className="education-node">
        <h3 className="education-inst">Lighthouse Labs</h3>
        <h4 className="education-course">Web Development Bootcamp</h4> <h5 className="education-year">2016</h5>
      </div>

      <div className="education-node">
        <h3 className="education-inst">Humber College</h3>
        <h4 className="education-course">Advertising Copywriting</h4> <h5 className="education-year">2011</h5>
      </div>

      <div className="education-node">
        <h3 className="education-inst">Sheridan College</h3>
        <h4 className="education-course">Media Arts</h4> <h5 className="education-year">2004</h5>
      </div>      
    </div>
  );
}

export default Education;