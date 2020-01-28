import React, { Component } from 'react';
import GameContext from './GameContext';
import { data } from './contents.json';

class GameProvider extends Component {
    state = { 
        gameModes: {
            PREGAME: 'pre',
            LIVEGAME: 'live',
            POSTGAME: 'post'
        },
        gameMode: 'pre',
        img: this.getImageInfo(),
     }
    render() { 
        return ( 
            <GameContext.Provider
                value={{
                    modes: this.state.gameModes,
                    mode: this.state.gameMode,
                    setToPregameMode: () => this.setState({gameMode: this.state.PREGAME}),
                    setToLiveMode: () => this.setState({gameMode: this.state.gameModes.LIVEGAME}),
                    setToPostgameMode: () => this.setState({gameMode: this.state.gameModes.POSTGAME}),
                    img: this.state.img,
                }}
            >
                {this.props.children}
            </GameContext.Provider>
         );
    }
    getImageInfo() {
        // return data[Math.floor(Math.random() * data.length)];
    
        //for testing
        return data.find(e => e.id === '6ee0d4d8fb5cdc629b1541ed5b677391');
    }
}
 
export default GameProvider;