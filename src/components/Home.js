import React from "react";
import header from "../assets/header.jpg";
import ReactTypingEffect from "react-typing-effect";

class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <img className="header" src={header} alt="header" />
        </div>
        <ReactTypingEffect
          text="Up and Coming"
          className="typingEffect"
          speed="100"
          eraseDelay="200000"
          typingDelay="1500"
        />
      </>
    );
  }
}

export default Home;
