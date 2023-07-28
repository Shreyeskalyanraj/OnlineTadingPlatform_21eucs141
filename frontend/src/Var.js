import React from 'react';
import './Var.css';
//import { Link } from '@mui/material';
import { Link } from 'react-router-dom';


const Var = () => {
  const pets = [
    {
      id: 1,
      Stock_name: 'boAt IPO   ',
      Issue_size: '2000cr',
      description: 'Imagine Marketing (boAt) is a digital-first consumer products company and one of the largest Indian digital-first brands in terms of revenue from operations for the financial year 2021.',
      image: 'boat.jpg',
      href:'/boat'
    },
    {
      id: 2,
      Stock_name: 'Droom IPO',
        Issue_size: '3000cr',
      description: 'Droom is a technology and data science company that facilitates automobile buying and selling online through a combination of its e-commerce platform along with a technology-driven vertically integrated proprietary ecosystem of products and services for the automobile industry.',
      image:'droom.jpg',
      href:'/droom'
    },
    {
      id: 3,
      Stock_name: 'MobiKwik IPO',
      Issue_size: 'N/A',
      description: 'One MobiKwik Systems Limited commenced operations in 2009 with MobiKwik Wallet allowing users to load money into a mobile wallet and make payments with a single click. It is one of the largest mobile wallets and Buy Now Pay Later (BNPL) players in India',
      image: 'mob.jpg',
      href:'/mob'
    },
    {
      id: 4,
      Stock_name: 'ESAF Small Finance Bank',
      Issue_size: '997cr',
      description: 'ESAF Small Finance Bank Limited is one of the leading small finance banks (SFB) in India in terms of client base size, the yield on advances, net interest margin, assets under management CAGR, total deposit CAGR, loan portfolio concentration in rural ',
      image: 'bank.png',
      href:'/bank'
    },
    {
      id: 5,
      Stock_name: 'Arohan Financial ',
      Issue_size: 'N/A',
      description: 'Arohan Financial Services Limited is a leading NBFC-MFI (micro-finance institution) with operations in financially under-penetrated low income states of India.',
      image: 'aro.jpg',
      href:'/option'
    },
    {
      id: 6,
      Stock_name: 'Studds Accessories',
      Issue_size: 'N/A',
      description: 'Studds Accessories Limited is one of the leading manufacturers of two-wheeler helmets in the world. Its range of products also includes two-wheeler lifestyle accessories such as two-wheeler luggage, gloves, helmet security guards, rain suits, and eyewear.',
      image: 'stud.jpg',
      href:'/option'
    },
    
    
    
    
  ];

  return (
    <div>
      <h1>Stocks</h1>
      <div className="pet-list">
        {pets.map(pet => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.Stock_name} className="pet-image" />
            <h2>{pet.Stock_name}</h2>
            <p>Issue_size: {pet.Issue_size}</p>
            <p>Description: {pet.description}</p>
            <Link to={pet.href}><button>Information</button></Link>
            </div>
            ))}   
      </div>
    </div>
  );
};

export default Var;