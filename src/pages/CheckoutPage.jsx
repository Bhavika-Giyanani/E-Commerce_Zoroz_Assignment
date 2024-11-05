import { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import PaymentSuccess from '../components/PaymentSuccess';
import PaymentFailure from '../components/PaymentFailure';

const CheckoutPage = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async (paymentDetails) => {
    // Mock payment API call
    const response = await fetch('https://dummyjson.com/payment', {
      method: 'POST',
      body: JSON.stringify(paymentDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    setPaymentStatus(result.success ? 'success' : 'failure');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onPayment={handlePayment} />
      {paymentStatus === 'success' && <PaymentSuccess />}
      {paymentStatus === 'failure' && <PaymentFailure />}
    </div>
  );
};

export default CheckoutPage; 