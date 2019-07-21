import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Doodad from '../../components/Doodad/Doodad';
import BuildControls from '../../components/Doodad/BuildControls/BuildControls';


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
        }
    }
    render () {
        return (
            <Aux>
                <Doodad parts={this.state.parts}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default DoodadBuilder;