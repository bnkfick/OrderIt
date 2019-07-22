import React from  'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
        <p>Total Price: {props.totalPrice}</p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </div>
    </Aux>
    )
};

export default orderSummary;