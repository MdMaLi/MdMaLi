import React, { Component } from 'react'

export default class ClassCounter extends Component {
    state = {
        counter: 0,
    }
    minus = () => {
        this.setState((prevState) => ({ counter: prevState.counter - 1 }))
    }
    plus = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }
    render() {
        return (
            <>
                <h1>Counter: </h1>
                <button onClick={this.minus}>-</button>
                <span>{this.state.counter}</span>
                <button onClick={this.plus}>+</button>
            </>
        )
    }
}
