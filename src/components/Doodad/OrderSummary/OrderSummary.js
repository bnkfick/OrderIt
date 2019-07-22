import React from  'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const partsSummary = Object.keys(props.parts)
    .map(partKey => {
        return <li key={partKey}><span style={{textTransform: 'capitalize'}}>{partKey}</span>: {props.parts[partKey]}</li>
    } );
    return (
    <Aux>
        <div className="borders">
        <h3>Your Order</h3>
        <p>A delicious doodad with the following parts:</p>
        <ul>
            {partsSummary}
        </ul>
        <p>Continue to Checkout?</p>
        </div>
    </Aux>
    )
};

export default orderSummary;