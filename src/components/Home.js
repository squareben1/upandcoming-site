import React from "react";
import header from "../assets/header.png";
import ReactTypingEffect from "react-typing-effect";

class Home extends React.Component {
  render() {
    return (
      <>
      <section className="homeSection" id="homeSection">
        <div className="headerContainer">
          <img className="header" src={header} alt="header" />
        </div>
        <br />
        <ReactTypingEffect
          text="THE PODCAST FOR REAL PEOPLE IN THE ENTERTAINMENT INDUSTRY."
          className="typingEffect"
          speed="100"
          eraseDelay="200000"
          typingDelay="1500"
        />
        </section>
      </>
    );
  }
}

export default Home;
