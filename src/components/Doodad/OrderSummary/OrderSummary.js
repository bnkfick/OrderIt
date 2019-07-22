import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // THis could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {

        const partsSummary = Object.keys(this.props.parts)
        .map(partKey => {
            return <li key={partKey}><span style={{textTransform: 'capitalize'}}>{partKey}</span>: {this.props.parts[partKey]}</li>
        } );

        return (
            <Aux>
                <div className="borders">
                    <h3>Your Order</h3>
                    <p>A delicious doodad with the following parts:</p>
                    <ul>
                        {partsSummary}
                    </ul>
                    <p>Total Price: {this.props.totalPrice}</p>
                    <p>Continue to Checkout?</p>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
                </div>
            </Aux>
        );
    }
};

export default OrderSummary;