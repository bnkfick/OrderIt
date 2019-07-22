import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

//----------------------------------------------------
// the type defined below
// should match the types 
// checked for in the switch statement 
// in the DoodadPart component
//----------------------------------------------------
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]
const buildControls = (props) => (

    <div className={classes.BuildControls} >
        <p className={classes.price}>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (

            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.partAdded(ctrl.type)}
            removed={() => props.partRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
                className={classes.OrderButton}
                disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;