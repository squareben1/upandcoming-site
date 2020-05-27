import React, { Component } from "react";
import "./styles/main.scss";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

import Home from "./components/Home";
import About from "./components/About";
import Episodes from "./components/Episodes";
import EpisodePage from "./components/EpisodePage/EpisodePage";
import jasminePic from "./assets/jasmine.jpg";
import skcPic from "./assets/SKC.jpg";

class App extends Component {
  state = {
    guests: [
      {
        epNum: "1",
        name: "Jasmine Jobson",
        pic: jasminePic,
        twitter: "@jobson_jasmine",
        instagram: "@jasminejobson",
        appleUrl:
          "https://podcasts.apple.com/gb/podcast/episode-1-jasmine-jobson/id1486884781?i=1000456178909",
        spotifyUrl: "https://open.spotify.com/episode/1ugROBOVQzg1yzuIxB6q4G",
        text:
          "Jasmine Jobson is a break through young actress recently featured in Top Boy and, with feature films on the way, Jasmine sat down with Sam to discuss the ups and downs of growing up in foster care, her discovery of acting as a tool to support struggling young people and her own jump onto our screens... Jasmine's training has been through The Big House, a charitable organisation which nurtures young talent who have experiences of the care system, providing them with support and therapy through drama. Jasmine has hit the ground running and has most recently been cast as the next series lead Jaq in TOP BOY for Netflix and has just finished filming opposite Ben Whishaw in the feature film SURGE. Other Television credits include, Susie Moon in Pan Tau (Calgari Films), Jigga in Five By Five (BBC), Sally Watkins in Dark Heart.",
        // {/* Update this text (use JD's, maybe add text running under both sections */}
      },
      {
        epNum: "2",
        name: "Sophie Kennedy Clark",
        pic: skcPic,
        twitter: null,
        instagram: "@sophiekennedyclark",
        appleUrl:
          "https://podcasts.apple.com/gb/podcast/episode-1-jasmine-jobson/id1486884781?i=1000456178909",
        spotifyUrl: "https://open.spotify.com/episode/1ugROBOVQzg1yzuIxB6q4G",
        text:
          "Sophie Kennedy Clark is a BAFTA winning actress, a producer and writer. Sophie is from Aberdeen, Scotland and is best known for her roles in Philomena, Nymphomaniac Vol. I and Vol. II and she also appeared in the very first episode of Black Mirror (you remember the one…). Sophie has produced and appeared in two upcoming films; Gutterpunks and Sorority - the latter of which happens to feature our very own host. In this episode Sophie and Sam discuss: <ul>Getting into acting and finding an agent</ul> <ul>Some unconventional advice on shooting sex scenes</ul> <ul> Self-starting and forging your own path</ul> <ul>Auditioning and handling rejection </ul> <ul> How to get your nose broken with a BAFTA…</ul> “For any young actor who hasn't gone to drama school it is such a chicken and egg scenario; You can't get an agent without a job and I can't get a job without an agent...” ",
        // {/* Update this text (use JD's, maybe add text running under both sections */}
      },
    ],
    showModal: false,
    showJasmine: false,
    showSkc: false,
  };

  showJasmineHandler = () => {
    console.log("showJasmineHandler");
    this.setState({
      showJasmine: true,
      showSkc: false,
    });
    this.showModalHandler();
  };

  showSkcHandler = () => {
    console.log("showJasmineHandler");
    this.setState({
      showJasmine: false,
      showSkc: true,
    });
    this.showModalHandler();
  };

  showModalHandler = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModalHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    let guestPage = null;

    if (this.state.showJasmine) {
      guestPage = (
        <div>
          <EpisodePage
            epNum={this.state.guests[0].epNum}
            name={this.state.guests[0].name}
            pic={this.state.guests[0].pic}
            text={this.state.guests[0].text}
            twitter={this.state.guests[0].twitter}
            instagram={this.state.guests[0].instagram}
            appleUrl={this.state.guests[0].appleUrl}
            spotifyUrl={this.state.guests[0].spotifyUrl}
          />
        </div>
      );
    } else if (this.state.showSkc) {
      guestPage = (
        <div>
          <EpisodePage
            epNum={this.state.guests[1].epNum}
            name={this.state.guests[1].name}
            pic={this.state.guests[1].pic}
            text={this.state.guests[1].text}
            twitter={this.state.guests[1].twitter}
            instagram={this.state.guests[1].instagram}
            appleUrl={this.state.guests[1].appleUrl}
            spotifyUrl={this.state.guests[1].spotifyUrl}
          />
        </div>
      );
    }

    return (
      <>
        <Home />
        <About />
        <Episodes
          jasmineHandler={this.showJasmineHandler.bind(this)}
          skcHandler={this.showSkcHandler.bind(this)}
        />

        <Rodal
          width={93}
          height={95}
          measure={"%"}
          visible={this.state.showModal}
          onClose={this.hideModalHandler.bind(this)}
        >
          {/* Is there some way of clicking through the eps once in the modal view? */}
          <div>{guestPage}</div>{" "}
          {/* SKC doesn't fit into modal - need to amend modal CSS? And/or SKC/episodePage css */}
        </Rodal>
      </>
    );
  }
}

export default App;
