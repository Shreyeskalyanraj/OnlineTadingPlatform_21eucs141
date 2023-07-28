import React from 'react';
import './mob.css';
// import mobikwikLogo from './mobikwik_logo.jpg'; // Replace 'mobikwik_logo.jpg' with the actual image file path
// import digitalWalletImage from './digital_wallet.jpg'; // Replace 'digital_wallet.jpg' with the actual image file path
// import paymentSolutionsImage from './payment_solutions.jpg'; // Replace 'payment_solutions.jpg' with the actual image file path
// import financialProductsImage from './financial_products.jpg'; // Replace 'financial_products.jpg' with the actual image file path

const MobiKwikTradeInfo = () => {
  return (
    <div className='div'>
      <h1 className='h1'>MobiKwik Trade Information</h1>
      <img src={"mob.jpg"} alt="MobiKwik Logo" className='img' />
      <p className='p'>MobiKwik was founded in 2009 by Bipin Preet Singh and Upasana Taku. It started as a mobile recharge and bill payment platform but later expanded its services to include digital wallets, online payments, and financial products.</p>
      <h2 className='h2'>Digital Wallet Services</h2>
      <p>MobiKwik offers a digital wallet that allows users to store money and make various types of transactions, such as mobile recharges, bill payments, and utility payments. Users can link their bank accounts, credit cards, or debit cards to the wallet for easy fund transfer and transactions.</p>
      <h2>Payment Solutions</h2>
      <p>MobiKwik provides payment solutions for online merchants and businesses. It allows them to integrate MobiKwik's payment gateway into their websites or apps, enabling their customers to make secure and convenient payments using the MobiKwik wallet.</p>
      <h2>Financial Products</h2>
      <p>MobiKwik has ventured into offering various financial products and services to its users. This includes personal loans, insurance products, and investment opportunities, allowing users to manage their finances and access additional financial resources.</p>
      <h2>User Base</h2>
      <p>MobiKwik has a substantial user base in India, with millions of registered users and a significant presence in the digital payments space.</p>
      <h2>Competition</h2>
      <p>In the Indian digital payments market, MobiKwik faces competition from other players like Paytm, Google Pay, PhonePe, and Amazon Pay, among others.</p>
      
    </div>
  );
};

export default MobiKwikTradeInfo;
