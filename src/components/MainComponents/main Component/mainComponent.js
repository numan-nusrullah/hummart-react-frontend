import React, { Component } from 'react';
import { connect } from 'react-redux';
import bankAlflah from './pics/bank-al-falah-credit-card-slider-resized.jpg';
import bundleoffer from './pics/bundle-web-slider-resized_1.jpg';
import lays from './pics/lays_near_expiry_slider.jpg';
import nedo from './pics/nedo.jpg';
import searchOrder from './pics/search-order-slider-resized.jpg';
import meat from './pics/meat.jpg';
import stationary from './pics/stationery.jpg';
import './css/main.css';
import './css/paralex.css';
import {setUsers} from '../../../actions/data';
import Footer from '../../../Footer/footer';
import searchProducts from '../../../selectors/searchFilter';
import {URL} from '../../../URL';
class Maincomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        
    }

   componentDidMount = () => {
    fetch(URL+'getAllProducts')
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      this.props.dispatch(setUsers(json.data))
    })
    .catch((error) => console.log(error))
   }

    render() { 
        return ( 
          <div className="parallax">{this.props.select.length===0&&this.props.filters.text===''&&
<div id='container' className='container'>
<div id='deliveryinfo'  className="row carousel">
<div  className="col-12 ">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bankAlflah}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bundleoffer} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={lays} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={nedo}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={searchOrder} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
  </div>
  </div>
  <div id='row2' className="row ">
  <div className="col-6 col-sm-6 col-xs-6">
  <img id='img1' src={meat}alt="not found"/>
  </div>
  <div className="col-6 col-sm-6 col-xs-6">
  <img id='img2' src={stationary}alt="not found"/>
  </div>
  </div>
  <div className='row'>
   <div id='diliveryinfo' className='col-12 col-lg-4 fasShiping'>
      <div>
    <span id='fasShiping' className="fas fa-shipping-fast"></span>
     </div>
     <div id='fasShipingContent'>
         <h5>Same/Next Day Delivery</h5>
         <p>Free delivery on all orders over Rs. 1,000 <br /><p>Rs 100 for orders below Rs 1000</p></p> 
         
     </div>
   </div>
   <div id='diliveryinfo' className='col-12 col-lg-4 fasShiping'>
     <div id='Rs'>
         <span id='rs'>Rs</span>
     </div>
     <div id='fasShipingContent'>
         <h5>Same/Next Day Delivery</h5>
         <p>You pay when rider comes at your address</p> 
         <br></br>
         
     </div>
   </div>
   <div id='diliveryinfo' className='col-12 col-lg-4 fasShiping'>
   <div>
   <span id='fasShiping' className="fas fa-phone"></span>
    </div>
     <div id='fasShipingContent'>
         <h5>Same/Next Day Delivery</h5>
         <p>Customer support from 9AM - Midnight <br /><p>(+92)305-7761561</p></p> 
         
     </div>
   </div>
  </div>

  <div id='paragraph'  className='row'>
   <div className='col-12 '>
      <h4>Online Grocery Shopping Store, Delivery In Karachi, Pakistan</h4>
     <p>
     Ever wondered of entering a grocery store and getting an overview of products sections and get to grab the required product from there? The alternate is our search bar of HumMart where you can search from a wide range of categories including grocery and staples, home furnishing, breakfast and dairy, instant foods, biscuits and snacks, beverages, household needs, personal care, home and kitchen, baby products, fruits and vegetables, ice creams and a lot more. The online shopping of grocery is a blessing to get the required products over a few clicks. We at HumMart provides our customers with the best deals to get value addition on the purchase of products available online as a bundle offer. If you are in a mood to mingle with friends but you got a grocery list in your pocket, just visit HumMart and order the grocery to get it delivered right at your home while you get yourself entertained with friends. Want to cook your favorite dish, no need to worry for the items to prepare a mouthwatering dish. HumMart offers you ample products to get the ingredients for the dish. We will provide you the products through express delivery within 2 hours. You have the independence to opt out from numerous products as HumMart focuses to bring utmost facilities through its online grocery store and adding value in life of our valued customers. You need to stay at your home, visit hummart.com through your laptop, smartphone or even from phone application.
     </p>
   </div>
  </div>
     <Footer />
  </div>}
  </div>

         );
    }
}
const mapStateToProps = (store) => {
  return {
      product:store.product || [],
      user : store.user || [],
      filters: store.SearchFilter,
      select : searchProducts(store.product,store.SearchFilter),
  };
};

export default connect(mapStateToProps)( Maincomponent);