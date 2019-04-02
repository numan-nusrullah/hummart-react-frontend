import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './css/furnishing.css';
import Footer from '../../../../Footer/footer';
import {addUser} from '../../../../actions/users';
import searchProducts from '../../../../selectors/searchFilter';
import {URL} from '../../../../URL';
class Furnishing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            array:[]
         }
    }

    onOrder =(product,user) => {
        if(user) {
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
        }
       
    }
    render() { 
        let {array} = this.state;
        array = [];
        let user = this.props.user[0] || [];
        console.log(user._id)
        let product=this.props.product || [];
        product.map((p)=>{
             if(p.category === 'Furnishing'){
                    array.push(p);
             }
            }) 
        
        return (
          <div>{this.props.select.length===0&&this.props.filters.text===''&& 
        <div className='container'>
        <h3 className='topHeading'>Furnishing</h3> 
        <span className='span'><i class="fas fa-home"></i>     <i class="fas fa-angle-right"></i>  Furnishing  </span>

        <div className='row'>  
        {
            array.map((data)=>
            <div className='col-6 col-md-3 allProducts mt-3'>
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
        
        <Footer />
        </div>   }
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
 
export default connect(mapStateToProps)(Furnishing);