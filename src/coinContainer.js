import React, { Component } from 'react'
import { choice } from './helper'
import Coin from './coin'
import styleCoin from './styleCoin.css'


class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'tails',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/2_DK_Krone_Coin_Tails_Side.jpg/128px-2_DK_Krone_Coin_Tails_Side.jpg',
      },
      {
        side: 'heads',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Coin_Trajan_MBA_Lyon.jpg/128px-Coin_Trajan_MBA_Lyon.jpg',
      },
    ],
  };
  constructor(props)  {
    super (props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      }
    })
  }

  handleClick(e) {
    this.flipCoin()
  }
    render() {
        return(
            <div className='styleCoin'>
                <h1> Coin Game </h1>
                 {this.state.currCoin &&  <Coin info={this.state.currCoin} /> } 
                <button onClick={this.handleClick}>Flip It!</button>
                <p>
                  <span>Total flips: {this.state.nFlips} </span>  <br/>
               <span> Total Heads : {this.state.nHeads}</span><br/>
             <span>Total Tails : {this.state.nTails}</span>   
                </p>
            </div>
        )
    }
}
export default CoinContainer;