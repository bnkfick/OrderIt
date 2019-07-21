import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Doodad from '../../components/Doodad/Doodad';
import BuildControls from '../../components/Doodad/BuildControls/BuildControls';

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
            meat: 2,
        },
        totalPrice: 5
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
        this.setState({totalPrice: newPrice, parts: updatedParts});
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
        this.setState({totalPrice: newPrice, parts: updatedParts});
    }
    render () {
        const disabledInfo = {
            ...this.state.parts
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Aux>
                <Doodad parts={this.state.parts}/>
                <BuildControls 
                    partAdded={this.addPartHandler}
                    partRemoved={this.removePartHandler}
                    disabled={disabledInfo}
                />
            </Aux>
        );
    }
}

export default DoodadBuilder;