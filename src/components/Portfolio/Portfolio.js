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
                      <div className="portfolio__item-top"></div>
                      <div className="portfolio__item-title">Plugaddons</div>

                      <div className="portfolio__item-content">
                        <ul>
                          <li>React</li>
                          <li>CSS</li>
                          <li>HTML5</li>
                          <li>Firebase</li>
                        </ul>
                      </div>

                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <div className="portfolio__item-top"></div>
                      <div className="portfolio__item-title">Child Care</div>

                      <div className="portfolio__item-content">
                        <ul>
                          <li>Gatsby</li>
                          <li>SASS</li>
                          <li>HTML5</li>
                          <li>Netlify</li>
                        </ul>
                      </div>

                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <div className="portfolio__item-top"></div>
                      <div className="portfolio__item-title">Burgetify</div>

                      <div className="portfolio__item-content">
                        <ul>
                          <li>React</li>
                          <li>Redux</li>
                          <li>Webpack</li>
                          <li>Firebase</li>
                        </ul>
                      </div>

                      <div className="portfolio__overlay">Yooh</div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <div className="portfolio__item-top"></div>
                      <div className="portfolio__item-title">Fast-food API</div>

                      <div className="portfolio__item-content">
                        <ul>
                          <li>Python</li>
                          <li>Flask</li>
                          <li>Apiary</li>
                          <li>Heroku</li>
                        </ul>
                      </div>

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
