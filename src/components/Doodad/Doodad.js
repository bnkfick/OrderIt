import React from 'react';
import classes from './Doodad.css';
import DoodadPart from './DoodadParts/DoodadPart';


const doodad = (props) => {
    return (
        <div className={classes.Doodad}>
            <DoodadPart type="bread-top"/>
            <DoodadPart type="cheese"/>
            <DoodadPart type="meat"/>
            <DoodadPart type="bread-bottom"/>
        </div>
    );
}

export default doodad;