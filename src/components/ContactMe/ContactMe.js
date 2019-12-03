import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
  faMapSigns,
  faPhone,
  faEnvelope,
  faExternalLinkAlt,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons';

import './contact-me.scss';

const ContactMe = () => {
  return (
    <div className="skill-section bg-color u-padding-top u-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="about-title">
              <h1>Contact Me</h1>
            </div>
          </div>

          {/*  Contact info */}
          <div className="col-md-8">
            <div className="section-content">
              <div className="skill-info">
                <h4>Lets Keep In Touch</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="address">
                <ul>
                  <li>
                    <div className="icons">
                      <FontAwesomeIcon icon={faMapSigns} />
                    </div>
                    <h3>Address</h3>
                    <p>Mirema drive, Mirema, Kenya</p>
                  </li>

                  <li>
                    <div className="icons icon1">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <h3>Mobile Number</h3>
                    <p>+254 790 005 253</p>
                  </li>

                  <li>
                    <div className="icons icon2">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <h3>Email Address</h3>
                    <p>dennismacharia4747@gmail.com</p>
                  </li>

                  <li>
                    <div className="icons icon3">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                    <h3>Social Profiles</h3>
                    <p></p>
                  </li>
                </ul>
              </div>
              {/* End of address */}

              <div className="contact">
                {/* Contact */}

                <div className="contact-info">
                  <div className="tittle">
                    <div className="icons icon4">
                      <FontAwesomeIcon icon={faCommentDots} />
                    </div>
                    <h3>Leave me a message</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Full Name"
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          required
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Your message"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="form-group pull-right">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
