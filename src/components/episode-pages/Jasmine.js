import React from "react";
import { FaSpotify, FaPodcast } from "react-icons/fa";
import jasmine from "../../assets/jasmine.jpg";

class JamineEpisode extends React.Component {
  state = {};
  render() {
    return (
      <>
        <section className="episodeSection" id="episodeSection">
          <div className="episodeContainer">
            <div className="episodeImage">
              <img className="jasmine" src={jasmine} alt="jasmine" />
            </div>
            <div className="episodeText">
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
          </div>

          <div className="directories">
            <FaPodcast className="directoryIcon" />
            <p>Apple Podcasts</p>
          </div>
          <div className="directories">
            <FaSpotify className="directoryIcon" />
            <p>Spotify</p>
          </div>
        </section>
      </>
    );
  }
}

export default JamineEpisode;
