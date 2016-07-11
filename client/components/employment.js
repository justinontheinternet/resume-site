import React from 'react';

const Employment = () => {
  return (
    <div className="section">
      <a name="employment" className="bookmark"></a>
      <div className="title"><hr /><h2>Employment</h2><hr /></div>

      <div className="employer">
          <h3 className="job-title">General Labour</h3>
          <h4 className="company">Matrix Logistics / Lift Temp</h4> <h5 className="employment-year">2013 - 2015</h5>
          <p className="job-desc">Effectively and accurately performed mulitiple jobs as needed.</p>
      </div>

      <div className="employer">
          <h3 className="job-title">Intern/Freelance Copywriter</h3>
          <h4 className="company">Crispin Porter + Bogusky, The Unimail Group</h4> <h5 className="employment-year">2011 - 2012</h5>
          <p className="job-desc">Worked in a team to ideate and propose advertising ideas for multiple campaigns.</p>
          <p className="job-desc">Juggled multiple projects with ever-changing deadlines and priorities.</p>
          <p className="job-desc">Worked across radio, digital, television and print on brands like Kraft, Toys'R'Us, Axe, Jell-O, VitaminWater, Molson, and Wisk.</p>
          <p className="job-desc">Worked remotely with a team in Australia, I wrote brochure copy for the Institute of Chartered Accountants of Ontario.</p>
      </div>

      <div className="employer">
          <h3 className="job-title">Manager</h3>
          <h4 className="company">We Got Games</h4> <h5 className="employment-year">2005 - 2011</h5>
          <p className="job-desc">Controlled most aspects of the store, including pricing, stocking, scheduling, customer service and record keeping.</p>
          <p className="job-desc">Constantly searched for ways to improve store operations and customer experience.</p>
      </div>

      <div className="employer">
          <h3 className="job-title">Contributing Editor</h3>
          <h4 className="company">Gamefocus.ca</h4> <h5 className="employment-year">2009 - 2010</h5>
          <p className="job-desc">Adhered to a consistent writing schedule with reviews, articles, and daily news posts.</p>
          <p className="job-desc">Attended industry events to gather information for preview articles.</p>
      </div>
    </div>
  );
}

export default Employment;