import React from 'react';

//import burgerLogo from '../../assets/images/burger.png';
import classes from './Logo.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>HIIH
            {/*<img src={burgerLogo} alt="Ficktastic Burgers" />*/}
        </div>
    );
};

export default logo;