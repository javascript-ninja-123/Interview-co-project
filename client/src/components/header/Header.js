import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './Header.css';

 class Header extends Component {

  state = {
    isOpen: false
  };

 toggle = () => this.setState({isOpen:!this.state.isOpen})

  render() {
    return (<div className='Header'>
      <Navbar color="light" light expand="md">
       <NavLink to='/' className='navbar-brand'>Interview.CO</NavLink>
       <NavbarToggler onClick={this.toggle} />
       <Collapse isOpen={this.state.isOpen} navbar>
         <Nav className="ml-auto" navbar>
           <NavItem>
             <NavLink to='/tutor'
             exact
             className='nav-link'
             activeClassName='nav-link--active'
             >Find Tutor</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to='/login'
             exact
             className='nav-link'
             activeClassName='nav-link--active'
             >Login</NavLink>
           </NavItem>
         </Nav>
       </Collapse>
     </Navbar>
    </div>);
  }
}


export default Header
