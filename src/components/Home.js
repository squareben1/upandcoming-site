import React from "react";
import { IoIosArrowDown } from "react-icons/io"
import header from "../assets/header.png";
import ReactTypingEffect from "react-typing-effect";

class Home extends React.Component {

  handleClick = () => {
    this.nextComponent.scrollIntoView({ behavior: "smooth" })
  }

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
            speed="45"
            eraseDelay="200000"
            typingDelay="1500"
          />
        <IoIosArrowDown onClick={this.handleClick} className="nextSection" />
        </section>
        <div ref={(ref) => this.nextComponent = ref}></div>
      </>
    );
  }
}

export default Home;
