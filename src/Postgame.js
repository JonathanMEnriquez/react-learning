import React, { Component } from 'react';
import './Postgame.css';
import GameContext from './GameContext';
import ButtonGroup from './ButtonGroup';

class Postgame extends Component {
    declareWinner(ev) {
        console.log(ev.target.textContent, 'is the Winner!!');
    }

    render() {
        const { img } = this.context;
        const players = ['Ariana', 'Brittany', 'David', 'Jonathan', 'Teddy', 'No one'];
        const btnGroupEntries = [];
        players.forEach(p => {
            btnGroupEntries.push({text: p, clickHandler: this.declareWinner});
        });

        return (
            <div className="postgame">
                <h2>Answer:</h2>
                <div className="caption">{img.caption}</div>
                <h2>Winner:</h2>
                <ButtonGroup elements={btnGroupEntries} icon={false} centered={true} />
            </div>
         );
    }
}

Postgame.contextType = GameContext;
 
export default Postgame;