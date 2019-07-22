import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Doodad from '../../components/Doodad/Doodad';
import BuildControls from '../../components/Doodad/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Doodad/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const PART_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class DoodadBuilder extends Component {

    // constructor(props)
    //      super(props)
    //      this.state = {...}
    // }
    state = {
        parts: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 1,
        },
        totalPrice: 5,
        purchasable: true,
        purchasing: false,
        loading: false
    }

    updatePurchaseState(updatedParts) {
        const sum = Object.keys(updatedParts)
            .map(partKey => {
                return updatedParts[partKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 })
    }

    addPartHandler = (type) => {
        const oldCount = this.state.parts[type];
        const updatedCount = oldCount + 1;
        const updatedParts = {
            ...this.state.parts
        };
        updatedParts[type] = updatedCount;
        const priceChange = PART_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceChange;
        this.setState({ totalPrice: newPrice, parts: updatedParts });
        this.updatePurchaseState(updatedParts);
    }

    removePartHandler = (type) => {
        const oldCount = this.state.parts[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedParts = {
            ...this.state.parts
        };
        updatedParts[type] = updatedCount;
        const priceChange = PART_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceChange;
        this.setState({ totalPrice: newPrice, parts: updatedParts });
        this.updatePurchaseState(updatedParts);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        console.log("Order Summer function purchaseContinueHandler");
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.parts,
            price: this.state.totalPrice,
            customer: {
                name: 'Barbara Fick',
                address: {
                    street: '35th Ave',
                    zipCode: '93326',
                    country: 'Germany'
                },
                email: 'bkantzos@yahoo.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
            });
    }
    render() {
        const disabledInfo = {
            ...this.state.parts
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = <OrderSummary
            parts={this.state.parts}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler} />;
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Doodad parts={this.state.parts} />
                <BuildControls
                    partAdded={this.addPartHandler}
                    partRemoved={this.removePartHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    order={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default DoodadBuilder;