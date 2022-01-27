import React, { Component } from 'react'
import TodayDate from './TodayDate'

export default class Countdown extends Component {
    state = {
        date: new Date(),
        label: 'Timer ',
        minutes: 5,
        seconds: 59,
    }
    resetState = () => {
        this.setState({ minutes: 10, seconds: 59 })
    }

    changeMinutes = () => {
        console.log('Promjena')
        if (this.state.minutes > 0) {
            this.setState((prevState) => ({ minutes: prevState.minutes - 1 }))
        }
    }
    changeSeconds = () => {
        if (this.state.seconds > 0) {
            this.setState((prevState) => ({ seconds: prevState.seconds - 1 }))
            console.log(this.state.seconds)
        } else {
            this.changeMinutes()
            this.setState({ seconds: 59 })
        }
    }

    componentDidMount() {
        console.log('Component Did MOunt')
        let i = setInterval(() => {
            this.changeSeconds()
        }, 1000)
    }
    render() {
        const { minutes, seconds } = this.state
        return (
            <>
                <h2>{this.state.date.toLocaleDateString('hr-HR')}</h2>
                <h3>
                    {this.state.label}
                    {minutes} : {seconds}
                </h3>
                <button onClick={this.changeMinutes}>Change minutes</button>
                <button onClick={this.resetState}>Reset</button>
                <TodayDate
                    datum={this.state.date.toLocaleDateString('hr-HR')}
                    resetiraj={this.resetState}
                >
                    <div>neki div</div>
                </TodayDate>
            </>
        )
    }
}
