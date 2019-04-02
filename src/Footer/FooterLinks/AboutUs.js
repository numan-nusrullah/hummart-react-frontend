import React from 'react';
import HumMartTeamPic from './HumMart_Team.jpg';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className='container'>
           <div className='row'>
             <div className='col-12 '>
                <img className='hummartTeamPic' src={HumMartTeamPic} alt='3D Image' />
             </div>
            </div> 

            <div className='row'>
             <div className='col-12'>
               <h3>About Hum-Mart</h3>
               <p>
               Hum Mart (Private) Limited is a subsidiary of Hum Network Limited. HumMart is a grocery products web store which aims at saving users from the hassle of going out and buying every day necessities. The online store brings to you different categories such as biscuits and chocolates, breakfast & dairy, grocery and Staples, beverages, baby & kids and Pet Care. You can choose from thousands of products. HumMart is currently delivering in Karachi only.

               HumMart aims to evolve the grocery service industry in Pakistan and we aim to target the people who lead a busy lifestyle to shift them from the traditional method of grocery procurement to a more advance online mode. We will ensure a hassle-free shopping experience for our customers, so that they can spend valuable time and energy somewhere else.

               HumMart aims to be a very customer centric organization. We intend to focus on complete customer journey of our customers, starting with ordering quality products at competitive pricing, on time delivery and hassle-free return policy.

               </p>
             </div>
            </div> 
        </div>
    );
}

export default AboutUs;
