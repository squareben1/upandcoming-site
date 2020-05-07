import React from "react";
import "./styles/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Episodes from "./components/Episodes";
import Jasmine from "./components/episode-pages/Jasmine"

function App() {
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

export default App;
