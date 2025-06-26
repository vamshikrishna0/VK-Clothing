import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard, FaRupeeSign } from 'react-icons/fa';
import { SiHdfcbank, SiIcicibank, SiDeutschebank } from "react-icons/si";
import { BsBank2 } from "react-icons/bs";
import { useCart } from './CartContext';

const cardTypes = [
  { type: 'Visa', icon: <RiVisaFill className="text-4xl text-blue-700" /> },
  { type: 'Mastercard', icon: <FaCcMastercard className="text-4xl text-red-600" /> },
  { type: 'RuPay', icon: <FaRupeeSign className="text-4xl text-green-600" /> },
];

function CardPayment() {
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [cardCategory, setCardCategory] = useState('credit');
  const [details, setDetails] = useState({
    cardHolder: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    fullName: '',
    address: '',
    location: '',
    landmark: '',
    otp: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;
  const { clearCart } = useCart();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' }); // clear error on change
  };

  const validate = () => {
    const errors = {};
    const { cardHolder, cardNumber, expiry, cvv, fullName, address, location, otp } = details;

    if (!selectedCard) errors.selectedCard = 'Please select a card type.';
    if (!fullName.trim()) errors.fullName = 'Full name is required.';
    if (!cardHolder.trim()) errors.cardHolder = 'Cardholder name is required.';
    if (!cardNumber.trim()) errors.cardNumber = 'Card number is required.';
    if (!/^\d{16}$/.test(cardNumber)) errors.cardNumber = 'Card number must be 16 digits.';
    if (!/^\d{3}$/.test(cvv)) errors.cvv = 'CVV must be 3 digits.';
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) errors.expiry = 'Use MM/YY format.';
    if (!/^\d{4,6}$/.test(otp)) errors.otp = 'Enter 4 to 6 digit OTP or PIN.';
    if (cardCategory === 'credit') {
      if (!expiry.trim()) errors.expiry = 'Expiry date is required.';
      if (!cvv.trim()) errors.cvv = 'CVV is required.';
    } else {
      if (!otp.trim()) errors.otp = 'OTP or PIN is required.';
    }
    if (!address.trim()) errors.address = 'Address is required.';
    if (!location.trim()) errors.location = 'City/Location is required.';

    return errors;
  };

  const handleSubmit = () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert(`${cardCategory.toUpperCase()} ${selectedCard} payment${selectedBank ? ' via ' + selectedBank : ''} successful for ₹${total}`);
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Back Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cart
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Card Payment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {['FullName', 'CardHolder', 'address', 'location', 'landmark'].map((field) => (
          <div key={field}>
            <input
              name={field}
              placeholder={field === 'landmark' ? 'Landmark (optional)' : field.replace(/([A-Z])/g, ' $1')}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {formErrors[field] && <p className="text-sm text-red-600 mt-1">{formErrors[field]}</p>}
          </div>
        ))}
        <select
          value={cardCategory}
          onChange={(e) => setCardCategory(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
        </select>
      </div>

      <p className="mb-2 font-medium">Select Card Type:</p>
      <div className="flex gap-4 mb-6 justify-center flex-wrap">
        {cardTypes.map((card) => (
          <div
            key={card.type}
            onClick={() => setSelectedCard(card.type)}
            className={`cursor-pointer p-3 border rounded-lg hover:shadow-md transition ${
              selectedCard === card.type ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center">
              {card.icon}
              <p className="text-sm mt-1">{card.type}</p>
            </div>
          </div>
        ))}
      </div>
      {formErrors.selectedCard && <p className="text-sm text-red-600 mb-4 text-center">{formErrors.selectedCard}</p>}

      {cardCategory === 'debit' && (
        <div className="mb-6">
          <p className="mb-2 font-medium">Select Your Bank (optional):</p>
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { name: 'SBI', icon: <BsBank2 className="text-3xl text-indigo-700" /> },
              { name: 'HDFC', icon: <SiHdfcbank className="text-3xl text-red-600" /> },
              { name: 'ICICI', icon: <SiIcicibank className="text-3xl text-orange-500" /> },
              { name: 'Deutschebank', icon: <SiDeutschebank className="text-3xl text-purple-600" /> },
            ].map((bank) => (
              <div
                key={bank.name}
                onClick={() => setSelectedBank(bank.name)}
                className={`cursor-pointer p-3 border rounded-lg flex flex-col items-center hover:shadow-md transition ${
                  selectedBank === bank.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                }`}
              >
                {bank.icon}
                <p className="text-xs mt-1">{bank.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <input
            name="cardNumber"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{16}"
            maxLength={16}
            placeholder="Card Number (16 digits)"
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          {formErrors.cardNumber && <p className="text-sm text-red-600">{formErrors.cardNumber}</p>}
        </div>

        {cardCategory === 'credit' ? (
          <>
            <div>
              <input
                name="expiry"
                type="text"
                pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                placeholder="Expiry (MM/YY)"
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />

              {formErrors.expiry && <p className="text-sm text-red-600">{formErrors.expiry}</p>}
            </div>
            <div>
              <input
                name="cvv"
                type="password"
                inputMode="numeric"
                pattern="[0-9]{3}"
                maxLength={3}
                placeholder="CVV (3 digits)"
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />

              {formErrors.cvv && <p className="text-sm text-red-600">{formErrors.cvv}</p>}
            </div>
          </>
        ) : (
          <div>
            <input
                name="otp"
                type="password"
                inputMode="numeric"
                pattern="[0-9]{4,6}"
                maxLength={6}
                placeholder="Enter OTP or Card PIN"
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />

            {formErrors.otp && <p className="text-sm text-red-600">{formErrors.otp}</p>}
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Pay ₹{total}
      </button>
    </div>
  );
}

export default CardPayment;
