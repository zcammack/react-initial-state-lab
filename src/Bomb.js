import React, { Component } from 'react';

export default class Bomb extends Component {


    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return(
            <div>
                <h1>{this.state.secondsLeft < 1 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</h1>
            </div>
        )
    }
}