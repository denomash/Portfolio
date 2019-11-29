import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

const Header = () => {
  return (
    <div id="home-banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="banner-content">
              <div className="banner-social">
                {/* <ul>
                <li>
                  <a href="/#">
                    <FontAwesomeIcon icon={faCoffee} />
                  </a>
                </li>
              </ul> */}
              </div>
              <div className="banner-info">
                <h1>Hello, I am</h1>
                <h2>Dennis Macharia</h2>
                <h3>Fullstack Engineer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
