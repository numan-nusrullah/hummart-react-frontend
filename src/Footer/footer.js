import React, { Component } from 'react';
import './css/footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container-fluid footer'>
                 <div id='fruitandveg' className='row footerRow'>
                  <div className='col footerColm1'>
                      <h4 className='footerHeadings'>Hum Mart</h4>
                  </div>
                  <div className='col '>
                   <Link className='nav-link' to='/aboutUs'>About Us</Link>   
                  </div>
                  <div className='col '>
                   <Link  className='nav-link' to='/career'>Career</Link>
                  </div>
                  <div className='col '>
                   <Link  className='nav-link' to='/sellOnHammart'>Sell on Hummart</Link>
                  </div>
                  <div className='col '>
                   <Link className='nav-link' to='/terms'>Terms & Condtions</Link>
                  </div>
                  <div className='col '>
                 <Link className='nav-link' to='/policy'>Privecy Policy</Link>
                  </div>
                  
                 </div>

                 <div className='row footerRow'>
                  <div className='col'>
                    <h4 className='footerHeadings'>Help </h4>
                  </div>
                  <div className='col'>
                    <Link className='nav-link' to='/faqs'>FAQS</Link>
                  </div>
                  <div className='col'>
                    <Link className='nav-link' to='/howToOrder'>How To Order</Link>
                  </div>
                  <div className='col'>
                    <Link className='nav-link' to='/howToPay'>How To Pay</Link>
                  </div>
                  <div className='col'>
                    <Link className='nav-link' to='/delivery'>Delivery</Link>
                  </div>

                 </div>

                 <div className='row footerRow'>
                  <div className='col'>
                      <h4 className='footerHeadings'>Contact Us Info</h4>
                  </div>
                  <div className='col'>
                  
                      <h6 className='footerHeadings'>Phone</h6>
                      <p className='footerpara'>(+92)111 222 333</p>
                  </div>
                  <div className='col'>
                      <h6 className='footerHeadings'>Email</h6>
                      <p className='footerpara'>Hummart@gmail.com</p>
                  </div>
                  <div className='col'>
                      <h6 className='footerHeadings'>Working Days / Hours</h6>
                      <p className='footerpara'>Mon - Sun / 9:00Am to 9:00Pm</p>
                  </div>
                 </div>
                </div>
         );
    }
}
 
export default Footer;