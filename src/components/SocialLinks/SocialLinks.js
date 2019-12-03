import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';

import './sociallinks.scss';

const SocialLinks = () => {
  return (
    <div className="social-inline">
      <p>
        <a
          href="https://github.com/denomash/"
          target="_blank"
          className="github"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/dennis-macharia-206762137/"
          target="_blank"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </p>
      <p>
        <a href="#" className="facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </p>
      <p>
        <a href="#" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </p>
      <p>
        <a href="#" className="google">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </a>
      </p>
    </div>
  );
};

export default SocialLinks;
