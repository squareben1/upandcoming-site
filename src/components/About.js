import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSpotify, FaPodcast } from "react-icons/fa";
import host from "../assets/host.jpg";

class About extends React.Component {
  handleClick = () => {
    this.nextComponent.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <>
        <section className="aboutSection" id="aboutSection">
          <h1>ABOUT</h1>
          <div className="aboutContainer">
            <div className="aboutImage">
              <img className="host" src={host} alt="host" />
            </div>
            <div className="aboutText">
              {/* ADD 'not just A-listers, etc */}
              Tune in to the new Podcast from young actor Sam Gittins (Await
              Further Instructions, Ray & Liz) for an in-depth conversation with
              a different industry insider every week.
              <br></br>
              This is a different kind of Podcast; we don't focus exclusively on
              A-Lister actors & directors - we speak to real people carving out
              their own niche in this fascinating, competitive and
              uncompromising business. Upcoming guests include directors,
              producers, actors, make-up artists, casting agents and critics -
              all of whom will be explaining how they do what they do, how they
              got where they are and giving practical advice to those wishing to
              do the same.
            </div>
          </div>

          <div className="directories">
            <FaPodcast className="directoryIcon" />
            <p>Apple Podcasts</p>
          </div>
          <div className="directories">
            <FaSpotify className="directoryIcon" />
            <p>Spotify</p>
          </div>
          {/* add social links in same format as on indiviual episode pages */}
          <IoIosArrowDown onClick={this.handleClick} className="nextSection" />
        </section>
        <div ref={(ref) => (this.nextComponent = ref)}></div>
      </>
    );
  }
}

export default About;
