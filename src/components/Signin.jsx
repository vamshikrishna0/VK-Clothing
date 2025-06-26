import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long.';
      } else if (!/[A-Z]/.test(password)) {
        newErrors.password = 'Password must contain at least one uppercase letter.';
      } else if (!/[a-z]/.test(password)) {
        newErrors.password = 'Password must contain at least one lowercase letter.';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        newErrors.password = 'Password must contain at least one special character.';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div className="pt-20 p-6 md:p-20 bg-sky-900 w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg max-w-5xl w-full">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            className="object-cover h-full w-full hidden sm:block"
            src="https://img.freepik.com/premium-photo/showroom-curly-haired-young-guy-standing-near-hangers-with-clothes_259150-27087.jpg?semt=ais_items_boosted&w=740"
            alt="signin"
          />
        </div>

        {/* Form */}
        <form
          className="w-full md:w-1/2 p-6 sm:p-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center mb-6 text-sky-900">Sign In</h2>

          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full p-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded`}
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 block w-full p-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded`}
            />
          </label>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-900 text-white py-2 px-4 rounded hover:bg-sky-800 transition duration-200"
          >
            Submit
          </button>

          <div className="flex text-center justify-center mt-3 text-sm">
            <p>Don't have an account?</p>
            <Link to="/signup" className="ml-2 text-blue-900 font-medium">
              Sign Up
            </Link>
          </div>

          <div className="mt-4 text-red-500 text-sm space-y-1">
            {errors.email && <p>{errors.email}</p>}
            {errors.password && <p>{errors.password}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
