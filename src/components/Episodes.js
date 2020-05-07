import React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";

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
      <section className="episodesSection" id="episodes">
        <h2>Episodes</h2>
        <div className="episodesContainer" {...bind()}>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 1 - Jasmine Jobson</h3>
            <img src={jasmine} alt="jasmine" />
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 2 - Sophie Kennedy Clark</h3>
            <img src={SKC} alt="SKC" />
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 3 - Stuart Worden</h3>
            <img src={stuart} alt="stuart" />
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 4 - Niamh Morrison</h3>
            <img src={niamh} alt="niamh" />
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 5 - Alan Jones</h3>
            <img src={alan} alt="alan" />
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 6 - Jake Davies</h3>
            <img src={jake} alt="jake" />
          </animated.div>
          <animated.div className="card" style={{ ...style }}>
            <h3>Episode 7 - Percelle Ascot</h3>
            <img src={percelle} alt="percelle" />
          </animated.div>

        </div>
      </section>
    </>
  );
};

export default Episodes;
















