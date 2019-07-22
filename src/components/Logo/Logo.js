import React from 'react';

import burgerLogo from '../../assets/images/burger.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt="Ficktastic Burgers" />
        </div>
    );
};

export default logo;