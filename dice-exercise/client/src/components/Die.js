import React, { Component } from 'react';
import '../styles/Die.css'

class Die extends Component {
    render() {
        return <i className={`Die fas fa-dice-${this.props.side}`} />
    }
}

export default Die;