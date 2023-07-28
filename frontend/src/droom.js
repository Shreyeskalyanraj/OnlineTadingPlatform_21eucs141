import React from 'react';
import './droom.css';

const Droom = () => {
  return (
    <div className="trading-page">
    <img src="droom." alt="Droom Logo" className="logo" />
      <h1 className="heading">Droom Trading Platform</h1>
     
      <p className="welcome">Welcome to Droom's Trading Platform! We offer a seamless and secure experience for automobile enthusiasts to buy and sell vehicles, spare parts, and related services. Whether you're looking for a new car, a vintage motorcycle, or any other type of vehicle, Droom has got you covered. Join our community of automobile lovers and start trading today!</p>
      
      <div className="section">
        <h2>Vehicle Listings</h2>
        <p>Our trading platform features an extensive collection of vehicles from various categories, ensuring that you find the perfect ride to suit your needs. Browse through our categorized vehicle listings, including:</p>
        <ul>
          <li>Cars: Explore a wide range of new and used cars from top manufacturers.</li>
          <li>Motorcycles: Find your dream motorcycle, whether it's a cruiser, sports bike, or adventure tourer.</li>
          <li>Scooters: Discover stylish and efficient scooters for convenient city commutes.</li>
          <li>Bicycles: Choose from a variety of bicycles, including mountain bikes, city bikes, and more.</li>
          <li>Commercial Vehicles: Find trucks, buses, and vans for your business needs.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Vehicle Accessories</h2>
        <p>Enhance your driving experience with our selection of premium vehicle accessories. From performance upgrades to safety gear, Droom offers everything you need to customize your ride. Explore our accessory section to find:</p>
        <ul>
          <li>Car Audio Systems: Enjoy high-quality sound with the latest car audio setups.</li>
          <li>GPS Navigation: Stay on track with advanced GPS navigation devices.</li>
          <li>Safety Gear: Ensure safety with airbags, helmets, and other protective equipment.</li>
          <li>Alloy Wheels: Add style to your vehicle with a range of alloy wheel options.</li>
          <li>Car Care Products: Keep your vehicle in top condition with cleaning and maintenance products.</li>
        </ul>
      </div>

      <div className="section">
        <h2>How It Works</h2>
        <ol>
          <li>Create an Account: Sign up for a Droom account to start buying and selling vehicles and accessories.</li>
          <li>Browse Listings: Explore our extensive inventory of vehicles and accessories to find what you need.</li>
          <li>Place an Offer: When you find the perfect item, place an offer or bid to initiate the trading process.</li>
          <li>Communicate with Sellers/Buyers: Use our secure messaging system to communicate with sellers or buyers.</li>
          <li>Complete the Transaction: Finalize the transaction and arrange for delivery or pickup of the item.</li>
          <li>Rate Your Experience: Share your trading experience by leaving feedback for the seller or buyer.</li>
        </ol>
      </div>

      <div className="section">
        <h2>Vehicle Services</h2>
        <p>At Droom, we don't just provide a trading platform; we offer automobile enthusiasts a comprehensive experience. Take advantage of our vehicle services to ensure that your ride remains in top condition:</p>
        <ul>
          <li>Vehicle Inspection: Schedule a professional vehicle inspection to assess its condition.</li>
          <li>Vehicle Financing: Secure financing options to make your dream vehicle purchase a reality.</li>
          <li>Vehicle Insurance: Protect your investment with our tailored vehicle insurance plans.</li>
          <li>Vehicle Maintenance and Repair: Connect with trusted service providers for maintenance and repairs.</li>
        </ul>
      </div>

      
    </div>
  );
};

export default Droom;
