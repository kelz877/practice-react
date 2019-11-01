import React, { Component } from 'react'
import Color from './Color'
import colorContainer from '../styles/colorContainer.css'

class ColorContainer extends Component {
    static defaultProps = {
        numberBoxes: 18
    }
    render(){
        const boxes = Array.from({ length: this.props.numberBoxes}).map( () => <Color />)
        return <div className="color-container">
            {boxes}
        </div>
    }
}

export default ColorContainer