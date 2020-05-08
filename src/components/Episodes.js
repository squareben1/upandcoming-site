import React from "react";
import { Link } from "react-router-dom"
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import { FaSpotify, FaPodcast } from "react-icons/fa";

import alan from "../assets/alan.jpg";
import jake from "../assets/jake.jpg";
import jasmine from "../assets/jasmine.jpg";
import niamh from "../assets/niamh.jpg";
import percelle from "../assets/percelle.jpg";
import SKC from "../assets/SKC.jpg";
import stuart from "../assets/stuart.jpg";

const clamp = (value, clampAt) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};



const Episodes = () => {

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
    {/* get rid of the scroll bar */}
      <section className="episodesSection" id="episodes">
        <h2>Episodes</h2>
        <div className="episodesContainer" {...bind()}>
          <animated.div className="card" style={{ ...style }}>
            <Link to="/episode1">
              <img src={jasmine} alt="jasmine" />
            </Link>
            <h3>Episode 1 - Jasmine Jobson</h3>
            <div className="episodeDirectories">
              <FaPodcast className="episodeIcon" />
              <FaSpotify className="episodeIcon" />
            </div>
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <img src={SKC} alt="SKC" />
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
