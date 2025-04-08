import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import "./Payment.css";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

  const data = useLoaderData();
  const { price, title, discription } = data;

  return (
    <div className='pay_height'>
      <p className='title1'>Payment for {title}</p>
      <p className='para2'>Please pay <strong>${price}</strong></p>
      <div className='payment_card_form'>
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;


/*
- Collect Card Information


1. stripe install
2. card loadStripe
Needed Publishable key
3. card element
4. card form
5. stripe, elements
6. check card error and display error

*/
