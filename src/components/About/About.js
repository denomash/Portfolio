import React from 'react';
import './about.scss';

export const About = () => {
  return (
    <div className="about-section u-margin-top u-margin-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-title">
              <h1>Dennis Macharia</h1>
            </div>
          </div>
          <div className="col-md-8">
            <div className="about-info">
              <p>
                Dennis is a software engineer whose mission is to help solve
                complex problems in the simplest way possible in various
                business areas. He is passionate about creating a positive
                impact through software development. He also believes in the
                power of collaboration, integrity and most of all being
                excellent in what he does.
              </p>

              <div className="signature">
                <h1>Deno Mash</h1>
              </div>
            </div>
            <address>
              <p>
                <span>Name:</span>
                Dennis Macharia
              </p>
              <p>
                <span>Email:</span>
                dennismacharia4747@gmail.com
              </p>
              <p>
                <span>Phone:</span>
                (254) 790005253
              </p>
              <p>
                <span>Address:</span>
                Roysambu, Kenya
              </p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};
