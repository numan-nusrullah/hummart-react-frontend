import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './css/productdetail.css';
import searchProducts from '../selectors/searchFilter';
import {addUser} from '../actions/users';
import {URL} from '../URL';
class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            array:[],
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
            fetch('http://localhost:8000/addCart',options)
            .then((res)=>res.json())
            .then((json)=>{
                fetch('http://localhost:8000/cart',options)
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
    render() { 
        let {array,error} = this.state;
        array = [];
        let user = this.props.user[0] || [];
        console.log(user._id)
        let product=this.props.product || [];
        product.map((p)=>{
             if(p._id === this.props.match.params.id){
                    array.push(p);
             }
            }) 
        
        return ( 
            <div>{this.props.select.length===0&&this.props.filters.text===''&&
            <div>
                {
                 error!==''&&   <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Error..!</strong> {error}.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                }
        <div className='container'>
           <div className='row '>
             <div className='col productHeading'>
            <h1>Product Details</h1> 
            </div>
            </div>
        {
            array.map((data)=>
            <div className='row'>  
            <div className='card col-12 col-md-4 allProducts'>
         
         <img className='image' src={`http://localhost:8000/${data.image}`} alt='Not Found' />
         
         </div>
         <div className='col-12 col-md-6 info'>
         <h5>{data.name}</h5> 
         <p className='price'>Rs : {data.price}</p>
         <p className='quantity'>{data.quantity}</p>
         <p className='description'>{data.description}</p>
         <p>
         <button type="button" class="btn btn-outline-secondary" onClick={this.onOrder.bind(this,data._id,user._id)}>Add To Cart</button>
         </p>  
         </div>
         <div className='col-12 col-md-2 choice'>
         <h4>Hum-Mart Ny Ker De Life  Assan</h4>
          <p>Now You Enjoy To Buy Our Best Quality Products.</p>
         </div>
        </div>   
        )
        }
        
        </div>
    </div> }  
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
 
export default connect(mapStateToProps)(ProductDetails );