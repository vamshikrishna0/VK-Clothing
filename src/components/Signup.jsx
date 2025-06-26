import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fpassword, setFpassword] = useState("");

  return (
    <div className="pt-16 px-4 md:px-8 w-full min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-sky-900 text-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
        {/* Image section */}
        <div className="w-full md:w-1/2 hidden sm:block">
          <img
            src="https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?semt=ais_items_boosted&w=740"
            alt="signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form section */}
        <form className="w-full md:w-1/2 p-6 sm:p-10" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <label className="w-full">
              <span className="block mb-1">First Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-white rounded text-black"
              />
            </label>
            <label className="w-full">
              <span className="block mb-1">Last Name</span>
              <input
                type="text"
                value={sname}
                onChange={(e) => setSname(e.target.value)}
                className="w-full p-2 border border-white rounded text-black"
              />
            </label>
          </div>

          <label className="block mt-4">
            <span className="block mb-1">Email</span>
            <input
              type="email"
              placeholder="someone@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-white rounded text-black"
            />
          </label>

          <label className="block mt-4">
            <span className="block mb-1">Contact</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-white rounded text-black"
            />
          </label>

          <label className="block mt-4">
            <span className="block mb-1">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-white rounded text-black"
            />
          </label>

          <label className="block mt-4">
            <span className="block mb-1">Confirm Password</span>
            <input
              type="password"
              value={fpassword}
              onChange={(e) => setFpassword(e.target.value)}
              className="w-full p-2 border border-white rounded text-black"
            />
          </label>

          <button
            type="submit"
            className="w-full mt-6 bg-white text-sky-900 font-semibold py-2 px-4 rounded hover:bg-sky-200 transition"
          >
            Create Account
          </button>

          <div className="flex justify-center mt-4 text-sm">
            <p>Already have an account?</p>
            <Link to="/signin" className="ml-2 text-white underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
