import React, { Fragment } from 'react';

const SkillProficiency = props => {
  return (
    <Fragment>
      <label>{props.skillName}</label>
      <span className="rating-count pull-right">{props.skillPercentage}%</span>
      <div className="skill-progress">
        <div className="progress">
          <div className={`progress-bar ${props.barColor}`}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default SkillProficiency;
