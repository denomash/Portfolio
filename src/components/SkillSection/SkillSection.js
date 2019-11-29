import React from 'react';
import './skill.section.scss';

const SkillSection = () => {
  return (
    <div className="skill-section bg-color u-padding-top u-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-title">
              <h1>My Skills</h1>
            </div>
          </div>
          <div className="col-md-8">
            <div className="section-content">
              <div className="skill-info">
                <h4>Experience Skill</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="progress-content">
                <div className="rating-bar bar-left">
                  <label>Javascript</label>
                  <span className="rating-count pull-right">90%</span>
                  <div className="skill-progress">
                    <div className="progress">
                      <div className="progress-bar"></div>
                    </div>
                  </div>

                  <label>React</label>
                  <span className="rating-count pull-right">90%</span>
                  <div className="skill-progress">
                    <div className="progress">
                      <div className="progress-bar bar-1"></div>
                    </div>
                  </div>

                  <label>HTML, CSS & SASS</label>
                  <span className="rating-count pull-right">90%</span>
                  <div className="skill-progress">
                    <div className="progress">
                      <div className="progress-bar bar-2"></div>
                    </div>
                  </div>
                </div>

                <div className="rating-bar bar-right">
                  <label>Node/Express</label>
                  <span className="rating-count pull-right">75%</span>
                  <div className="skill-progress">
                    <div className="progress">
                      <div className="progress-bar bar-3"></div>
                    </div>
                  </div>

                  <label>Redux</label>
                  <span className="rating-count pull-right">85%</span>
                  <div className="skill-progress">
                    <div className="progress">
                      <div className="progress-bar bar-4"></div>
                    </div>
                  </div>

                  <label>Apollo/GraphQL</label>
                  <span className="rating-count pull-right">60%</span>
                  <div className="skill-progress">
                    <div className="progress">
                      <div className="progress-bar bar-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
