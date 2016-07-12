import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <div className="clearfix space">
      <a name="contact" className="bookmark"></a>
      <div className="title"><hr /><h2>Contact</h2><hr /></div>

      <div className="contact-div">
        <a href="mailto:justin.arruda@gmail.com">
          <img src="email-14-24.gif" />
          <h4 className="contact-detail">justin.arruda@gmail.com</h4>
        </a>
      </div>

      <div className="contact-div">
        <a href="http://www.linkedin.com/in/arrudajustin" target="_blank">
          <img src="linkedin-6-24.gif" />
          <h4 className="contact-detail">/arrudajustin</h4>
        </a>
      </div>

      <div className="contact-div">
        <img src="phone-68-24.gif" />
        <h4 className="contact-detail">(647) 960-8149</h4>
      </div>

      <div className="contact-div">
        <a href="http://www.github.com/justinontheinternet" target="_blank">
          <img src="github-6-24.gif" />
          <h4 className="contact-detail">/justinontheinternet</h4>
        </a>
      </div>

      <div className="contact-div">
        <img src="marker-24.gif" />
        <h4 className="contact-detail">Brampton, ON</h4>
      </div>

      </div>
    </div>
  );
}

export default Contact;