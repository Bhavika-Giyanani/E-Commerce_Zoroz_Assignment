import { useState } from 'react';
import PropTypes from 'prop-types';

const CheckoutForm = ({ onPayment }) => {
  const [cardDetails, setCardDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onPayment(cardDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Card Number" onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
      <input type="text" placeholder="Expiry Date" onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
      <input type="text" placeholder="CVV" onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
      <button type="submit">Pay</button>
    </form>
  );
};

CheckoutForm.propTypes = {
  onPayment: PropTypes.func.isRequired,
};

export default CheckoutForm; 