import React from 'react'
import PlayerCard from '../Components/PlayerCard'

function Heros(props){

    const renderHeros = () => {
        return props.heros.map( player => <PlayerCard player={player} key={player.name} removeHero={props.removeHero} heroOrVillian hero />)
      }

    const styling = {
        border: "1px solid #00e0ff",
        borderRadius: "10px",
        margin: "5vh 1vw 5vh 8vw",
        width: "30vw"
    }
    return(
        <div style={styling}>
            <h1>Heros</h1>
            {renderHeros()}
        </div>
    )
}
export default Heros