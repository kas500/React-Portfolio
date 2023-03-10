import React from 'react';

const styles = {
    svg: {
      fill: 'currentcolor'
    },
}

function Header() {

  return (
    <header className="black-80 tc pv4 avenir">
        <a href="#home" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
        <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={styles.svg}>
            <title>skull icon</title>
            <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path>
        </svg>
  </a>
  <h1 className="mt2 mb0 baskerville i fw1 f1">Anton Krasnikov</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">My portfolio</h2>
  </header>
  );
}

export default Header;