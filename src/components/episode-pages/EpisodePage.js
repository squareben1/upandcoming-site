import React, { Component } from "react";
import { FaSpotify, FaPodcast, FaTwitter, FaInstagram } from "react-icons/fa";
import jasminePic from "../../assets/jasmine.jpg";

class EpisodePage extends Component {
  state = {};
  // constructor(props) {
    
  // }
  render() {
    return (
      <>
        <section className="epSection" id="epSection">
          <div className="epTitle">EPISODE 1 - JASMINE JOBSON</div>
          <div className="epContainer">
            {/* embed episode?  */}
            <div className="epImage">
              <img className="jasmine" src={jasminePic} alt="jasmine" />
            </div>

            <div className="epText">
              Jasmine Jobson is a break through young actress recently featured
              in Top Boy and, with feature films on the way, Jasmine sat down
              with Sam to discuss the ups and downs of growing up in foster
              care, her discovery of acting as a tool to support struggling
              young people and her own jump onto our screens... Jasmine's
              training has been through The Big House, a charitable organisation
              which nurtures young talent who have experiences of the care
              system, providing them with support and therapy through drama.
              Jasmine has hit the ground running and has most recently been cast
              as the next series lead Jaq in TOP BOY for Netflix and has just
              finished filming opposite Ben Whishaw in the feature film SURGE.
              Other Television credits include, Susie Moon in Pan Tau (Calgari
              Films), Jigga in Five By Five (BBC), Sally Watkins in Dark Heart.
            </div>
            {/* Update this text (use JD's, maybe add text running under both sections */}
          </div>

          <div className="directories">
            <FaPodcast className="directoryIcon" />
            <p>Apple Podcasts</p>
            <FaSpotify className="directoryIcon" />
            <p>Spotify</p>
          </div>
          <div className="socials">
            <FaTwitter className="directoryIcon" />
            <p>@jobson_jasmine</p>
            <FaInstagram className="directoryIcon" />
            <p>@jasminejobson</p>
          </div>
          {/* add link back UP to episodes */}
        </section>
      </>
    );
  }
}

export default EpisodePage;
