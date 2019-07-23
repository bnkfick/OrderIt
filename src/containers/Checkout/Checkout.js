import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        parts: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const parts = {};
        for (let param of query.entries()) {
            parts[param[0]] = +param[1];
        }
        this.setState({parts: parts})
    }
    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                    parts={this.state.parts}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinue={this.checkoutContinue}
                    />
            </div>
        )
    }
}

export default Checkout;