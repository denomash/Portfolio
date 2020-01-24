import React from 'react';
import './skill.section.scss';
import SkillProficiency from './SkillProficiency';

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
                  <SkillProficiency
                    skillName="JavaScript"
                    skillPercentage="90"
                    barColor=""
                  />
                  <SkillProficiency
                    skillName="JavaScript"
                    skillPercentage="90"
                    barColor="bar-1"
                  />
                  <SkillProficiency
                    skillName="JavaScript"
                    skillPercentage="90"
                    barColor="bar-2"
                  />
                </div>

                {/* Skill proficiency Left */}

                <div className="rating-bar bar-right">
                  <SkillProficiency
                    skillName="Node/Express"
                    skillPercentage="75"
                    barColor="bar-3"
                  />
                  <SkillProficiency
                    skillName="Redux"
                    skillPercentage="85"
                    barColor="bar-4"
                  />
                  <SkillProficiency
                    skillName="Apollo/GraphQL"
                    skillPercentage="90"
                    barColor="bar-5"
                  />
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
