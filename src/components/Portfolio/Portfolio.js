import React from 'react';

import plugaddons from '../assets/accelerate.png';
import wajomba from '../assets/childcare.png';
import fastFood from '../assets/fast-food.png';
import burgetify from '../assets/burgetify-2.png';
import spaceX from '../assets/spaceX.png';

import './portfolio.scss';

const Portfolio = () => {
  return (
    <div className="skill-section  u-padding-top u-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-title">
              <h1>Portfolio</h1>
            </div>
          </div>

          {/*  Contact info */}
          <div className="col-md-8">
            {/* Col */}
            <div className="section-content">
              <div className="skill-info">
                <h4>My Recent Work</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="portfolio__content">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <img
                        className="portfolio__img"
                        src={plugaddons}
                        alt="plugaddons"
                      />
                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <img
                        className="portfolio__img"
                        src={wajomba}
                        alt="child care"
                      />
                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      {/* <img
                        className="portfolio__img"
                        src={spaceX}
                        alt="spaceX"
                      /> */}

                      <img
                        className="portfolio__img"
                        src={burgetify}
                        alt="burgetify"
                      />
                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <img
                        className="portfolio__img"
                        src={fastFood}
                        alt="fastFood"
                      />
                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
