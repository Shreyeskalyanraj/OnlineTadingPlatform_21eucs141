import * as React from 'react';
import ResponsiveAppBar from './nav';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './aroah.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Aroah () {
    return(
        <div>
        <ResponsiveAppBar/>

        <div >
        <img  style={{width:300 ,marginTop:20,marginLeft:20}} src="boat.jpg"/>
                </div>

                <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Item><b>IPO date:</b>
                    <br></br>
                    To be announced</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item><b>Issue size:</b>
                    <br></br>
                    To be announced</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item><b>Listing at:</b>
                    <br>
                    </br>
                    To be announced</Item>
                  </Grid>
                </Grid>
              </Box>
              
              <diV style={{marginTop:10}}>
            
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Item><b>Retail quota:</b>
                    <br></br>
                    To be announced</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item><b>IPO price:</b>
                    <br>
                    </br>
                    To be announced</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item><b>inimum lot size:</b>
                    <br></br>
                    To be announced</Item>
                  </Grid>
                </Grid>
                </Box>
                </diV>

                <div style={{marginTop:20}}>
                <b>
                <h1>
                Boat Company Background
                </h1>
                </b>
                <p>
                Imagine Marketing (boAt) is a digital-first consumer products company and is one of the largest Indian digital-first brands in terms of revenue from operations for the financial year 2021 (Source: RedSeer Report). The company has an attractive offering of wide-ranging, high-quality and aspirational lifestyle-focused consumer products at accessible price points, under its brands.

Show Less
Founded in 2013 and led by its flagship brand “boAt” launched in 2014, the company has established leading market positions in volume and value terms in India across multiple, high-growth consumer categories such as audio and smartwatch as of September 30, 2021 (Source: RedSeer Report).

The company seek to identify fast-growing, lifestyle-oriented product categories with high consumer engagement and large market opportunities and disrupt the incumbent industry landscape. Its portfolio includes products under its flagship “boAt” brand, as well as under other brands such as “RedGear” - its value-oriented gaming accessories brand; “TAGG” - its premium audio and wearables brand; “Misfit” - its personal care and grooming sub-brand; and “DEFY” - its value-oriented audio brand.

While it initially started its journey with hearables products within the audio category, Imagine Marketing offer products across a variety of price points and customer segments across multiple product categories, which comprise (i) audio (wired headphones and earphones, wireless headphones and earphones (neckbands), true wireless stereo (TWS), Bluetooth speakers and home theatre systems and sound bars), (ii) wearables (smartwatches), (iii) gaming accessories (wired and wireless headsets, mouse and keyboards), (iv) personal care appliances (trimmers and grooming kits) and (v) mobile accessories (chargers, cables, power banks and other accessories).

As of September 30, 2021, for the second quarter of Financial Year 2022, Imagine Marketing ranked #1 in India among the wireless hearables brands by value and volume and #2 among smartwatch brands in India in terms of volume (Source: RedSeer Report). Moreover, its market share in both wireless hearables and smartwatch segments has consistently increased over time, and for the quarter ended September 30, 2021, it had a market share of 48% and 23% in terms of volume, and 30% and 13% by value, in the branded wireless hearables and smartwatch markets, respectively (Source: RedSeer Report)
                </p>
                </div>

               <div>
               <h1>
               <b>
               Boat Revenue from operations
               </b>
               </h1>
               </div>
                <br>
                </br>
                <div style={{marginLeft:400}}>
                <img src='bar1.jpg'/>
                </div>
                <div>
                <h1>
                <b>
                Net Profit/ Loss
                </b>
                </h1>
                </div>
                <div style={{marginLeft:400}}>
                <img src='bar2.jpg'/>
                </div>

                <div>
                <h1>
                <b>
                boAt IPO SWOT Analysis:
                </b>
                </h1>
                <p>
                Strengths:

One of the largest Indian digital-first brands with leading market positions across multiple fast-growing product categories.
Its flagship brand “boAt” is a consumer brand with strong market positioning.
Its digital-first platform capabilities are targeted to enable growth and build a presence across multiple consumer categories.
Professional, founder-driven management team with deep industry expertise and track record, and an experienced consumer products CEO.
Weaknesses:

Heavily reliant on its relationships with certain online marketplaces and offline distributors.
Pricing pressure from customers, online marketplaces, or distributors can affect company’s gross margins.
Reliance on a number of third-party contract manufacturers and component suppliers for production of its products.
For overseas procurement, the company is subject to geographical concentration and foreign currency exchange risks
Opportunities:

Identifying fast-growing, lifestyle-oriented product categories with high consumer engagement and large market opportunities to disrupt the incumbent industry landscape.
Entering new geographies/markets can be a compelling growth vector and can further contribute towards the growth of the business.
Expand its presence into other adjacent product categories either via its existing brands or brand extensions, by creating new brands or through acquisitions.
Increasing trend of customer spend on smart hearables and wearables.
Threats:

The company operates in an industry with several competitors, including large and established ones, and it may fail to compete successfully against existing or new competitors, which may reduce the demand for its products and services. This may lead to reduced prices, operating margins, profits and further result in loss of market share across product categories.
The company may face competition in other countries from companies that have more experience with operations in such countries.
                </p>
                </div>
                

        </div>
    );
}
export default Aroah;