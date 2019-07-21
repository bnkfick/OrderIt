import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Doodad from '../../components/Doodad/Doodad';

class DoodadBuilder extends Component { 

    render () {
        return (
            <Aux>
                <Doodad/>
                <div>Doodad Build Controls</div>
            </Aux>
        );
    }
}

export default DoodadBuilder;