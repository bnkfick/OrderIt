import React from 'react';
import classes from './Doodad.css';
import DoodadPart from './DoodadParts/DoodadPart';


const doodad = (props) => {

    let transformedDoodadParts = Object.keys(props.parts)
    .map(partKey => {
        //console.log("partKey", partKey);
        return [...Array(props.parts[partKey])].map((_, i) => {
            //console.log("part", _, i);
            return <DoodadPart key={partKey + i} type={partKey} />;
        });
    })
    .reduce((prevVal, currVal) => {
        return prevVal.concat(currVal)
    }, []);
    if (transformedDoodadParts.length === 0) {
        transformedDoodadParts = <p>Please start adding doodad parts!</p>
    }
    //console.log(transformedDoodadParts);
    return (
        <div className={classes.Doodad}>
            
            <DoodadPart type="bread-top"/>
            {transformedDoodadParts}
            <DoodadPart type="bread-bottom"/>
        </div>
    );
}

export default doodad;