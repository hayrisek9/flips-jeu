import React, { Component } from "react";
import { choice } from './helper'

class CoinContainer extends Component {
    static defaultProps = {
        coins:[ 
            {  
               side: 'Heads',

               imgSrc:'https://www.romacoins.com/WebRoot/ce_it/Shops/990481405/58B0/5F99/4AF0/D667/04CE/C0A8/1910/E5F4/1_Cent_Italy_2015_Euro_Bu_Unc_Romacoins.png' } ,
               {
                side: 'Tails',

                imgSrc:'https://www.fleur-de-coin.com/images/eurocoins/euroimages/france1cent.jpg'
               }
            ],
   
    } 
    constructor(props){
        super(props)
        this.state= {
            currCoin:null,
            nFlips:0,
            nTails:0,
            nHeads:0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flipCoin(){
        const newCoin = choice(this.props.coins)

    }
    handleClick(e){
        this.flipCoin()
    }
    render() {
        return(
            <div>
                <h1>Coin Game</h1>
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