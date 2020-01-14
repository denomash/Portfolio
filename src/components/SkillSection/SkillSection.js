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
                  Hello, I’m a Dennis, web-developer based in Nairobi, Kenya. I
                  have rich experience in web site building and customization.
                  Also I am good at
                </p>
              </div>

              {/* Skill proficiency section */}
              <div className="progress-content">
                {/* Skill proficiency Right */}

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

                {/* Skill proficiency Left */}

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

              {/* Language proficiency */}
              <div className="language-proficiency">
                <div className="skill-info">
                  <h4>Language Skill</h4>
                  <p>Langueges that I can fluently communicate in.</p>
                </div>

                <div className="language-proficiency__chart">
                  <div className="chart">
                    <div className="language-proficiency__circle">100%</div>
                    <h5>English</h5>
                  </div>
                  <div className="chart">
                    <div className="language-proficiency__circle c-1">100%</div>
                    <h5>Swahili</h5>
                  </div>
                </div>
              </div>
              {/* end Language proficiency */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
