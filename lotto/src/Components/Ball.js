import React, { Component } from 'react'
import '../styles/ball.css'


class Ball extends Component {
    render () {
        return (
            <div className="lotto-ball" >{this.props.num}</div>
        )
    }
}

export default Ball;