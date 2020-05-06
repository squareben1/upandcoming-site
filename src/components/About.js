import React from 'react'
import host from '../assets/host.jpg'

class About extends React.Component { 
  render() {
    return (
      <>
      <div>
      <img className="host" src={host} alt="host" />
      </div>
      <div body>
        Tune in to the new Podcast from young actor Sam Gittins (Await Further Instructions, Ray & Liz) for an in-depth conversation with a different industry insider every week. 

        This is a different kind of Podcast; we speak to real people carving out their own niche in this fascinating, competitive and uncompromising business. Upcoming guests include directors, producers, actors, make-up artists, casting agents and critics - all of whom will be explaining how they do what they do, how they got where they are and giving practical advice to those wishing to do the same.
      </div>
      
      </>
    )
  }
}

export default About