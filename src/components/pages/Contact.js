import React from 'react';

export default function Contact() {
  return (
    <div>
    {/* <div classNameName="vh-75 cover bg-center" style="background-image: url(http://mrmrs.github.io/photos/001.jpg);"></div> */}
      <div className="bt bb tc mw8 center mt3">
      <form className="measure center mt2 mb5 ">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Send me a message</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" for="name">Your name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="name" required></input>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" required></input>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" for="message">Message</label>
            <textarea className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " rows="10" type="textarea" name="message"  id="message"></textarea>
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"></input>
        </div>
      </form>
      </div>
    </div>
  );
}
