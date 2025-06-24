'use client';

import React, { useState } from 'react';
import { loadRazorpayScript } from '../../lib/razorpay';
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa'; 

function PaymentPage() {
  const presetAmounts = [100, 200, 500, 1000];
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentOption, setPaymentOption] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');

  const finalAmount = selectedAmount ?? (customAmount ? Number(customAmount) : 2153);

  const handleSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
    'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];
 
  const paymentOptions = [
    { label: 'UPI', value: 'upi', image: '/images/icon-card.png', imageToggle: '/images/icon-card-white.png' },
    { label: 'Credit/Debit Card', value: 'card', image: '/images/icon-card.png', imageToggle: '/images/icon-card-white.png' },
    { label: 'Wallet', value: 'wallet', image: '/images/icon-card.png', imageToggle: '/images/icon-card-white.png' },
    { label: 'Net Banking', value: 'netbanking', image: '/images/icon-card.png', imageToggle: '/images/icon-card-white.png' }
  ];



  const handlePayment = async (method) => {
  console.log("rzp_test_1DP5mmOlF5G5ag");

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert('Razorpay SDK failed to load');
      return;
    }

const res = await fetch('/api/razorpay', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: 2153 }), // must be a number
});

    const order = await res.json();

 const options = {
  key: "rzp_test_1DP5mmOlF5G5ag",
  amount: order.amount,
  currency: order.currency,
  name: 'Iskcon Donation',
  description: 'Donation Payment',
  order_id: order.id,
  handler: function (response) {
    alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
  },
  prefill: {
    name: 'Test User',
    email: 'test@example.com',
    contact: '9999999999',
  },
  theme: {
    color: '#F0AB50',
  },
  method: {
    upi: method === 'upi',
    card: method === 'card',
    wallet: method === 'wallet',
    netbanking: method === 'netbanking',
  },
};




    if (method === 'upi') {
      options.prefill.vpa = 'test@upi';
    }
    if (method === 'wallet') {
      options.wallet = 'paytm';
    }

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const optionsAmount = [
  { label: 'Pay at once', value: 'full', amount: 2153 },
  { label: 'Pay monthly', value: 'monthly', amount: 2153 },
];

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#313131]">
        <div className='conatiner mx-auto size-fit'>
          <div className="flex w-[1320px] gap-x-8">
            <div className="w-4/12">
              <div className="box-outer-container text-xl">
                <div className='bg-white rounded-2xl p-4'>
                  <h2 className='text-3xl font-semibold text-[#F0AB50] uppercase py-4 flex items-center'>Donation&nbsp;<span className='text-[#454545]'>Details</span> <img src="/images/img-cart.png" alt="donation details" title="donation details" width={39} height={45} className='ms-2' /></h2>
                  <div className='border-y border-[#F0AB50] py-3 flex items-center font-medium px-2'>
                    <div className='text-start w-[70%]'>
                      Contribution For
                    </div>
                    <div className='text-end w-[30%] ps-2'>
                      Subtotal
                    </div>
                  </div>
                  <div className='border-b border-[#F0AB50] pb-3'>
                    <div className='pt-3  flex items-start font-normal px-2'>
                      <div className='text-start w-[70%]'>
                        Online Puja Maha Bhog Aarti Archana Thali  × 1
                      </div>
                      <div className='text-end w-[30%] ps-2'>
                        Rs. 2,100
                      </div>
                    </div>
                    <div className='pt-3  flex items-start font-normal px-2'>
                      <div className='text-start w-[70%]'>
                        Subtotal
                      </div>
                      <div className='text-end w-[30%] ps-2'>
                        Rs. 2,100
                      </div>
                    </div>
                    <div className='pt-3  flex items-start font-normal px-2'>
                      <div className='text-start w-[70%]'>
                        Payment Gateway Fee
                      </div>
                      <div className='text-end w-[30%] ps-2'>
                        Rs. 53
                      </div>
                    </div>
                  </div>
                  <div className='pt-3 pb-3  flex items-start px-2 text-2xl font-semibold text-[#F0AB50] '>
                    <div className='text-start w-[70%]'>
                      Total
                    </div>
                    <div className='text-end w-[30%] ps-2'>
                      Rs. 2153
                    </div>
                  </div>
                  <div className='text-base pb-3'>
                    <input type="checkbox" className='bg-[#F0AB50] border-[#F0AB50]' id='recieve' /> <label htmlFor="recieve">I want to receive transaction updates / alerts from </label>
                  </div>
                  <div className="text-center text-xs py-2">
                    By proceeding, you are agreeing to var Terms of Use, Privacy Policy, and Cookie Policy
                  </div>
                  <div className='text-center text-3xl font-semibold text-[#F0AB50]  py-3'>
                    <span className='text-[#000000]'>Additional</span> Sewa <br />
                    <span className='text-xl text-[#000000]'>(Optional)</span>
                  </div>
                  <div >

                    {/* Select Buttons */}
                    <div className="grid grid-cols-1 xl:grid-cols-4 gap-2  mb-4">
                      {presetAmounts.map((amount) => (
                        <label
                          key={amount}
                          className={`cursor-pointer px-4 py-2 text-sm  text-center border rounded-md transition-all duration-200
                ${selectedAmount === amount
                              ? 'bg-[#F0AB50] text-white border-[#F0AB50]'
                              : 'bg-white text-[#DA4F46] border-[#F0AB50] hover:border-[#F0AB50]'}
              `}
                        >
                          <input
                            type="radio"
                            name="amount"
                            value={amount}
                            checked={selectedAmount === amount}
                            onChange={() => handleSelect(amount)}
                            className="hidden"
                          />
                          Rs. {amount}
                        </label>
                      ))}
                    </div>

                    {/* Manual Input */}
                    <input
                      type="text"
                      placeholder="Or Rs. enter custom amount"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className="w-full px-4 py-2 border rounded-xl text-gray-800 border-[#F0AB50] focus:outline-none focus:ring-2 focus:ring-[#F0AB50]"
                    />

                    {/* Display selection */}
                    {finalAmount && (
                      <p className="mt-4 text-green-600 font-medium">
                        You selected Rs. {finalAmount}
                      </p>
                    )}
                  </div>
                  <div className='text-center'>
                    <img src="/images/img-payment.png" alt="donation details" title="donation details" width={435} height={283} />

                  </div>
                </div>

              </div>
            </div>
            <div className="w-8/12">
              <div >
                <div className='bg-[#F0AB50] px-4 text-white rounded-t-2xl h-[110px] flex items-center justify-between'>
                  <img src="/images/donationpe-portal-logo.png" alt="donation details" className='mt-[28px] ms-[24px]' title="donation details" width={122} height={141} />
                  <a href="#"    onClick={() => setShowModal(true)} className='text-white bg-[#DA4F46] rounded-2xl px-6 py-3 text-xl font-semibold uppercase drop-shadow-xl'>Login / Sign Up</a>
                </div>

                    {showModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 ">
      <div className="bg-gradient-to-b from-[#F0AB50] to-[#DA4F46] w-full max-w-sm p-6 rounded-xl relative slide-down  ">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-3 text-white hover:text-[#DA4F46] cursor-pointer text-2xl font-bold"
              >
                &times;
              </button> 
              <div className='text-center mb-4'>
                        <img src="/images/login-screen-logo.png" alt="donation details" className='mx-auto' title="donation details" width={112} height={125} />
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-center text-white">Get Started Now</h2>
            
        <div className="flex items-center overflow-hidden  mb-2 ">
          <div className="flex items-center px-3 bg-transparent text-white whitespace-nowrap border  border-[#FFF] rounded-md text-base me-2">
            <img src="/images/indian-flag.png" alt="donation details" className='mx-auto' title="donation details" width={40} height={41} /> +91
          </div>
  
          <input
            type="tel"
            id="phone"
            maxLength={10}
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 px-3 py-2 focus:outline-none text-white  focus-within:ring-2 focu:ring-[#F0AB50] border  border-[#FFF] rounded-md text-base"
          />
        </div>
              <button className="w-full bg-[#F0AB50] text-white py-2 rounded-md hover:bg-[#F0AB50] transition">
                Send OTP
              </button>
              <div className="pt-4 text-white text-center">
                        <div>
                            Or
                        </div>
                        <div className="flex justify-center space-x-4 pt-4 text-center text-2xl text-gray-700">
                              <FaGoogle className="text-[#DB4437] hover:scale-110 text-5xl transition-transform cursor-pointer bg-white border-4 border-white rounded-[100%]" /> 
                                <FaFacebook className="text-[#1877F2] hover:scale-110 text-5xl  transition-transform cursor-pointer bg-white border-4 border-white rounded-[100%]" /> 
                              <FaEnvelope className="text-[#1877F2] hover:scale-110 text-5xl  transition-transform cursor-pointer bg-white border-4 border-white rounded-[100%]" />

                          </div>
              </div>
              <div className='text-white text-sm text-center pt-4'>
              By proceeding, you agree to Iskcon Delhi’s Privacy Policy, User Agreement,
  T&C’s as well as Mobile Connect’s T&C’s
            </div>
            </div>
          
          </div>
        )}



                <div className='bg-white rounded-b-2xl p-3'>
                  <h2 className='text-3xl font-semibold text-[#F0AB50] uppercase pt-4 flex items-center text-center justify-center'>Transaction&nbsp;<span className='text-[#454545]'>Details</span> <img src="/images/icon-transaction.png" alt="donation details" title="donation details" width={39} height={31} className='ms-2' /></h2>
                  <div className="text-center pb-4 text-md font-medium">
                    (Complete your purchase by completing payment details.)
                  </div>
                  <div className='text-md font-medium px-8 pb-4'>
                    <div>
                      <div>
                        Payment Method :
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {optionsAmount.map((option) => (
                          <label
                            key={option.value}
                            className={`cursor-pointer px-4 py-3 text-left border rounded-xl text-xl transition-all duration-200
                ${paymentOption === option.value
                                ? 'bg-[#F0AB50] text-white border-[#F0AB50] drop-shadow-xl'
                                : 'bg-white text-gray-800 border-[#F0AB50]  hover:border-[#F0AB50]'}
              `}
                          >
                            <input
                              type="radio"
                              name="payment"
                              value={option.value}
                              checked={paymentOption === option.value}
                              onChange={() => setPaymentOption(option.value)}
                              className="hidden"
                            />
                            {option.label} <span className="font-semibold">Rs. {option.amount.toLocaleString()}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                        <div className="pt-4">
                            <div>Billing Email ID :</div>
                        </div>
                    <div className='pt-4'>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={showDetails}
                          onChange={(e) => setShowDetails(e.target.checked)}
                          className="w-4 h-4"
                        />
                        <span>Need an 80G receipt? Check the box to enter details.</span>
                      </label>
                      {showDetails && (
                        <div className="mt-4 ">
                            <div className="space-y-3">
                            {/* Full Name with icon */}
          <div className="relative text-xl">
            <FaUser className="absolute left-3 top-5 text-gray-400  text-2xl" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-3 p-4 border border-[#F0AB50] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F0AB50]"
            />
          </div>

          {/* Phone Number with icon */}
          <div className="relative text-xl">
            <FaPhoneAlt className="absolute left-3 top-5 text-gray-400 text-2xl" />
            <input
              type="tel"
              placeholder="+91 Phone No."
          className="w-full pl-10 pr-3 p-4 border border-[#F0AB50] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F0AB50]"
            />
          </div>

          {/* Billing State with dropdown and icon */}
          <div className="relative text-xl">
            <FaMapMarkerAlt className="absolute left-3 top-5 text-gray-400  text-2xl" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
      className="w-full pl-10 pr-3 p-4 border border-[#F0AB50] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F0AB50]"
            >
              <option value="" disabled>Select Billing State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='pt-4'>
                      <div>
                        Select your preferred payment option from dropdown
                      </div>
                      <div>
              <div className="grid grid-cols-1 gap-4 mt-2">
    {paymentOptions.map((option) => {
    const isSelected = selectedMethod === option.value;
    const imgSrc = isSelected ? option.imageToggle : option.image;

    return (
      <label
        key={option.value}
        onClick={() => handlePayment(option.value)}
        className={`cursor-pointer flex items-center space-x-4 px-4 py-3 border rounded-xl transition-all duration-200
          ${isSelected ? 'bg-[#F0AB50] text-white border-[#F0AB50]' : 'bg-white text-[#DA4F46] border-[#F0AB50] hover:border-[#F0AB50]'}`}
      >
        <input
          type="radio"
          name="paymentMethod"
          value={option.value}
          checked={isSelected}
          onChange={() => setSelectedMethod(option.value)}
          className="hidden"
        />
        <img src={imgSrc} alt={option.label} className="w-8 h-8 object-contain" />
        <span className="font-medium">{option.label}</span>
      </label>
    );
  })}
</div> 

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default PaymentPage
