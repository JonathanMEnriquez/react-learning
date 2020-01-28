import React, { Component } from 'react';
import Button from './Button';
import './Button.css';

class ButtonGroup extends Component {
    render() {
        const props = this.props;
        const elements = props.elements;

        return ( 
            <div className="btn-group"
                onMouseEnter={props.mouseEnter}
                onMouseLeave={props.mouseLeave}>
                {elements.map((el, i) => {
                    return (
                    <Button
                        key={i}
                        src={el.src} 
                        icon={props.icon} 
                        clickHandler={el.clickHandler}
                        alt={el.alt}
                    />)
                })}
            </div>
        );
    }
}
 
export default ButtonGroup;