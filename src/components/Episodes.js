import React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { FaSpotify, FaPodcast } from "react-icons/fa";
import alan from "../assets/alan.jpg";
import jake from "../assets/jake.jpg";
import jasminePic from "../assets/jasmine.jpg";
import niamh from "../assets/niamh.jpg";
import percelle from "../assets/percelle.jpg";
import skcPic from "../assets/SKC.jpg";
import stuart from "../assets/stuart.jpg";

const Episodes = (props) => {
  const clamp = (value, clampAt) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const [style, set] = useSpring(() => ({
    transform: "perspective(600px) rotateY(0deg)",
  }));
  const bind = useScroll((event) => {
    set({
      transform: `perspective(600px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <>
      {/* get rid of the scroll bar & somehow indicate scroll */}
      <section className="episodesSection" id="episodes">
        <h1>EPISODES</h1>
        <div className="episodesContainer" {...bind()}>
          <animated.div className="card" style={{ ...style }}>
            {/* <Link to="episode1"> */}
            <img
              src={jasminePic}
              alt="jasminePic"
              onClick={props.jasmineHandler}
            />
            {/* </Link> */}
            <h3>Episode 1 - Jasmine Jobson</h3>
            <div className="episodeDirectories">
              <FaPodcast className="episodeIcon" />
              <FaSpotify className="episodeIcon" />
              {/* do we want these icons here? if so need to do links */}
            </div>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            {/* <Link to="episode2"> */}
            <img src={skcPic} alt="skcPic" onClick={props.skcHandler} />
            {/* </Link> */}
            <h3>Episode 2 - Sophie Kennedy Clark</h3>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <img src={stuart} alt="stuart" />
            <h3>Episode 3 - Stuart Worden</h3>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <img src={niamh} alt="niamh" />
            <h3>Episode 4 - Niamh Morrison</h3>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <img src={alan} alt="alan" />
            <h3>Episode 5 - Alan Jones</h3>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <img src={jake} alt="jake" />
            <h3>Episode 6 - Jake Davies</h3>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <img src={percelle} alt="percelle" />
            <h3>Episode 7 - Percelle Ascot</h3>
          </animated.div>
        </div>
      </section>
    </>
  );
};

export default Episodes;
