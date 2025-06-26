import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate, useLocation } from 'react-router-dom';

function CODPayment() {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total || 0;

  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    city: '',
    landmark: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleOrder = () => {
    const newErrors = {};
    if (!details.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!details.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!details.mobile.trim()) newErrors.mobile = 'Mobile number is required.';
    if (!details.address.trim()) newErrors.address = 'Delivery address is required.';
    if (!details.city.trim()) newErrors.city = 'City is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
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

      <h2 className="text-2xl font-bold text-center">Cash on Delivery</h2>
      <p className="text-green-700 text-sm font-medium text-center">
        You'll pay when the product is delivered.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={details.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
        </div>

        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={details.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={details.mobile}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.mobile && <p className="text-sm text-red-600">{errors.mobile}</p>}
      </div>

      <div>
        <textarea
          name="address"
          placeholder="Full Delivery Address"
          value={details.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
        />
        {errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
      </div>

      <div>
        <input
          type="text"
          name="city"
          placeholder="City / Location"
          value={details.city}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {errors.city && <p className="text-sm text-red-600">{errors.city}</p>}
      </div>

      <input
        type="text"
        name="landmark"
        placeholder="Landmark (optional)"
        value={details.landmark}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={handleOrder}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Place COD Order (₹{total})
      </button>
    </div>
  );
}

export default CODPayment;
