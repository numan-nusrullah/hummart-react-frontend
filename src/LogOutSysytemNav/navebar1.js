import React, { Component } from 'react';
import Mainnavebar from './mainNavebar';
import './css/firstnav.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/SearchFilter';
import { removeUser } from '../actions/users';
import {addUser} from '../actions/users';
import searchProducts from '../selectors/searchFilter';
import {URL} from '../URL';
class OrdersNavebar extends Component  {
  constructor(props) {
    super(props);
    this.state = { 
      error :''
    }
  }
  onLogout=(e)=>{
    console.log(e);
    fetch(URL+'logout')
    .then((res) => res.text())
    .then((message) =>{
    })
    .catch((error) => console.log(error))
    this.props.removeUser(this.props.data.id)
    localStorage.removeItem('user')
    window.location.reload();
    console.log(this.props.history);
  }
  onTextChange = (e) => {
    e.preventDefault();
    this.props.setTextFilter(e.target.value);
  };
  onErrorShow =()=> {
    this.setState({error:''})
 
 };
 onOrder =(product,user) => {
  if(user){
      var options={
          method:'POST',
          body:JSON.stringify({product:product,user:user}),
          headers:{
              'Content-Type' : 'application/json'
          }
      }
      fetch(URL+'addCart',options)
      .then((res)=>res.json())
      .then((json)=>{
          fetch(URL+'cart',options)
          .then((res)=>res.json())
          .then((message)=>{
          localStorage.setItem('user',JSON.stringify(message.data))
          var user = JSON.parse(localStorage.getItem('user'));
          this.state.array=[];
              this.props.dispatch(addUser(user));
      })})
      .catch((error)=> console.log(error))
  }else{
     this.setState({error:'Please SignIn First For Add To Cart'})
  }
  
}
  render(){
    let {error} =this.state;
    let {user} = this.props;
    const {fullName,cart,email}=this.props.data
    return (
        <div>
        <div>
         <div className='firstnav'>
              <marquee scrollamount='10'> <p>Delivering Online Pakistan</p></marquee>
         </div>
          <div id='mainSearchBoxdiv' className='container navbar-expand-md'>
           <div  className='row  '>
           <div className="col-6">
           <form className="navbar-form" onSubmit={this.onTextChange} role="search">
             <div className="input-group add-on">
               <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"  value={this.props.filters.text}
                 onChange={this.onTextChange}/> 
               <div className="input-group-btn">
                 <button id='searchbtn' className="btn btn-default" disabled><i className="fa fa-search"></i></button>
               </div>
             </div>
           </form>
           </div>
           <div id='login' className='col-4 mt-2 '>
           
          <div class="dropdown ml-4">
         <button type="button" class="btn btn-warning dropdown-toggle bg-transparent " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {fullName}
         </button>
         <div class="dropdown-menu">
         <Link class="dropdown-item" to='/orders'>Your Orders<span class="badge badge-dark ml-5">{cart.length}</span></Link>
         <div class="dropdown-divider"></div>
         <button type="button" onClick={this.onLogout} class="btn btn-outline-dark dropdown-item">Log Out</button>

        </div>
         </div>
           </div>

           <div id='login' className='col-1 mt-2 collapse navbar-collapse mr-5'>
           <Link class="dropdown-item" to='/orders'>
           <i class="fas fa-shopping-cart fa-2x"></i>
           <span class="badge badge-dark bg-green">{cart.length}</span>
           </Link>
           </div>
           </div>
          </div>
          <Mainnavebar email={email} />
          
         </div>
         {   this.props.select.length !== 0 ? 
             <div className='container'>
             <h3 className='topHeading'> Search Result </h3> 
          {error !== '' && <div class="alert alert-warning alert-dismissible fade show" role="alert">
             <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
           </button>
          </div>}
             <span className='span'><i class="fas fa-home"></i>     <i class="fas fa-angle-right"></i> Backery  </span>
     
             <div className='row'>  
             {
                 this.props.select.map((data)=>
                 <div className='col-6 col-md-3 allProducts'>
                 <Link className='nav-link' to={`/productDetails/${data._id}`}>
              <div className='card mycard' >
              <img className='image' src={`${URL}${data.image}`} alt='Not Found' />
              <h5>{data.name}</h5> 
              <p className='price'>Rs : {data.price}</p>
              <p className='quantity'>{data.quantity}</p>
              <p className='description'>{data.description}</p>
              <p>
              <button type="button" class="btn btn-outline-secondary" onClick={this.onOrder.bind(this,data._id,user._id)}>Add To Cart</button>
              </p>   
              </div>
              </Link>
              </div>
                 )
             }
             </div>
             
             </div>  
          : this.props.filters.text !== '' && 
          <div className='container'>
          <h2>Search </h2>
          <span className='span'><i class="fas fa-home"></i>  <i class="fas fa-angle-right"></i> Search Result  </span>
           <h4>No Such Item Found : Please Again Search With Correct Letters</h4>
          
          </div>
          }

         </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    data: store.user.find(data=>data._id!==''),
    filters: store.SearchFilter,
    select : searchProducts(store.product,store.SearchFilter),
    user : store.user || [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  removeUser: (id) => dispatch(removeUser (id)),
});


export default connect(mapStateToProps,mapDispatchToProps)(OrdersNavebar);
