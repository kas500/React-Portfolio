import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="bt bb tc mw8 center mt3 ">
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          href="#aboutme"
          onClick={() => handlePageChange('AboutMe')}
        >
          About me
        </a>

        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        >
          Portfolio
        </a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        >
          Resume
        </a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        >
          Contact me
        </a>
    </nav>
  );
}

export default NavTabs;
