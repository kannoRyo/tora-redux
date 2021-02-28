import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js/pure';
import { PaymentEdit } from '../components/Payment/index';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IOv6bD7aEWCBvcEKi5hcKOyHKqXIfBJfnD8ppvG3dTjmCsEUBYuVAWxMftFLv7yg8Y0cMyPLPLRgqWUVAAgUZo600WQLfRem9');

const CheckoutWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
        <PaymentEdit />
    </Elements>
  );
};

export default CheckoutWrapper