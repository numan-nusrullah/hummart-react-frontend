import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';
import axios from 'axios';
import {connect} from 'react-redux';
import searchProducts from '../selectors/searchFilter';
import {URL} from '../URL';
class AdminPanal extends Component {
    constructor(props) {
        super(props);
        this.state={
            category :'',
            quantity :'',
            price : '',
            description:'',
            name : '',
            fileToShare:null,
            loading:false
        };

        (function() {
            'use strict';
            window.addEventListener('load', function() {
          
              var forms = document.getElementsByClassName('needs-validation');
          
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          })();
    }

      onNameChangeHandler = (e) => {
        const name = e.target.value ;
        this.setState({name});
       };  
        
       onPriceChangeHandler = (e) => {
        const price = e.target.value ;
        if(!price ||price.match(/^[1-9]\d*$/)){
          this.setState({price})
        }
       };  
       
       onDescriptionChngeHandler = (e) => {
        const description = e.target.value ;
        this.setState({description});
       };  
       
    
    onCategoryHandler = (e) => {
     const category = e.target.value ;
     this.setState({category});
    };  
    
    onQuantityHandler = (e) => {
        const quantity = e.target.value ;
        this.setState({quantity});
       }; 
       onFileChangeHandler = (e) => {
         const fileToShare = e.target.files[0];
         this.setState({fileToShare})
       };

    SendDataToServer = (e) => {
     e.preventDefault();
        const Data = new FormData();
        Data.append('mypic',this.state.fileToShare);
        Data.append('name',this.state.name);
        Data.append('category',this.state.category);
        Data.append('description',this.state.description);
        Data.append('price',this.state.price);
        Data.append('quantity',this.state.quantity);

        axios.post(URL+'profile',Data)
        .then((res)=>{
          console.log('Fie Success Fully Added');
        }).catch((err)=>{});
        this.setState({loading:true});
        setTimeout(()=>{this.props.history.push('/')},1000)
    }

    render() {
      const {email} = this.props.data;console.log(email)
      const {loading} = this.state; 
        return ( 
          <div> {this.props.select.length===0&&this.props.filters.text===''&&
          <div> 
             {email!=='numansahil817@gmail.com'?<div><h1>You are Not Admin</h1></div>:<div>{loading ? <div class="spinner-grow text-danger ml-20" role="status">
            <span class="sr-only">Loading...</span>
          </div> : 
            <form className="needs-validation" noValidate onSubmit={this.SendDataToServer}>
       <h1 > Add Product </h1>

  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label className=" mr-2" htmlFor="inlineFormCustomSelectPref">Product Category</label>
  <select  onChange={this.onCategoryHandler} className="custom-select mr-sm-2" id="inlineFormCustomSelectPref">
    <option defaultValue={this.state.category} >Select Product Type...</option>
    <option value="Fruits & Vegetables">Fruits & Vegetables</option>
    <option value="Grocery">Grocery</option>
    <option value="HouseHold Needs">HouseHold Needs</option>
    <option value="BreakFast">BreakFast</option>
    <option value="Backery">Backery</option>
    <option value="IceCream">IceCream</option>
    <option value="Baby Kids">Baby Kids</option>
    <option value="Home Kitchen">Home Kitchen</option>
    <option value="Furnishing">Furnishing</option>
  </select>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
 
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Product Name</label>
      <input type="text" onChange={this.onNameChangeHandler} value={this.state.name} className="form-control" id="validationCustom02" placeholder="Product Name" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    
   <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Description</label>
      <input type="text" onChange={this.onDescriptionChngeHandler} value={this.state.description} className="form-control" id="validationCustom02" placeholder="Description" maxLength="40" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>

   <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Product Price</label>
      <input type="text" onChange={this.onPriceChangeHandler} value={this.state.price} className="form-control" id="validationCustom02" placeholder="Product Price" required />
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <label className=" mr-2" htmlFor="inlineFormCustomSelectPref">Select Quantity </label>
  <select  onChange={this.onQuantityHandler} className="custom-select mr-sm-2" id="inlineFormCustomSelectPref">
    <option defaultValue={this.state.quantity} >Setect Product Quantity...</option>
    <option value="Kg">Kg</option>
    <option value="Dozen">Dozen</option>
    <option value="One Piece">One Piece</option>
    <option value="One pack">one Pack</option>
    <option value="One box">one Box</option>
    <option value="One box">one Bottle Regular</option>
    <option value="ml">800 ml</option>
    <option value="ml">500 ml</option>
    <option value="ml">1200 ml</option>
    <option value="Ltr">Ltr</option>
    <option value="2 Ltr">2 Ltr</option>
    <option value="5 Ltr">5 Ltr</option>

  </select>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
 
    <div className="form-group">
    <label htmlFor="exampleFormControlFile1">Choose File For Upload</label>
    <input type="file"   onChange={this.onFileChangeHandler}  className="form-control-file" id="exampleFormControlFile1" />
  </div>

  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Are You Soure ! You Want to Add Product.
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
}</div>}
    </div>}     
       </div>     
            );
    }
}
const mapStateToProps = (store) => {
  return {
    data: store.user.find(data=>data._id!=='')||[],
    filters: store.SearchFilter,
    select : searchProducts(store.product,store.SearchFilter),
    };
};
 
export default connect(mapStateToProps)(AdminPanal);