import React from 'react';
import hummart from '../pictures/hummart.png';
import More from '../components/MainComponents/More/more';
import {Link} from 'react-router-dom';
import './css/mainnavbar.css';
const Mainnavebar = () => {
  window.onscroll = function() {scrollFunction()};
  function scrollFunction  ()  {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.zIndex = "10";
      document.getElementById("navbar").style.width = "100%";
      document.getElementById("navbarLinks").style.paddingLeft = "20%;";
    } else {
      document.getElementById("navbar").style.position = "static";
      document.getElementById("navbar").style.width = "82%";
    }
  } 
  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginRight = "200px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }
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
export default Mainnavebar;
