import React from 'react';
import './App.css';
import Players from './Containers/Players'
import Heros from './Containers/Heros'
import Villians from './Containers/Villians'

class App extends React.Component {
  state = {
    heros: [],
    villians: []
  }

  addHero = (player) => {
    this.setState( (prevState) => ({ 
        heros: [player, ...prevState.heros]
    }))
  }

  removeHero = (player) => {
    let stillPlayers = this.state.heros.filter( hero => hero.name !== player.name )
    this.setState( () => ({
      heros: stillPlayers
    }))
  }

  addVillian = (player) => {
    this.setState( (prevState) => ({
      villians: [player, ...prevState.villians]
    }) )
  }

  removeVillian = (player) => {
    let stillPlayers = this.state.villians.filter( vil => vil.name !== player.name)
    this.setState( () => ({
      villians: stillPlayers
    }))
  }

  render(){
    const styling= {
      display: "flex"
    }

    return (
      <div style={styling} className="App">
          <Heros heros={this.state.heros} removeHero={this.removeHero} />
          <Players addHero={this.addHero} addVillian={this.addVillian} />
          <Villians villians={this.state.villians} removeVillian={this.removeVillian} />
      </div>
    );
  }
}

export default App;
