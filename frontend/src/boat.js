// import * as React from 'react';
// import ResponsiveAppBar from './nav';
// import { Link } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import './boat.css';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function Boat () {
//     return(
//         <div>
//         <ResponsiveAppBar/>

//         <div >
//         <img  style={{width:300 ,marginTop:20,marginLeft:20}} src="boat.jpg"/>
//                 </div>

//                 <Box sx={{ flexGrow: 0 }}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={2}>
//                     <Item><b>IPO date:</b>
//                     <br></br>
//                     To be announced</Item>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Item><b>Issue size:</b>
//                     <br></br>
//                     To be announced</Item>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Item><b>Listing at:</b>
//                     <br>
//                     </br>
//                     To be announced</Item>
//                   </Grid>
//                 </Grid>
//               </Box>
              
//               <diV style={{marginTop:10}}>
            
//               <Box sx={{ flexGrow: 1 }}>
//               <Grid container spacing={3}>
//                   <Grid item xs={2}>
//                     <Item><b>Retail quota:</b>
//                     <br></br>
//                     To be announced</Item>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Item><b>IPO price:</b>
//                     <br>
//                     </br>
//                     To be announced</Item>
//                   </Grid>
//                   <Grid item xs={2}>
//                     <Item><b>inimum lot size:</b>
//                     <br></br>
//                     To be announced</Item>
//                   </Grid>
//                 </Grid>
//                 </Box>
//                 </diV>

//                 <div style={{marginTop:20}}>
//                 <b>
//                 <h1>
//                 Boat Company Background
//                 </h1>
//                 </b>
//                 <p>
//                 Imagine Marketing (boAt) is a digital-first consumer products company and is one of the largest Indian digital-first brands in terms of revenue from operations for the financial year 2021 (Source: RedSeer Report). The company has an attractive offering of wide-ranging, high-quality and aspirational lifestyle-focused consumer products at accessible price points, under its brands.

// Show Less
// Founded in 2013 and led by its flagship brand “boAt” launched in 2014, the company has established leading market positions in volume and value terms in India across multiple, high-growth consumer categories such as audio and smartwatch as of September 30, 2021 (Source: RedSeer Report).

// The company seek to identify fast-growing, lifestyle-oriented product categories with high consumer engagement and large market opportunities and disrupt the incumbent industry landscape. Its portfolio includes products under its flagship “boAt” brand, as well as under other brands such as “RedGear” - its value-oriented gaming accessories brand; “TAGG” - its premium audio and wearables brand; “Misfit” - its personal care and grooming sub-brand; and “DEFY” - its value-oriented audio brand.

// While it initially started its journey with hearables products within the audio category, Imagine Marketing offer products across a variety of price points and customer segments across multiple product categories, which comprise (i) audio (wired headphones and earphones, wireless headphones and earphones (neckbands), true wireless stereo (TWS), Bluetooth speakers and home theatre systems and sound bars), (ii) wearables (smartwatches), (iii) gaming accessories (wired and wireless headsets, mouse and keyboards), (iv) personal care appliances (trimmers and grooming kits) and (v) mobile accessories (chargers, cables, power banks and other accessories).

// As of September 30, 2021, for the second quarter of Financial Year 2022, Imagine Marketing ranked #1 in India among the wireless hearables brands by value and volume and #2 among smartwatch brands in India in terms of volume (Source: RedSeer Report). Moreover, its market share in both wireless hearables and smartwatch segments has consistently increased over time, and for the quarter ended September 30, 2021, it had a market share of 48% and 23% in terms of volume, and 30% and 13% by value, in the branded wireless hearables and smartwatch markets, respectively (Source: RedSeer Report)
//                 </p>
//                 </div>

//                <div>
//                <h1>
//                <b>
//                Boat Revenue from operations
//                </b>
//                </h1>
//                </div>
//                 <br>
//                 </br>
//                 <div style={{marginLeft:400}}>
//                 <img src='bar1.jpg'/>
//                 </div>
//                 <div>
//                 <h1>
//                 <b>
//                 Net Profit/ Loss
//                 </b>
//                 </h1>
//                 </div>
//                 <div style={{marginLeft:400}}>
//                 <img src='bar2.jpg'/>
//                 </div>

//                 <div>
//                 <h1>
//                 <b>
//                 boAt IPO SWOT Analysis:
//                 </b>
//                 </h1>
//                 <p>
//                 Strengths:

// One of the largest Indian digital-first brands with leading market positions across multiple fast-growing product categories.
// Its flagship brand “boAt” is a consumer brand with strong market positioning.
// Its digital-first platform capabilities are targeted to enable growth and build a presence across multiple consumer categories.
// Professional, founder-driven management team with deep industry expertise and track record, and an experienced consumer products CEO.
// Weaknesses:

