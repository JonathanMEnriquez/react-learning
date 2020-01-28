import React, { Component } from 'react';
import './MainButton.css';

class MainButton extends Component {
    state = {  }
    render() { 
        return ( 
        <button
            className="main-button"
            onClick={this.props.clickHandler}>
            {this.props.actionTitle}
        </button>
         );
    }
}
 
export default MainButton;