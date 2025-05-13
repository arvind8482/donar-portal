
'use client'; 
import React from 'react'
import { useState } from 'react';

function login() {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await fetch('http://localhost:5000/api/login', {
       method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Login successful!');
      // redirect or store token if needed
    } else {
      setError(data.message || 'Login failed');
    }
  };

  return (
   <>
               <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-screen">
      

        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white  rounded-2xl shadow-2xl">
            <div className="p-5 rounded-tl-2xl rounded-tr-2xl card-head" >
          <img
            alt="Your Company"
            src="https://webenor.com/wp-content/uploads/Webenor-Technologies-Private-Limited.png"
            className="mx-auto h-[52px] w-auto"
          />
          <h2 className="mt-2 text-center text-2xl/9 font-medium tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>
             <form onSubmit={handleSubmit} className="space-y-6 p-5">
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md btn px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:btn-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>

          {/* <p className="p-5 text-center text-sm/6 text-gray-500 shadow-2xl">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
   </>
  )
}

export default login
