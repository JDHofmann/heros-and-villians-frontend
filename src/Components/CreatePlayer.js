import React from 'react'

export default class CreatePlayer extends React.Component {

    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPlayer(this.state)
        this.setState({ name: ""})
    }

    render(){
        const styling = {
            border: "1px solid #00e0ff",
            borderRadius: "10px",
            margin: "1vh 1vw"
        }
        return(
            <form style={styling} >
                <input type="text" value={this.state.name} onChange={this.handleChange} ></input>
                <button type="submit" onClick={this.handleSubmit} >Create Player</button>
            </form>
        )
    }
}