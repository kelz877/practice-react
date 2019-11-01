import React, { Component } from 'react'
import '../styles/color.css'
import { randomChoice } from '../helpers'
//show a series of 16 boxes (square div with color background)
//initial state is random color from list of colors
//when you click each box it should change into a random color

class Color extends Component{
    static defaultProps = {
        allColors: ['purple', 'pink', 'blue', 'red', 'orange', 'yellow', 'brown', 'grey', 'black', 'lavender', 'lawnblush', 'lightblue', 'lightcoral']
    }
    constructor(props){
        super(props);
        this.state = { color: randomChoice(this.props.allColors)};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.colorChange()
    }
    colorChange(){
        let newColor;
        do{
            newColor = randomChoice(this.props.allColors)
        } while 
           (newColor === this.state.color )
        this.setState({ color: newColor })
        
    }

    render(){
        return (
            <button className="button-color-box" onClick={this.handleClick}>
                <div className='color-box' style={{backgroundColor: this.state.color}}></div>
            </button>
        )
    }
}

export default Color;