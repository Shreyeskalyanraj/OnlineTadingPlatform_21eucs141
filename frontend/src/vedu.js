
// import * as React from 'react';
// // import './vedu.css;
// import ResponsiveAppBar from './nav';
// import Button from '@mui/material/Button';
// import LensIcon from '@mui/icons-material/Lens';
// import Footer from './footer';
// import { Link } from 'react-router-dom';
// import { useNavigate} from 'react-router-dom';
// import { useSelector,useDispatch } from 'react-redux';



// function Vedu() {
//     const navigate=useNavigate();
//     const dispatch = useDispatch();
//   const username = useSelector((state) => state.username);
//   const handlechange = (e) => {
//     dispatch({ type: "SET_USERNAME", payload: e.target.value });
//   }
//     return (
//         //<div style={{backgroundImage:"url(OIP.jpg)", height:"100vh"}}>
//         <div >
//             <ResponsiveAppBar />
//             <div>
//             <title>TradeZone</title>
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
//                         <p>Bonjour! {username}</p>

//                     <div className="cc">
//                         <div style={{ width: 350, marginLeft: 550, marginTop: 20 ,marginRight:400}}>
//                             <img id='g' src="broder.jpg" />
//                         </div>
//                         <div style={{ marginTop: 80 }}>
//                             <span className="title"><center>Best place for Trading</center></span>
//                             <center><h1 >Explore The <br />  <b>Online platform to invest in stocks, derivatives, mutual funds, and more<br /></b></h1></center>
//                             <center><Link href="#" class="button" to='/var'>Explore</Link></center>
//                             <center><Button variant="contained" style={{ marginTop: 20 }}>Signup now</Button></center>



//                         </div>
//                         <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between', margin:"60px"}}>
//                             <div>
//                                 <img src='trade3.jpg' />
//                             </div>
//                             <div style={{marginLeft:250}}>
//                                 <h1>Largest stock broker in India</h1>
//                                 <p>1+ Crore Zerodha clients contribute to over 15% of all retail order</p>
//                                 <p>volumes in India daily by trading and investing in:</p>
//                                 <li>
//                                  Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.
//                                 </li>
//                                 <li>
//                                  Pay 20% upfront margin of the transaction value to trade in cash market segment.
//                                 </li>
//                                 <li>
//                                  Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from time to time in this regard.
//                                 </li>
//                             </div>

//                         </div>
//                         <div style={{fontSize:50}}>
//                        <center><b>TradeZone</b></center>
//                        </div>
//                        <div style={{fontSize:35}}>
//                         <center><p>
//                         A whole ecosystem of modern investment apps
//                             tailored to specific needs, built from the ground up
//                         </p></center>
//                        </div>
//                        <center><div className='image' >
//                       <center><img  src='ecosystem.png'></img></center>
//                       </div></center>
//                      <b><center><a  href='#' style={{fontSize:20}} class="button">Products</a></center></b>
//                      </div>
//                         <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between', margin:"60px"}}>
//                             <div>
//                                 <img src='var.jpg' />
//                             </div>
//                             <div style={{marginLeft:250}}>
//                                 <h1>Free and open market education</h1>
//                                 <p style={{fontSize:25 ,marginTop:20}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
//                                 <b><a href='#' style={{fontSize:20}} class='bb'>Varsity</a> </b>
//                                 <p style={{fontSize:25 ,marginTop:20}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
//                                 <b><a href='#' style={{fontSize:20}} class='bb'>Trading Q&A</a> </b>
//                             </div>
                            
//                             </div>
//                             <div style={{fontSize:35}}>
//                             <center><b>Double your Money</b></center>
//                             <center><p>The best place to invest your money where you could grow your money in large number</p></center>
                                                                            
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
// export default Vedu;
// Vedu.js

import * as React from 'react';
import ResponsiveAppBar from './nav';
import Button from '@mui/material/Button';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './vedu.css';
import './feedback.js';



function Vedu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);

  // const{user}=useSelector((state)=>state.master);
  const handleChange = (e) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
  }

  return (
    <div data-aos='fade-up' >
      <ResponsiveAppBar />
      <section className="home" id="home">
        <img src="assets/img/home1.jpg" alt="" className="home__img" />
        <p>Bonjour! {username}</p>

        <div className="cc">
          <div className="image-container">
            <img id='g' src="broder.jpg" alt="Banner" />
          </div>
          <div className="home__content">
            <span className="title"><center>Best place for Trading</center></span>
            <center>
              <h1>Explore The<br /><b>Online platform to invest in stocks, derivatives, mutual funds, and more</b></h1>
            </center>
            <center><Link to='/feedback' className="button">Explore</Link></center>
          </div>
       <div>
       <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between', margin:"60px"}}>
                              <div>
                                         <img src='trade3.jpg' style={{width:400,height:250}}/>
                                     </div>
                                     <div style={{marginLeft:250}}>
                                         <h1>Largest stock broker in India</h1>
                                         <p>1+ Crore Zerodha clients contribute to over 15% of all retail order</p>
                                         <p>volumes in India daily by trading and investing in:</p>
                                         <li>
                                          Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.
                                         </li>
                                         <li>
                                          Pay 20% upfront margin of the transaction value to trade in cash market segment.
                                         </li>
                                         <li>
                                          Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from time to time in this regard.
                                         </li>
                                     </div>

                                 </div>
                                 <div style={{fontSize:50}}>
                                <center><b>TradeZone</b></center>
                                </div>
                                <div style={{fontSize:35}}>
                                 <center><p>
                                 A whole ecosystem of modern investment apps
                                     tailored to specific needs, built from the ground up
                                 </p></center>
                                </div>
                                <center><div className='image' >
                               <center><img  style={{width:800,height:150}} src='ecosystem.png'></img></center>
                               </div></center>
                              <b><center><Link to='/prod'><a  href='#' style={{fontSize:20}} class="button">Products</a></Link></center></b>
                              </div>
                                 <div style={{display:"flex", flexDirection:"row", justifyContent:'space-between', margin:"60px"}}>
                                     <div>
                                         <img src='var.jpg' />
                                     </div>
                                     <div style={{marginLeft:250}}>
                                         <h1>Free and open market education</h1>
                                         <p style={{fontSize:25 ,marginTop:20}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                                         <p style={{fontSize:25 ,marginTop:20}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                                         <b><a href='#' style={{fontSize:20}} class='bb'>Trading Q&A</a> </b>
                                     </div>
                              
                                     </div>
                                     <div style={{fontSize:35}}>
                               <center><b>Double your Money</b></center>
                                <center><p>The best place to invest your money where you could grow your money in large number</p></center>
                                                                                    
                                       </div>
                                       </div>
                                       
                              
       
      </section>
      <Footer />
    </div>
  );
}

export default Vedu;
