import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { price, title, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://hexabazaar-abusaidshabib.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      console.log(error);
      setCardError(error.message)
    }

    else {
      setCardError('');
    }

    setSuccess('');
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: title,
            email: "dummy@gmail.com"
          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setSuccess('Congrats? Your payment completed');
      setTransactionId(paymentIntent.id);
    }
    setProcessing(false);

    console.log('paymentIntent', paymentIntent);

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn_outline'
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='para3 red'>{cardError}</p>
      {
        success && <div>
          <p className='para3 green'>{success}</p>
          <p>Your transaction_id: <b>{transactionId}</b></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;