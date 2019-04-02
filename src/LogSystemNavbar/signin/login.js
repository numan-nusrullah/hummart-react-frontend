import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/login.css';
import './css/paralex.css';
import { adddata } from '../../actions/users';
import { connect } from 'react-redux';
import { addUser } from '../../actions/users';
import searchProducts from '../../selectors/searchFilter';
import {URL} from '../../URL';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    var options = {
      method: 'POST',
      body: JSON.stringify({ username: username.toLowerCase(), password:password }),
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
    .catch(() => {
this.setState({message:'Username and Password are Incorrect'})
    })
  }
  render() {
    const { username, password, message } = this.state;
    return (
        <div >{this.props.select.length===0&&this.props.filters.text===''&&
      <div className="container login ">
      <form className="px-8 py-8" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
 <div className="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" className="form-control col-6" id="exampleDropdownFormEmail1" placeholder="email@example.com" name="username" value={username} onChange={this.onChange} required />
    </div>
    <div className="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" className="form-control col-6" id="exampleDropdownFormPassword1" placeholder="Password" name="password" value={password} onChange={this.onChange} required />
    </div>
    <div className="form-group">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
        <label className="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Log In</button>
  </form>
  <div className="dropdown-divider"></div>
  Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>

</div>
      }

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

export default connect(mapStateToProps)(Login);