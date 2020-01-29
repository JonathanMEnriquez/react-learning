import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    state = {  }
    render() {
        const { icon, clickHandler, src, alt, text } = this.props;
        return (
            <div className="encasing-div">
                {icon &&
                    <img
                        className="button-icon"
                        src={src}
                        alt={alt}
                        onClick={clickHandler}
                    />
                }
                {!icon &&
                    <div
                        className="button"
                        onClick={clickHandler}
                    >{text}</div>
                }
            </div>
        );
    }
}
 
export default Button;