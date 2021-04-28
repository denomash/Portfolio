import React from "react";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <p>
          &#9400;{new Date().getFullYear()}
          <a href="/#" rel="noopener noreferrer">
            Dennis Macharia.
          </a>
          All rights reserved
        </p>
      </div>
    </footer>
  );
};
