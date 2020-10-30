import React from 'react'
import PlayerCard from '../Components/PlayerCard'
import api from '../api'

class Players extends React.Component {

    state = {
        api
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
                {this.renderPlayers()}
            </div>
        )
    }
}
export default Players