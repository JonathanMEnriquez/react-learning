import React, { Component } from 'react';
import './Standings.css';
import GameContext from './GameContext';

class Standings extends Component {
    render() {
        const { players } = this.context;
        return ( 
            <div className="standings">
                <h3>Standings</h3>
                <div className="s-contents">
                    <div className="s-names">
                        {players.map((e, i) => {
                            return (
                            <p key={i}>{e.name}</p>
                            );
                        })}
                    </div>
                    <div className="s-wins">
                        {players.map((e, i) => {
                            return (
                            <p key={i}>{e.wins}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Standings.contextType = GameContext;
 
export default Standings;