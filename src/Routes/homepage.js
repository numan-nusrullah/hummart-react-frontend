import React, { Component } from 'react';
import Household from './../components/MainComponents/Household/household';
import Breakfast from './../components/MainComponents/Breakfast/breakfast';
import Biscuit from '../components/MainComponents/Biscuits/biscuits.js';
import IceCream from './../components/MainComponents/More/Ice Cream/icecream';
import BabyKids from './../components/MainComponents/More/Baby Kids/babykids';
import HomeKitchen from './../components/MainComponents/More/Home Kitchen/homekitchen';
import Furnishing from './../components/MainComponents/More/Furnishing/furnishing';
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import Grocery from './../components/MainComponents/Grocery/grocery';
import More from './../components/MainComponents/More/more';
import Fruit from '../components/MainComponents/vegetable&Fruits/fruits';
import Navebar from '../LogSystemNavbar/navebar1';
import Login from '../LogSystemNavbar/signin/login';
import Maincomponent from '../components/MainComponents/main Component/mainComponent';
import SignUp from '../LogSystemNavbar/signup/signup';
import OrdersNavebar from '../LogOutSysytemNav/navebar1';
import AddToCarts from './../components/AddToCart/AddToCart';
import {addUser} from '../actions/users';
import { connect } from 'react-redux';
// import Footer from '../Footer/footer';
import {setUsers} from '../actions/data';
import ProductDetails from '../ProductDetails/productDetails';
import AdminPanal from '../AdminPanal/adminPanal';
import AboutUs from '../Footer/FooterLinks/AboutUs';
import Career from '../Footer/FooterLinks/career';
import PrivecyPolicy from '../Footer/FooterLinks/Policy';
import SellOnHummart from '../Footer/FooterLinks/SellOnHummart';
import TermsCondition from '../Footer//FooterLinks/TermsCondition';
import FAQS from '../Footer/FooterLinks/FAQS';
import HowToOrders from '../Footer/FooterLinks/HowToOrder';
import HowToPay from '../Footer/FooterLinks/HowToPay';
import Delivery from '../Footer//FooterLinks/Delivery';
import {URL} from '../URL';

class Routes extends Component {
    constructor(props) {
        super(props);
        var user=JSON.parse(localStorage.getItem('user'));
        console.log(user);
        if(user!==null){
        this.props.dispatch(addUser(user));}

        fetch(URL+'getAllProducts',{method:'GET'})
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      this.props.dispatch(setUsers(json.data))
    })
    .catch((error) => console.log(error))

    }
    render(){
      let email=this.props.data || [];
    const {user}=this.props
    console.log(user);
    return (
        <div>
        <BrowserRouter>
        
            <div id='main'>
            { user.length!==0&&<OrdersNavebar />}
                  {user.length===0&&<Navebar/>}
          <Switch>
             <Route exact path='/' component={Maincomponent}/>
              {user.length===0&& <Route  path='/login' component={Login}/>}
             { user.length===0&& <Route  path='/register' component={SignUp}/>}
             { user.length!==0&& <Route  path='/orders' component={AddToCarts}/>}
             <Route path='/adminpanal' component={AdminPanal}/>

             <Route path='/fruitsVegetables' component={Fruit}/>
             <Route path='/grocery' component={Grocery}/>
             <Route path='/household' component={Household}/>
             <Route path='/breakfast' component={Breakfast}/>
             <Route path='/biscuits' component={Biscuit}/>
             <Route path='/more' component={More}/>
             <Route path='/icecream' component={IceCream}/>
             <Route path='/babykids' component={BabyKids}/>
             <Route path='/homekitchen' component={HomeKitchen}/>
             <Route path='/furnishing' component={Furnishing}/>
             <Route path='/productDetails/:id' component={ProductDetails}/>
             <Route path='/aboutUs' component={AboutUs}/>
             <Route path='/career' component={Career}/>
             <Route path='/policy' component={PrivecyPolicy}/>
             <Route path='/sellOnHammart' component={SellOnHummart}/>
             <Route path='/terms' component={TermsCondition}/>
             <Route path='/faqs' component={FAQS}/>
             <Route path='/howToOrder' component={HowToOrders}/>
             <Route path='/howToPay' component={HowToPay}/>
             <Route path='/delivery' component={Delivery}/>
             
             
             </Switch>
             </div>
         </BrowserRouter>
         </div>
         
    );
    }
}
const mapStateToProps = (store) => {
    return {
      user: store.user.find(data=>data._id!=='')||[]
    //   data: store.user.find(data=>data._id!=='')
    };
  };
export default connect(mapStateToProps)(Routes);