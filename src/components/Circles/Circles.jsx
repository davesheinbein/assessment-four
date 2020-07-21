import React from 'react';
import './Circles.css'

function Circles(props) {
    return (
        <div className='circlesContainer'>
            <div
                className={props.circleIndex === 0 ? 'selected' : null}
            >
                1
            </div>
            <div
                className={props.circleIndex === 1 ? 'selected' : null}
            >
                2
            </div>
            <div
                className={props.circleIndex === 2 ? 'selected' : null}
            >
                3
            </div>
            <div
                className={props.circleIndex === 3 ? 'selected' : null}
            >
                4
            </div>
        </div>
    )
}
export default Circles;
