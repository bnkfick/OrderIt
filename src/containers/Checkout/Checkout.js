import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        parts: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const parts = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                parts[param[0]] = +param[1];
            }
        }
        this.setState({ parts: parts, totalPrice: price });

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
                    checkoutContinue={this.checkoutContinue} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={(props) => <ContactData parts={this.state.parts} price={this.state.totalPrice} {...props}/>}
                />
            </div>
        )
    }
}

export default Checkout;