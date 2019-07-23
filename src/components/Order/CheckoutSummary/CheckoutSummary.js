import React from 'react';
import Doodad from '../../Doodad/Doodad';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Enjoy your delicious burger!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Doodad parts={props.parts}/>
            </div>
            <Button 
                btnType="Danger"
                clicked>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;