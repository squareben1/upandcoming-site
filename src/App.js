import React, {Component} from 'react';
import "./styles/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Episodes from "./components/Episodes";
import Jasmine from "./components/episode-pages/Jasmine";
import jasminePic from "./assets/jasmine.jpg";
// /Users/bengittins/Projects/upandcoming/src/assets/jasmine.jpg

class App extends Component {
  state = {
    guests: [
      { name: "Jasmine Jobson" },
      { pic: jasminePic },
      {
        text:
          "Jasmine Jobson is a break through young actress recently featured in Top Boy and, with feature films on the way, Jasmine sat down with Sam to discuss the ups and downs of growing up in foster care, her discovery of acting as a tool to support struggling young people and her own jump onto our screens... Jasmine's training has been through The Big House, a charitable organisation which nurtures young talent who have experiences of the care system, providing them with support and therapy through drama. Jasmine has hit the ground running and has most recently been cast as the next series lead Jaq in TOP BOY for Netflix and has just finished filming opposite Ben Whishaw in the feature film SURGE. Other Television credits include, Susie Moon in Pan Tau (Calgari Films), Jigga in Five By Five (BBC), Sally Watkins in Dark Heart.",
      },
      // add links, social media handles, etc.
    ],
  };
  render() {
    return (
      <BrowserRouter>
        <>
          <Home />
          <About />
          <Episodes />
          <Switch>
            <Route exact path="/episode1" component={Jasmine} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
