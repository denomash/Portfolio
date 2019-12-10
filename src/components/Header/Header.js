import React from 'react';

import './header.scss';
import SocialLinks from '../SocialLinks/SocialLinks';

const Header = () => {
  return (
    <div id="home-banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="banner-content">
              <div className="banner-social">
                <SocialLinks />
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
