import React, { Component } from 'react';
import Mainnavebar from './mainNavebar';
import './css/firstnav.css';
import {setTextFilter} from '../actions/SearchFilter';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUser} from '../actions/users';
import searchProducts from '../selectors/searchFilter';
import {URL} from '../URL';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error :''
    }
}

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
onErrorShow =()=> {
   this.setState({error:''})

}
  
  onTextChange = (e) => {
    e.preventDefault();
    this.props.setTextFilter(e.target.value);
  };

  render() { 
    let {error} =this.state;
    let {user} = this.props;
    return (
    
        <div>
         <div className='firstnav'>
              <marquee scrollamount='10'> <p>Delivering Online Pakistan</p></marquee>
         </div>
          <div id='mainSearchBoxdiv' className='container'>
           <div  className='row  '>
          
           <div className="col-6 col-md-6 searchbox">
           <form className="navbar-form" onSubmit={this.onTextChange} role="search">
             <div className="input-group add-on">
               <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" value={this.props.filters.text}
                 onChange={this.onTextChange}/> 
               <div className="input-group-btn">
                 <button id='searchbtn' className="btn btn-default" disabled><i className="fa fa-search"></i></button>
               </div>
             </div>
           </form>
           </div>
           <div  className='col-2'>
           <Link id='login' className="nav-link" to='/login'>Login</Link> 
           </div>
           
           <div  className='col-3'>
            <Link id='signup' className="nav-link" to='/register'>SignUp</Link>
           </div>
           </div>
          </div>
          <div >
          <Mainnavebar />
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
             <span className='span'><i class="fas fa-home"></i>     <i class="fas fa-angle-right"></i> Search</span>
     
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
    filters: store.SearchFilter,
    select : searchProducts(store.product,store.SearchFilter),
    user : store.user || [],
  };
};
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
});
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);

