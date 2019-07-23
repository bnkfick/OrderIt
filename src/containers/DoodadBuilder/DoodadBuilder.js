import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Doodad from '../../components/Doodad/Doodad';
import BuildControls from '../../components/Doodad/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Doodad/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
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
        parts: null,
        totalPrice: 5,
        purchasable: true,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://react-doodad.firebaseio.com/parts.json')
            .then(response => {
                
                this.setState({ parts: response.data });
                console.log(this.state.parts);
            }).catch(error => {
                this.setState({error: true})
            });
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

        const queryParams = [];
        for (let i in this.state.parts) {
            queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.parts[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: 'checkout',
            search: '?' + queryString
        })

    }

    render() {
        const disabledInfo = {
            ...this.state.parts
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;
        let doodad = this.state.error ? <p>Parts can't be loaded</p> : <Spinner />;

        if (this.state.parts) {
            doodad =  (
                <Aux><Doodad parts={this.state.parts} />
                    <BuildControls
                        partAdded={this.addPartHandler}
                        partRemoved={this.removePartHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        order={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Aux>);
                orderSummary = (<OrderSummary
                parts={this.state.parts}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} />);
        }
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
                {doodad}
            </Aux>
        );
    }
}


export default withErrorHandler(DoodadBuilder, axios);