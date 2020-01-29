import React, { Component } from 'react';
import './Postgame.css';
import GameContext from './GameContext';

class Postgame extends Component {
    state = {  }
    render() {
        const { img } = this.context;
        return (
            <div className="postgame">
                <h2>Answer:</h2>
                <div className="caption">{img.caption}</div>
            </div>
         );
    }
}

Postgame.contextType = GameContext;
 
export default Postgame;