import React from 'react'

class PlayerCard extends React.Component{

    handleHeroClick = () => {
        this.props.addHero(this.props.player)
    }

    handleVillianClick = () => {
        this.props.addVillian(this.props.player)
        // console.log('villian click')
    }

    removeHeroHandle = () => {
        this.props.removeHero(this.props.player)
    }

    removeVillianHandle = () => {
        this.props.removeVillian(this.props.player)
    }

    render(){
        const styling = {
            border: "1px solid #00e0ff",
            borderRadius: "10px",
            margin: "1vh 1vw"
        }

        return(
            <div className="card" style={styling} >
                <h4>{this.props.player.name}</h4>
                { this.props.heroOrVillian  ? null : 
                <button onClick={this.handleHeroClick} > HERO </button>
                }
                { this.props.heroOrVillian ? null : 
                <button onClick={this.handleVillianClick} >VILLIAN</button>
                }
                { this.props.hero ? 
                <button onClick={this.removeHeroHandle} >X</button> : null}
                { this.props.villian ? 
                <button onClick={this.removeVillianHandle} >X</button> : null}
                
            </div>
        )
    }
}
export default PlayerCard