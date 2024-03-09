import React from "react";
import Header from "@components/header.jsx";
import "@scss/about.scss";

const About = () => {
  return (
    <>
      <div className="header">
        <Header key={self.crypto.randomUUID()} />
      </div>
      <div className="idk">
        <img src="./icons/about.svg" alt="profile" />
        <div className="about-text">
          <hr />
          <h1>About us</h1>
          <p>
            the idea of the site is for the user to easily find information
            about the desired movie, including on which platforms it can be
            found.
          </p>
          <hr />
        </div>
        <div className="account-logo">
            <p className='pow'>powered by :</p>
            <h1>where2Watch.</h1>
            <div className="slogan">
              the <div className="diff"> right </div> place for your movie
              search.
            </div>
            </div>
      </div>
    </>
  );
};

export default About;