// Heavily reliant on its relationships with certain online marketplaces and offline distributors.
// Pricing pressure from customers, online marketplaces, or distributors can affect company’s gross margins.
// Reliance on a number of third-party contract manufacturers and component suppliers for production of its products.
// For overseas procurement, the company is subject to geographical concentration and foreign currency exchange risks
// Opportunities:

// Identifying fast-growing, lifestyle-oriented product categories with high consumer engagement and large market opportunities to disrupt the incumbent industry landscape.
// Entering new geographies/markets can be a compelling growth vector and can further contribute towards the growth of the business.
// Expand its presence into other adjacent product categories either via its existing brands or brand extensions, by creating new brands or through acquisitions.
// Increasing trend of customer spend on smart hearables and wearables.
// Threats:

// The company operates in an industry with several competitors, including large and established ones, and it may fail to compete successfully against existing or new competitors, which may reduce the demand for its products and services. This may lead to reduced prices, operating margins, profits and further result in loss of market share across product categories.
// The company may face competition in other countries from companies that have more experience with operations in such countries.
//                 </p>
//                 </div>
                

//         </div>
//     );
// }
// export default Boat;

import React from 'react';
import './boat.css';

const TradingPage = () => {
  return (
    <div className='mass'>
      <h1>Boat Co. Trading Platform</h1>
      <center><img src="boat.jpg" alt="Boat Trading" style={{ maxWidth: '100%', marginBottom: '20px' }} /></center>
      <p>Welcome to Boat Co. Trading Platform! We provide a seamless and user-friendly experience for boat enthusiasts to buy and sell boats, boat accessories, and related services. Whether you're looking for a sleek yacht, a family-friendly pontoon, or any other type of watercraft, Boat Co. has got you covered. Join our community of boat lovers and start trading today!</p>
      
      <h2>Boat Listings</h2>
      <p>Our trading platform features an extensive collection of boats from various categories, ensuring that you find the perfect vessel to suit your needs. Browse through our categorized boat listings, including:</p>
      <ul>
        <li>Yachts: Luxury yachts for those seeking the ultimate maritime experience.</li>
        <li>Sailboats: Set sail with our range of sailboats, perfect for ocean adventurers.</li>
        <li>Pontoon Boats: Family-friendly and ideal for leisurely cruises on calm waters.</li>
        <li>Fishing Boats: Equip yourself with the best fishing vessels for your angling expeditions.</li>
        <li>Speed Boats: Feel the thrill of speed with our collection of high-performance speed boats.</li>
        <li>Personal Watercraft: Jet skis and other personal watercraft for individual excitement.</li>
      </ul>

      <h2>Boat Accessories</h2>
      <p>Enhance your boating experience with our selection of premium boat accessories. From navigation tools to water sports equipment, Boat Co. offers everything you need to make your time on the water unforgettable. Explore our accessory section to find:</p>
      <ul>
        <li>Life Jackets: Stay safe on the water with top-quality life jackets for all ages.</li>
        <li>GPS Navigation: Navigate with confidence using cutting-edge GPS systems.</li>
        <li>Water Sports Gear: From wakeboards to tow ropes, we have the gear for all water sports enthusiasts.</li>
        <li>Boat Covers: Protect your boat from the elements with durable boat covers.</li>
        <li>Anchors and Docking: Secure your vessel with reliable anchors and docking equipment.</li>
        <li>Boat Maintenance: Keep your boat in top shape with our maintenance products.</li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li>Create an Account: Sign up for a Boat Co. account to start buying and selling boats and accessories.</li>
        <li>Browse Listings: Explore our extensive inventory of boats and accessories to find what you need.</li>
        <li>Place an Offer: When you find the perfect item, place an offer or bid to initiate the trading process.</li>
        <li>Communicate with Sellers/Buyers: Use our secure messaging system to communicate with sellers or buyers.</li>
        <li>Complete the Transaction: Finalize the transaction and arrange for delivery or pickup of the item.</li>
        <li>Rate Your Experience: Share your trading experience by leaving feedback for the seller or buyer.</li>
        <img src='bar1.jpg'></img>
      </ol>

      <h2>Boat Services</h2>
      <p>At Boat Co., we don't just provide a trading platform; we offer boat enthusiasts a comprehensive experience. Take advantage of our boat services to ensure that your vessel remains in top condition:</p>
      <ul>
        <li>Boat Inspection: Schedule a professional boat inspection to assess the condition of your boat.</li>
        <li>Boat Financing: Secure financing options to make your dream boat purchase a reality.</li>
        <li>Boat Insurance: Protect your investment with our tailored boat insurance plans.</li>
        <li>Boat Maintenance and Repair: Connect with trusted boat service providers for maintenance and repairs.</li>
      </ul>

      <p>Join Boat Co. Trading Platform today and embark on a fantastic journey of boat trading and water adventures!</p>
    </div>
  );
};

export default TradingPage;
