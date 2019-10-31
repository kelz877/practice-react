import React, { Component } from 'react'
import Coin from './Coin'
import { randomChoice } from '../helpers'

class CoinCount extends Component {
    static defaultProps = {
        title: 'Flip a Coin!',
        coins: [{face: 'Heads' }, {face: 'Tails' }]
    }
    constructor(props){
        super(props);
        this.state = { 
            currentCoin: null,
            flips: 0,
            countHeads: 0,
            countTails: 0,
        };
        this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick(){
        this.headsOrTails();

    }    


    //random heads or tails + add to count 
    headsOrTails(){
        const newCoin = randomChoice(this.props.coins)
        this.setState(currentState => {
            return {
                
                currentCoin: newCoin, 
                flips: currentState.flips + 1,
                countHeads: currentState.countHeads + (newCoin.face === 'Heads' ? 1 : 0),
                countTails: currentState.countTails + (newCoin.face === 'Tails' ? 1 : 0)
            }
            
        })
    }

    render (){
        return (
            <div>      
                <h3>Lets Flip a Coin!</h3>
                {this.state.currentCoin && <Coin info={this.state.currentCoin} />}
                <p>There have been {this.state.flips} total flips. {this.state.countHeads} have been heads and {this.state.countTails} have been tails </p>
                <button onClick={this.handleClick}>Flip Coin!</button>
            </div>
        )
    }
}

export default CoinCount