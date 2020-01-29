import React, { Component } from 'react';
import GameContext from './GameContext';
import './Pregame.css';
import MainButton from './MainButton';

class Pregame extends Component {
    state = {  }
    render() { 
        const game = this.context;
        return (
            <div className="pregame">
                <div className="header">
                    <p>{this.getCurrentDate()}</p>
                </div>
                <div className="pregame-content">
                    <h1>WHERE I BE: </h1><h2>el Juego</h2>
                </div>
                <div className="button-div">
                    <MainButton actionTitle="Start" loading={!this.props.imgLoaded} clickHandler={game.setToLiveMode} />
                </div>
            </div>
         );
    }

    getCurrentDate() {
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const curr = new Date();
        return day[curr.getDay()] + ', ' + month[curr.getMonth()] + ' ' + curr.getDate();
    }
}

Pregame.contextType = GameContext;
 
export default Pregame;