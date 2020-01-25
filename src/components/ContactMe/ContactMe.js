import React, { Component } from 'react';
import Validator from 'validator';
import emailjs from 'emailjs-com';
import * as firebase from 'firebase';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapSigns,
  faPhoneAlt,
  faEnvelope,
  faExternalLinkAlt,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons';

import './contact-me.scss';
import SocialLinks from '../SocialLinks/SocialLinks';

admin.initializeApp();

class ContactMe extends Component {
  state = {
    data: {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    },
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  validate = data => {
    const errors = {};

    if (!data.fullName.trim()) errors.name = "This field can't be blank";
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
    if (!data.subject.trim()) errors.subject = "This field can't be blank";
    if (!data.message.trim()) errors.message = "This field can't be blank";

    return errors;
  };

  onSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      const { fullName, email, subject, message } = this.state.data;
      let templateParams = {
        senderName: fullName,
        senderEmail: email,
        subject,
        message
      };

      const gmailContactService = functions.config().mailservice
        .gmailcontactservice;
      const templateId = functions.config().mailservice.templateid;
      const userId = functions.config().mailservice.userid;

      emailjs
        .send(gmailContactService, templateId, templateParams, userId)
        .then(
          function(response) {
            console.log('SUCCESS!', response.status, response.text);
          },
          function(error) {
            console.log('FAILED...', error);
          }
        );
    }
  };

  render() {
    const { data, errors } = this.state;
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
                  <p>Here is my address, contact details and social links</p>
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
                        <FontAwesomeIcon icon={faPhoneAlt} />
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
                      <p>
                        <SocialLinks />
                      </p>
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
                        Please feel free to contact me for any work or
                        suggestions below
                      </p>
                    </div>
                  </div>
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            value={data.fullName}
                            onChange={this.onChange}
                            required
                            placeholder="Full Name"
                          />
                        </div>
                        {errors.name && (
                          <div className="form-group__errors">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={data.email}
                            onChange={this.onChange}
                            required
                            placeholder="Your email"
                          />
                        </div>
                        {errors.email && (
                          <div className="form-group__errors">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            value={data.subject}
                            onChange={this.onChange}
                            required
                            placeholder="Subject"
                          />
                        </div>
                        {errors.subject && (
                          <div className="form-group__errors">
                            {errors.subject}
                          </div>
                        )}
                      </div>

                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Your message"
                            value={data.message}
                            onChange={this.onChange}
                            required
                          ></textarea>
                        </div>
                        {errors.message && (
                          <div className="form-group__errors">
                            {errors.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-group pull-right">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        // onClick={this.onSubmit}
                      >
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
  }
}

export default ContactMe;
