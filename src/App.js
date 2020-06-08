import React, { Component } from "react";
import "./styles/main.scss";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import guests from "./data/guests";
import Home from "./components/Home";
import About from "./components/About";
import Episodes from "./components/Episodes";
import EpisodePage from "./components/EpisodePage/EpisodePage";
import NavBar from "./components/NavBar";
import Collapsible from "react-collapsible";

class App extends Component {
  state = {
    guests: guests,
    showModal: false,
    currentGuest: null,
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

  guestSelector = (guestName) => {
    const result = this.state.guests.filter((obj) => obj.name === guestName);

    this.setState({
      currentGuest: result[0],
    });
    this.showModalHandler();
  };

  render() {
    let guestPage = null;
    if (this.state.currentGuest != null) {
      guestPage = (
        <div>
          <EpisodePage
            epNum={this.state.currentGuest.epNum}
            name={this.state.currentGuest.name}
            pic={this.state.currentGuest.pic}
            text={this.state.currentGuest.text}
            twitter={this.state.currentGuest.twitter}
            instagram={this.state.currentGuest.instagram}
            website={this.state.currentGuest.website}
            appleUrl={this.state.currentGuest.appleUrl}
            spotifyUrl={this.state.currentGuest.spotifyUrl}
          />
        </div>
      );
    }

    return (
      <>
        <NavBar />
        <Home />

        <Collapsible
          trigger="Tune in to the new Podcast from young actor Sam Gittins (Await
              Further Instructions, Ray & Liz) for an in-depth conversation with
              a different industry insider every week."
          className="collapse"
        >
          <About />
        </Collapsible>

        <Episodes guestSelector={this.guestSelector.bind(this)} />

        <Rodal
          width={99}
          height={99}
          measure={"%"}
          visible={this.state.showModal}
          onClose={this.hideModalHandler.bind(this)}
          enterAnimation={"slideUp"}
          leaveAnimation={"slideDown"}
        >
          {/* Is there some way of clicking through the eps once in the modal view? */}
          <div>{guestPage}</div>{" "}
        </Rodal>
      </>
    );
  }
}

export default App;
