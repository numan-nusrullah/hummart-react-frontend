import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import './css/breakfast.css';
import {addUser} from '../../actions/users';
import searchProducts from '../../selectors/searchFilter';
import {URL} from '../../URL';
class AddToCarts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            array:[]
         }
    }

    onOrder =(product,user) => {
        console.log('product',product)
        console.log('user',user)
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
    render() { 
        let {array} = this.state;
        let user = this.props.user[0] || [];
    array=[];
        let product=this.props.product || [];
        for(let i=0; i<user.cart.length;i++){
        product.map((p)=>{
             if(p._id === user.cart[i] ){
                    array.push(p);
             }
            })
        } 
        
        return ( <div>{this.props.select.length===0&&this.props.filters.text===''&&
            <diV> {user.cart.length===0?<div>You Have No Cart Order Yet</div>:
        <div className='container'>
        <h1>Your Orders</h1> 
        <div className='row'>  
        {
            array.map((data)=>
            <div className='col-6 col-md-3 allProducts'>
         <div className='card allProducts' >
         <img className='image' src={`${URL}${data.image}`} alt='Not Found' />
         <h1>{data.name}</h1>
         
            
         <p className='price'>{data.price}</p>
         <p className='quantity'>{data.quantity}</p>
         <p className='description'>{data.description}</p>
         <p>
         <button type="button" class="btn btn-outline-secondary" onClick={this.onOrder.bind(this,data._id,user._id)}>Add To Cart</button>
         </p>   
         </div>
         </div>
            )
        }
        </div>
        

        </div> 
        }  
        </diV>}
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
 
export default connect(mapStateToProps)(AddToCarts);