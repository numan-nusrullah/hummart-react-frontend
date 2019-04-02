import React from 'react';
import hummart from '../pictures/hummart.png';
import More from '../components/MainComponents/More/more';
import {Link} from 'react-router-dom';
import './css/mainnavbar.css';
import { connect } from 'react-redux';

const Mainnavebar = (props) => {
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginRight = "200px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }
 
          
  const {email}=props.data
  return (
                 
                 <div>
        <nav id='navbar' className="navbar navbar-expand-md navbar-light  my-navbar">
         <Link className='navbar-brand' to='/'><img className='hummartpic' src={hummart} alt=""/></Link> 
  {/* <Link className="navbar-brand" to='/fruitsVegetables'>Fruits & Vegetables</Link> */}
  <button className="navbar-toggler" onMouseOver={openNav} type="button" data-toggle="modal" data-target="#myModal" >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
     <div className='container'>
      <div className='row mynav justify-content-around'>
       <div className='col-md-1.5'>
      <li className="nav-item">
      <Link id='navbarLinks' className="nav-link" to='/fruitsVegetables'>Fruits & Vegetables</Link>
      </li>
      </div>
      <div className='col-md-1.5'>
      <li className="nav-item">
      <Link id='navbarLinks' className="nav-link" to='/grocery'>Grocery & Steples</Link>
      </li>
      </div>
      <div className='col-md-1.5'>
      <li className="nav-item">
      <Link id='navbarLinks' className="nav-link" to='/household'>Household Needs</Link>
      </li>
      </div>
      <div className='col-md-1.5'>
      <li className="nav-item">
      <Link id='navbarLinks' className="nav-link" to='/breakfast'>Breakfast & Dairy</Link>
      </li>
      </div>
      <div className='col-md-1.5'>
      <li className="nav-item">
      <Link id='navbarLinks' className="nav-link" to='/biscuits'>BacKery</Link>
      </li>
      </div>
     
      <div className='col-md-1.5'>
      <li  className="nav-item dropdown">
        <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span id='navbarLinks'>More</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <More />
        </div>
      </li>
      </div>
        
     { email=='numansahil817@gmail.com'&&
     <div className='col-md-1.5'>
      <li className="nav-item">
      <Link id='navbarLinks' className="nav-link " to='/adminpanal'>Admin Panal</Link>
      </li>
      </div>
    }


       </div>
      </div>
    </ul>
  </div>
</nav> 
<div id="mySidenav" class="sidenav">
     <div className='row'>
          <button type="button" className="close" onMouseOver={closeNav} id='close' data-dismiss="modal">&times;</button>
          <Link className='navbar-brand' onClick={closeNav} to='/'><img id='hummartpic' src={hummart} alt=""/></Link> 
        </div>
    { email==='numansahil817@gmail.com'&&
    <div className='row'>
    <Link id='navbarLinks' onClick={closeNav} className="nav-link " to='/adminpanal'>Admin Panal</Link>
    </div>
    }
      <div className='row'>
      <Link id='modelNavbarLinks' className="nav-link" onClick={closeNav} to='/fruitsVegetables'>Fruits & Vegetables</Link>
      </div>
      <div className='row'>
      <Link id='modelNavbarLinks' className="nav-link" onClick={closeNav} to='/grocery'>Grocery</Link>
      </div>
      <div className='row'>
      <Link id='modelNavbarLinks' className="nav-link" onClick={closeNav} to='/household'>Household Needs</Link>
      </div>
      <div className='row'>
      <Link id='modelNavbarLinks' className="nav-link" onClick={closeNav} to='/breakfast'>Breakfast & Dairy</Link>
      </div>
      <div className='row'>
      <Link id='modelNavbarLinks' className="nav-link" onClick={closeNav} to='/biscuits'>Backery</Link>
      </div>
      <div className='row'>
        <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span id='modelNavbarLinks'>More</span>
        </a>
        <div className="dropdown-menu drop1" aria-labelledby="">
          <More close={closeNav}/>
    </div>
    </div>
    </div>
    </div>
    );
    
  }
  
  const mapStateToProps = (store) => {
    return {
    data: store.user.find(data=>data._id!=='')
  };
};
export default connect(mapStateToProps)(Mainnavebar);
