import React from "react";
import {
  FaSpotify,
  FaPodcast,
  FaTwitter,
  FaInstagram,
  FaLink,
} from "react-icons/fa";

const EpisodePage = (props) => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
    // this.nextComponent.scrollIntoView({ behavior: "smooth" });
  };

  let twitter = null;

  if (props.twitter != null) {
    twitter = (
      <div className="twitter">
        <FaTwitter className="directoryIcon" />
        <p>{props.twitter}</p>
      </div>
    );
  }

  let instagram = null;

  if (props.instagram != null) {
    twitter = (
      <div className="instagram">
        <FaInstagram className="directoryIcon" />
        <p>{props.instagram}</p>
      </div>
    );
  }

  let website = null;

  if (props.website != null) {
    let websiteString = props.website.slice(8, -1)
    website = (
      <div className="website">
        <FaLink
          className="directoryIcon"
          onClick={() => handleLinkClick(props.website)}
        />
        <p>{websiteString}</p>
      </div>
    );
  }

  return (
    <>
      <section className="epSection" id="epSection">
        <div className="epTitle">
          EPISODE {props.epNum} - {props.name}
        </div>
        <div className="epContainer">
          {/* embed episode?  */}
          {/* <div className="epImage"> */}
          <img className="epImage" src={props.pic} alt="guestPic" />
          {/* do we need className & alt on above line? */}
          {/* </div> */}
          <div className="epText">{props.text}</div>
        </div>
        <div className="directories">
          <FaPodcast
            className="directoryIcon"
            onClick={() => handleLinkClick(props.appleUrl)}
          />
          {/* add hover over animation to all icons */}

          <p>Apple Podcasts</p>
          <FaSpotify
            className="directoryIcon"
            onClick={() => handleLinkClick(props.spotifyUrl)}
          />
          <p>Spotify</p>
        </div>
        <div className="socials">
          <div>{twitter} </div>
          <div>{instagram}</div>
          <div>{website}</div>
        </div>
        {/* add link back UP to episodes */}
      </section>
    </>
  );
  // }
};

export default EpisodePage;
