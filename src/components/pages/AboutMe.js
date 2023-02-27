import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <article className="">
      <div className="bt bb tc mw8 center mt3">
        <div className="pv3 f5 f4-ns measure center">
          <h2 className="baskerville tc fw1 ph3 ph0-l">Hey there!</h2>
          <img src="./me.jpg" className="w-30 f5 measure shadow-2" alt="Me"></img>
          <p className="measure lh-copy">
          My name is Anton, and my portfolio is a representation of all that I've learned and accomplished as a UW fullstack web development bootcamp student.
          </p>
        </div>
      </div>
    </article>
    </div>
  );
}
