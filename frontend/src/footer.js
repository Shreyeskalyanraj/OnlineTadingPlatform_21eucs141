import React from 'react';
import './footer.css';

const Footer=()=>{
    return(
        <div className='footer'>
            <div className=' sb_footer section_padding'>
                <div className='footer_links'>
                    <div footer='footer_linksdiv'>
                        <img style={{width:100}}  src='fin2.jpg'></img>
                        <p>
                            @{new Date().getFullYear()} Cryptic. All rights reserved.
                        </p>
                        <p>All rights reserved</p>
                    </div>
                    <div className='footer_linksdiv'>
                        <h3 style={{color: "black"}}>Company</h3>
                        <p>About</p>
                        <p>Products</p>
                        <p>Pricing</p>
                        <p>Referral programme</p>
                        <p>Careers</p>
                        <p>Press & media</p>
                    </div>
                    <div className='footer_linksdiv'>
                        <h3 style={{color: "black"}}>Support</h3>
                        <p>Contact ust</p>
                        <p>Support portal</p>
                        <p>Z-Connect blog</p>
                        <p>List of charges</p>
                        <p>Market overview</p>
                    </div>
                </div>
                <hr></hr>
                <div className='footer_below'>
                    <div className='footer_below_links'>
                        <div>
                            <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p><br></br>
                            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p> <br></br>
                            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p><br></br>
                            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services,</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;