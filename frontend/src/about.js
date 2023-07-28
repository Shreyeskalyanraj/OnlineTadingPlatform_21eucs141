  
// import * as React from 'react';
// // import './vedu.css;
// import ResponsiveAppBar from './nav';
// import Button from '@mui/material/Button';
// import LensIcon from '@mui/icons-material/Lens';
// import Footer from './footer';
// import { Link } from 'react-router-dom';
// // import { useNavigate} from 'react-router-dom';
// // import { useSelector,useDispatch } from 'react-redux';
// import './about.css';



// // function About() {
// //     const navigate=useNavigate();
// //     const dispatch = useDispatch();
// //   const username = useSelector((state) => state.username);
// //   const handlechange = (e) => {
// //     dispatch({ type: "SET_USERNAME", payload: e.target.value });
// //   }
// function About() {
//     return (
//         //<div style={{backgroundImage:"url(OIP.jpg)", height:"100vh"}}>
//         <div >
//             <ResponsiveAppBar />
//             <div>
//             <title>About Us</title>
//             <header class="header" id="header">
//             <nav class="nav container">
            
            
//             <div class="nav__dark">
            
//             <span class="change-theme-name"></span>
//             <i class="ri-moon-line change-theme" id="theme-button"></i>
//             </div>

//                         <i class="ri-close-line nav__close" id="nav-close"></i>


//                         <div class="nav__toggle" id="nav-toggle">
//                         <i class="ri-function-line"></i>
//                         </div>
//                         </nav>
//                         </header>
//                         <section class="home" id="home">
//                         <img src="assets/img/home1.jpg" alt="" class="home__img" />
                       

//                     <div className="cc">
//                         <div style={{ width: 350, marginLeft: 550, marginTop: 20 ,marginRight:400}}>
                            
//                         </div>
//                         <div style={{ marginTop: 80 }}>
//                             <span className="title"><center></center></span>
//                             <center><h1 >Explore The <br />  <b>We pioneered the discount broking model in India.
//                             Now, we are breaking ground with our technology.<br/></b></h1></center>
                            
//                         </div>
//                         <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between', margin:"60px"}}>
//                             <div>
                        
//                             </div>
//                             <center><div>
//                             We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

//                             Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.
                            
//                             Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                            
//                             In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                            
//                             Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                            
//                             And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
//                             </div></center>

//                         </div>
//                         <div style={{fontSize:50}}>
//                        <center><b></b></center>
//                        </div>
//                        <div style={{fontSize:35}}>
//                         <center><p>
                        
//                         </p></center>
//                         </div>
//                         <center><div className='image' >
//                         </div></center>
//                         <b><center><a  href='#' style={{fontSize:20}} class="button">Products</a></center></b>
//                         </div>
//                         <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between', margin:"60px"}}>
//                         <div className='borderra'>
//                         <img src='tz.png' className='round'></img>   
//                             </div>
//                             <div>
//                             <b>Founder</b>
//                             <p style={{marginRight:400}}>
//                             Shreyes Kalyan
//                             </p>
//                             </div>
                            
//                             </div>
//                             <div>
//                             <center><b style={{fontSize:50}}>Mobile Trading</b></center>
//                             <center><p>In this fast-paced world, we understand the importance of being connected at all times. Our mobile trading app allows users to stay updated and execute trades on the go, ensuring that opportunities are never missed.

//                             Risk Warning:
//                             While trading can offer significant profit opportunities, it also involves a level of risk. It is crucial to understand the risks involved and only trade with funds you can afford to lose. We strongly recommend users to educate themselves about trading and exercise caution while making investment decisions.
                            
//                             Start Your Trading Journey Today:
//                             Join us on [Trading Platform Name] and embark on your trading journey. Whether you're a novice or an experienced trader, we provide the tools and resources you need to navigate the financial markets with confidence.</p></center>
                                                                            
//                                 </div>
                      
//                       </section>
//                       </div>
//                       <div>
//                       <br>
//                       </br>
//                          <Footer/>
//                       </div>
//                       </div>
//     );
// }

// export default About;
import React from 'react';
import ResponsiveAppBar from './nav';
import './about.css';
import Footer from './footer';

const AboutPage = () => {
  return (

    <div className="about-page">
    <ResponsiveAppBar />
      
        <h1>About Us</h1>
      
      <main>
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission is to democratize financial trading by providing a platform that caters to both beginners and experienced traders. We strive to deliver a seamless and transparent trading experience that enables our users to make informed decisions and achieve their financial goals.</p>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <p>Our platform boasts an intuitive and easy-to-navigate interface designed to accommodate traders of all skill levels. Whether you are a seasoned trader or a beginner, you'll find our platform's layout and tools accessible and straightforward.</p>
        </section>

        <section className="about-section">
          <h2>Security and Reliability</h2>
          <p>Information about the security measures you implement.</p>
        </section>

        <section className="about-section">
          <h2>Education and Support</h2>
          <div>
      <p>
        Education and support are essential aspects of any trading platform or financial service. They play a crucial role in empowering users with the knowledge and tools they need to make informed decisions, understand the market dynamics, and manage their investments effectively.
      </p>
      <h2>Education:</h2>
      <p>
        Education in the context of a trading platform refers to providing users with resources and information to enhance their understanding of various financial instruments, investment strategies, and market trends.
      </p>
      <ul>
        <li>
          Learning Resources: Trading platforms often provide educational materials such as articles, tutorials, videos, and webinars covering topics like fundamental analysis, technical analysis, risk management, and investment strategies.
        </li>
        <li>
          Investment Insights: Users may have access to market research, expert analysis, and investment recommendations to help them make well-informed decisions.
        </li>
        <li>
          Virtual Trading: Some platforms offer virtual or demo trading accounts where users can practice trading with virtual money, allowing them to gain experience without risking real funds.
        </li>
        <li>
          Investment Courses: Advanced platforms may offer comprehensive courses or certifications on various financial topics to deepen users' knowledge and expertise.
        </li>
      </ul>
      <h2>Support:</h2>
      <p>
        Support services are designed to assist users in resolving issues, answering queries, and providing assistance whenever needed.
      </p>
      <ul>
        <li>
          Customer Support: A responsive customer support team is crucial to address user inquiries, technical issues, and account-related matters promptly.
        </li>
        <li>
          Help Center: A comprehensive help center with frequently asked questions (FAQs) and guides can assist users in finding quick answers to common queries.
        </li>
        <li>
          Live Chat: Some platforms offer live chat support for real-time assistance from customer support representatives.
        </li>
        <li>
          Email and Phone Support: Users can reach out to support teams via email or phone for more personalized assistance.
        </li>
      </ul>
    </div>
         <p>Details about educational resources and customer support.</p>
         </section>

        {/* Image Section */}
        <section className="about-section">
          <h2>Our Team</h2>
          <img
            src="about.jpg"
            alt="Our Team"
            style={{ width: '100%', maxWidth: '500px', display: 'block', margin: 'auto' }}
          />
          <p>Here, you can add some information about your team or any other relevant content.</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Trading Platform. All rights reserved.</p>
      </footer>
      <Footer/>
    </div>
  );
};

export default AboutPage;
