import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

import "./sociallinks.scss";

const SocialLinks = () => {
  return (
    <div className="social-inline">
      <div>
        <a
          href="https://github.com/denomash/"
          target="_blank"
          className="github"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/dennis-macharia-206762137/"
          target="_blank"
          className="linkedin"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div>
        <a href="/#" rel="noopener noreferrer" className="facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
      <div>
        <a href="/#" rel="noopener noreferrer" className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div>
        <a href="/#" rel="noopener noreferrer" className="google">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
