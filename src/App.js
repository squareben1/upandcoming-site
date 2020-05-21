import React, { Component } from "react";
import "./styles/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Episodes from "./components/Episodes";
import EpisodePage from "./components/episode-pages/EpisodePage";
import jasminePic from "./assets/jasmine.jpg";



class App extends Component {
  state = {
    guests: [
      {
        epNum: "1",
        name: "Jasmine Jobson",
        pic: jasminePic,
        twitter: '@jobson_jasmine',
        instagram: '@jasminejobson',
        appleUrl: 'https://podcasts.apple.com/gb/podcast/episode-1-jasmine-jobson/id1486884781?i=1000456178909',
        spotifyUrl: 'https://open.spotify.com/episode/1ugROBOVQzg1yzuIxB6q4G',
        text:
          "Jasmine Jobson is a break through young actress recently featured in Top Boy and, with feature films on the way, Jasmine sat down with Sam to discuss the ups and downs of growing up in foster care, her discovery of acting as a tool to support struggling young people and her own jump onto our screens... Jasmine's training has been through The Big House, a charitable organisation which nurtures young talent who have experiences of the care system, providing them with support and therapy through drama. Jasmine has hit the ground running and has most recently been cast as the next series lead Jaq in TOP BOY for Netflix and has just finished filming opposite Ben Whishaw in the feature film SURGE. Other Television credits include, Susie Moon in Pan Tau (Calgari Films), Jigga in Five By Five (BBC), Sally Watkins in Dark Heart.",
          // {/* Update this text (use JD's, maybe add text running under both sections */}
      },
    ],
    showJasmine: false
  };

  JasminePage = () => {
    return (
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
    );
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Home />
          <About />
          <Episodes />

          {/* <Switch> */}
            <Route exact path="/episode1" component={this.JasminePage} />
          {/* </Switch> */}
        </>
      </BrowserRouter>
    );
  }
}

export default App;
