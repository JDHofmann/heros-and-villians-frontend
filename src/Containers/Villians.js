import React from 'react'
import PlayerCard from '../Components/PlayerCard'


function Villians(props){

    const renderVillians = () => {
        return props.villians.map( villian => <PlayerCard player={villian} key={villian.name} removeVillian={props.removeVillian} heroOrVillian villian/> )
    }

    const styling = {
        border: "1px solid #00e0ff",
        borderRadius: "10px",
        margin: "5vh 8vw 5vh 1vw",
        width: "30vw"
    }
    return(
        <div style={styling}>
            <h1>Villians</h1>
            {renderVillians()}
        </div>
    )
}
export default Villians