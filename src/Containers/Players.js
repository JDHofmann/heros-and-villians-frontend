import React from 'react'
import CreatePlayer from '../Components/CreatePlayer'
import PlayerCard from '../Components/PlayerCard'
// import api from '../api'

class Players extends React.Component {

    state = {
        api: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/players")
        .then(response => response.json())
        .then(data => this.setState({
            api: data
        }))
    }

    createPlayer = (playerObj) => {
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(playerObj)
        }
        fetch("http://localhost:3000/players", options)
        .then(response => response.json())
        .then( newPlayer => this.setState( (prevState) => ({
            api: [newPlayer, ...prevState.api]
        })))
    }

    renderPlayers = () => {
        return this.state.api.map( player => <PlayerCard player={player} key={player.name} addHero={this.props.addHero} addVillian={this.props.addVillian} />)
    }

    render(){
        const styling = {
            border: "1px solid #00e0ff",
            borderRadius: "10px",
            margin: "5vh 1vw",
            width: "30vw"
        }
        return(
            <div style={styling}>
                <h1>Players</h1>
                { this.state.api.length > 0 ? this.renderPlayers() : <h2>Now Loading...</h2>}
                <CreatePlayer createPlayer={this.createPlayer} />
            </div>
        )
    }
}
export default Players