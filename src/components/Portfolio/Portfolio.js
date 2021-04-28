import React from "react";

import "./portfolio.scss";

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
                  Listed below are some of my personal projects with a demo and
                  repository links attached.
                </p>
              </div>

              <div className="portfolio__content">
                <div className="portfolio__row">
                  {/* ----------- */}
                  <div className="col-sm-6">
                    <div className="portfolio__item">
                      <div className="portfolio__item-top"></div>
                      <div className="portfolio__item-title">Khalon Quill</div>

                      <div className="portfolio__item-content">
                        <ul>
                          <li>React</li>
                          <li>CSS</li>
                          <li>HTML5</li>
                        </ul>
                      </div>

                      <div className="portfolio__overlay">
                        <div className="portfolio__overlay-desc">
                          Khalon Quill was built from the ground up to
                          facilitate lightning fast communication &
                          collaboration between digital teams
                        </div>
                        <div className="portfolio__overlay-cont">
                          <a
                            href="https://khalon-quil-website.appspot.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            demo
                          </a>
                          {/* <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            source
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>

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

                      <div className="portfolio__overlay">
                        <div className="portfolio__overlay-desc">
                          This is a static page. Inspiration was gotten from
                          uplabs
                        </div>
                        <div className="portfolio__overlay-cont">
                          <a
                            href="https://plug-addons.firebaseapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            demo
                          </a>
                          <a
                            href="https://github.com/denomash/plug-Addons-site"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            source
                          </a>
                        </div>
                      </div>
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

                      <div className="portfolio__overlay">
                        <div className="portfolio__overlay-desc">
                          This is a static page aimed to level up css. We
                          colaborated 3 people with samuel as our mentor
                        </div>
                        <div className="portfolio__overlay-cont">
                          <a
                            href="https://happy-rosalind-b11033.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            demo
                          </a>
                          <a
                            href="https://github.com/younggeeks/childcare-UII"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            source
                          </a>
                        </div>
                      </div>
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

                      <div className="portfolio__overlay">
                        <div className="portfolio__overlay-desc">
                          This is a budget management application for tracking
                          your expenses
                        </div>
                        <div className="portfolio__overlay-cont">
                          <a
                            href="https://burgetify.herokuapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            demo
                          </a>
                          <a
                            href="https://github.com/denomash/budgetify"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            source
                          </a>
                        </div>
                      </div>
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

                      <div className="portfolio__overlay">
                        <div className="portfolio__overlay-desc">
                          This is a fast food API that allow customers to order
                          food.
                        </div>
                        <div className="portfolio__overlay-cont">
                          <a
                            href="https://foodapiv2.docs.apiary.io/#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            demo
                          </a>
                          <a
                            href="https://github.com/denomash/food-api"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            source
                          </a>
                        </div>
                      </div>
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
