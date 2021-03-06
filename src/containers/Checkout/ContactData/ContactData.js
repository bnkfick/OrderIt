import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            parts: this.props.parts,
            price: this.props.price,
            customer: {
                name: 'Barbara Fick',
                address: {
                    street: '35th Ave',
                    zipCode: '93326',
                    country: 'Germany'
                },
                email: 'bkantzos@yahoo.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');   
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="text" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="postalcode" placeholder="Your postal code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={[classes.ContactData, 'borders'].join(' ')}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;