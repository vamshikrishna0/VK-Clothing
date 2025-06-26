import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SiPhonepe, SiPaytm, SiRazorpay } from 'react-icons/si';
import { FaGooglePay } from 'react-icons/fa';
import { useCart } from './CartContext';

const upiApps = [
  { name: 'GPay', icon: <FaGooglePay className="text-3xl text-blue-600" /> },
  { name: 'PhonePe', icon: <SiPhonepe className="text-3xl text-purple-600" /> },
  { name: 'Paytm', icon: <SiPaytm className="text-3xl text-blue-500" /> },
  { name: 'BHIM', icon: <SiRazorpay className="text-3xl text-green-600" /> },
];

const cities = ['Hyderabad', 'Mumbai', 'Bengaluru', 'Chennai', 'Delhi', 'Pune', 'Kolkata'];

function UPIPayment() {
  const [selectedApp, setSelectedApp] = useState('');
  const [upiId, setUpiId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;
  const { clearCart } = useCart();

  const handleSubmit = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Full name is required.';
    if (!phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!address.trim()) newErrors.address = 'Billing address is required.';
    if (!pinCode.trim()) newErrors.pinCode = 'PIN code is required.';
    if (!city) newErrors.city = 'City selection is required.';
    if (!selectedApp && !upiId.trim()) newErrors.upi = 'Select a UPI app or enter UPI ID.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    clearCart();
    navigate('/order-success');
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
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

      <h2 className="text-2xl font-bold mb-4 text-center">UPI Payment</h2>

      {/* Form Fields */}
      <div className="mb-4 space-y-2">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); clearError('name'); }}
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); clearError('phone'); }}
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
          />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <textarea
            value={address}
            onChange={(e) => { setAddress(e.target.value); clearError('address'); }}
            placeholder="Billing Address"
            rows="2"
            className="w-full border p-2 rounded"
          />
          {errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
        </div>
        <div>
          <input
            type="text"
            value={pinCode}
            onChange={(e) => { setPinCode(e.target.value); clearError('pinCode'); }}
            placeholder="PIN Code"
            className="w-full border p-2 rounded"
          />
          {errors.pinCode && <p className="text-sm text-red-600">{errors.pinCode}</p>}
        </div>
        <div>
          <select
            value={city}
            onChange={(e) => { setCity(e.target.value); clearError('city'); }}
            className="w-full border p-2 rounded"
          >
            <option value="">Select City</option>
            {cities.map((cityOption) => (
              <option key={cityOption} value={cityOption}>{cityOption}</option>
            ))}
          </select>
          {errors.city && <p className="text-sm text-red-600">{errors.city}</p>}
        </div>
      </div>

      {/* UPI App Selection */}
      <p className="mb-2">Select UPI App:</p>
      <div className="flex gap-4 mb-4 flex-wrap justify-center">
        {upiApps.map((app) => (
          <div
            key={app.name}
            onClick={() => {
              setSelectedApp(app.name);
              setUpiId('');
              clearError('upi');
            }}
            className={`cursor-pointer p-3 border rounded-lg hover:shadow-md transition ${
              selectedApp === app.name ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center">
              {app.icon}
              <p className="text-sm mt-1">{app.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* UPI ID Input */}
      <div className="mb-4">
        <p className="text-sm text-center text-gray-600 mb-1">or enter UPI ID manually:</p>
        <input
          type="text"
          value={upiId}
          onChange={(e) => {
            setUpiId(e.target.value);
            setSelectedApp('');
            clearError('upi');
          }}
          placeholder="e.g. user@upi"
          className="w-full border p-2 rounded"
        />
        {errors.upi && <p className="text-sm text-red-600 text-center">{errors.upi}</p>}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Pay ₹{total}
      </button>
    </div>
  );
}

export default UPIPayment;
