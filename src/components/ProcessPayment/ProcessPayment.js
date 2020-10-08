import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51HZfgTFfmt9g3GB7NKwyXFGXexUXLooauHitIhV2q7wPCxdLUzBYlUt0xrg0bEV6pzRmjbjNkVAyiyEVjCGKTPLt00r9OoWXuj');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardFrom handlePayment={handlePayment}></SimpleCardFrom>
        </Elements> 
    );
};

export default ProcessPayment;