import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './css/SignUp.css';
import { connect } from 'react-redux'
import { addUser } from '../../actions/users';
import searchProducts from '../../selectors/searchFilter';
import {URL} from '../../URL';
class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      fullname:''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
console.log(email,password)
var options1 = {
  method: 'POST',
  body: JSON.stringify({fullname: this.state.fullname, email: this.state.email.toLowerCase(), password:this.state.password }),
  headers: {
      'Content-Type': 'application/json'
  }

}
fetch(URL+'register', options1)
  .then((res) => res.json())
  .then((message) =>{
    const {success,user}=message;
  if(success===true){
    var options = {
      method: 'POST',
      body: JSON.stringify({ username: user.email, password:user.password }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    }
    fetch(URL+'login', options)
    .then((res) => res.json())

    .then((message) =>{localStorage.setItem('user', JSON.stringify(message.user));
    var user=JSON.parse(localStorage.getItem('user'));
 if(user!==null){
        this.props.dispatch(addUser(user));}
      console.log(message.user);
      this.props.history.push('/')
    })
  }
  
 })
  .catch((error) => console.log(error))
  }

  render() {
    const { email, password,fullname } = this.state;
    return (<div>{this.props.select.length===0&&this.props.filters.text===''&&
      <div className="container Signup">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading ChangeColor">Register User</h2>
          <label for="inputText" className="sr-only">Full Name</label>
         <label className='ChangeColor'>Full Name</label>  <input type="text" className="form-control" placeholder="Full Name" name="fullname" value={fullname} onChange={this.onChange} required/>
          <br />
          <label for="inputEmail" className="sr-only">Email address</label>
          <label className='ChangeColor'> Email Address </label><input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <br />
          <label for="inputPassword" className="sr-only">Password</label>
          <label className='ChangeColor'>Password </label> <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <br />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
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

export default connect(mapStateToProps)(SignUp);