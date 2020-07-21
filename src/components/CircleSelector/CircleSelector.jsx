import React from 'react';
import './CircleSelector.css'

function CircleSelector(props) {
    return (
        <div className='CircleSelector'>
            <button
                id='0'
                onClick={props.handleClick}
                className={props.circleIndex === 0 ? 'selected' : null }
            >
                {props.circleIndex === 0 ? 'Circle 1 Selected' : 'Select Circle 1'}
            </button>
            <button
                id='1'
                onClick={props.handleClick}
                className={props.circleIndex === 1 ? 'selected' : null }
            >
                {props.circleIndex === 1 ? 'Circle 2 Selected' : 'Select Circle 2'}
            </button>
            <button
                id='2'
                onClick={props.handleClick}
                className={props.circleIndex === 2 ? 'selected' : null }
            >
                {props.circleIndex === 2 ? 'Circle 3 Selected' : 'Select Circle 3'}
            </button>
            <button
                id='3'
                onClick={props.handleClick}
                className={props.circleIndex === 3 ? 'selected' : null }
            >
                {props.circleIndex === 3 ? 'Circle 4 Selected' : 'Select Circle 4'}
            </button>
        </div>
    )
}
export default CircleSelector;
