import React from "react";
import { FaSpotify, FaPodcast, FaTwitter, FaInstagram } from "react-icons/fa";

const EpisodePage = (props) => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
    // this.nextComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="epSection" id="epSection">
        <div className="epTitle">
          EPISODE {props.epNum} - {props.name}
        </div>
        <div className="epContainer">
          {/* embed episode?  */}
          {/* <div className="epImage"> */}
          <img className="epImage" src={props.pic} alt="jasmine" />
          {/* do we need className & alt on above line? */}
          {/* </div> */}
          <div className="epText">{props.text}</div>
        </div>
        <div className="directories">
          <FaPodcast className="directoryIcon" onClick={() => handleLinkClick(props.appleUrl)} />
          {/* add hover over animation to all icons */}
          <p>Apple Podcasts</p>
          <FaSpotify className="directoryIcon" onClick={() => handleLinkClick(props.spotifyUrl)} />
          <p>Spotify</p>
        </div>
        <div className="socials">
          <FaTwitter className="directoryIcon" />
          <p>{props.twitter}</p>
          <FaInstagram className="directoryIcon" />
          <p>{props.instagram}</p>
          {/* need to show/not show socials if exist/dont */}
        </div>
        {/* add link back UP to episodes */}
      </section>
    </>
  );
  // }
};

export default EpisodePage;