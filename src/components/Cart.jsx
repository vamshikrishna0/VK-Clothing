import React, { useState } from 'react';
import { useCart } from './CartContext'; // Adjust path as needed
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, increment, decrement, removeFromCart } = useCart();
  const [paymentMode, setPaymentMode] = useState('upi');
  const navigate = useNavigate();

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleOrderNow = () => {
  navigate(`/payment/${paymentMode}`, { state: { total: getTotal() } });
};


  return (
    <div className='p-6'>
      <h2 className='text-3xl mb-6'>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>
          Your cart is empty.<br />
          Browse <Link to="/mens" className='text-sky-800'>Mens</Link>,{' '}
          <Link to="/women" className='text-sky-800'>Women</Link>, and{' '}
          <Link to="/Sneakers" className='text-sky-800'>Sneakers</Link> sections to add more products.
        </p>
      ) : (
        <div className='flex flex-col md:flex-row md:justify-between gap-6'>
          {/* Cart Items */}
          <div className='flex-1'>
            {cartItems.map((item, idx) => (
              <div key={idx} className='flex items-center justify-between mb-4 border-b pb-2'>
                <img src={item.img} alt={item.title} className='w-20 h-20 object-cover rounded' />
                <div className='flex-1 ml-4'>
                  <h4 className='font-semibold'>{item.title}</h4>
                  <p>₹{item.price}</p>
                  <div className='flex items-center mt-2'>
                    <button
                      onClick={() => decrement(item.title)}
                      className='px-2 bg-gray-300 rounded'
                    >-</button>
                    <span className='px-4'>{item.quantity}</span>
                    <button
                      onClick={() => increment(item.title)}
                      className='px-2 bg-gray-300 rounded'
                    >+</button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className='text-red-500 ml-4'
                >Remove</button>
              </div>
            ))}
          </div>

          {/* Payment Section */}
          <div className='w-full md:w-1/3 bg-gray-50 p-4 rounded shadow-md h-fit'>
            <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
            <p className='mb-2'>Total: <span className='font-bold'>₹{getTotal()}</span></p>

            <h4 className='font-semibold mt-4 mb-2'>Select Payment Mode</h4>
            <div className='flex flex-col gap-2 text-sm'>
              <label>
                <input
                  type='radio'
                  name='payment'
                  value='upi'
                  checked={paymentMode === 'upi'}
                  onChange={(e) => setPaymentMode(e.target.value)}
                /> UPI (GPay, PhonePe)
              </label>
              <label>
                <input
                  type='radio'
                  name='payment'
                  value='card'
                  checked={paymentMode === 'card'}
                  onChange={(e) => setPaymentMode(e.target.value)}
                /> Credit/Debit Card
              </label>
              <label>
                <input
                  type='radio'
                  name='payment'
                  value='cod'
                  checked={paymentMode === 'cod'}
                  onChange={(e) => setPaymentMode(e.target.value)}
                /> Cash on Delivery (COD)
              </label>
            </div>

            <button
              onClick={handleOrderNow}
              className='mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700'
            >
              {paymentMode === 'cod' ? 'Place Order' : 'Proceed to Payment'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
