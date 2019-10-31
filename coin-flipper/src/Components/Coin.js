import React, { Component } from 'react'

class Coin extends Component {

    render(){
        return (
            <div className="coin-face">{this.props.info.face}</div>
        )
    }
}

export default Coin;