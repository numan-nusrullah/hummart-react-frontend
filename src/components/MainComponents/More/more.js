import React, { Component } from 'react';
import './moredropdown.css';
import {Link} from 'react-router-dom';
class More extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          
             <div id="hoverShow1"> 
              <Link className="dropdown-item" onClick={this.props.close} id='morelinkshow' to='/icecream'>ICE CREAM</Link>
              <Link className="dropdown-item" onClick={this.props.close}id='morelinkshow' to='/babykids'>BABY & KIDS</Link>
              <Link className="dropdown-item" onClick={this.props.close}id='morelinkshow' to='/homekitchen'>HOME & KITCHEN</Link>
              <Link className="dropdown-item" onClick={this.props.close} id='morelinkshow' to='/furnishing'>FURNISHING </Link>
            </div>
          
         );
        }
    }
 
export default More;