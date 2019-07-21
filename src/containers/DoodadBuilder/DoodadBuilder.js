import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Doodad from '../../components/Doodad/Doodad';

class DoodadBuilder extends Component { 

    // constructor(props)
    //      super(props)
    //      this.state = {...}
    // }
    state = {
        parts: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    }
    render () {
        return (
            <Aux>
                <Doodad parts={this.state.parts}/>
                <div>Doodad Build Controls</div>
            </Aux>
        );
    }
}

export default DoodadBuilder;