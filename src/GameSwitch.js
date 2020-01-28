import React, { Component } from 'react';
import GameContext from './GameContext';
import Pregame from './Pregame';
import LiveGame from './LiveGame';
import './GameSwitch.css';

class GameSwitch extends Component {
    render() {
        const game = this.context;
        return (
            <div>
                <img className={game.mode !== game.modes.PREGAME ? 'game-img' : 'hidden'}
                    src={game.img.img_src} />

                {game.mode === game.modes.PREGAME && 
                    <Pregame />
                }
                {game.mode === game.modes.LIVEGAME &&
                    <LiveGame />
                }
            </div>
        );
    }
}

GameSwitch.contextType = GameContext;
 
export default GameSwitch;