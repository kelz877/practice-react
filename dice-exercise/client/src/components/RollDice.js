import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = {die1: 'one', die2: 'one'}
    }
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    render() {
        return (
            <div>
                <Die side={this.state.die1}/>
                <Die side={this.state.die2}/>
                <button></button>
            </div>
        )
    }
}
export default RollDice;