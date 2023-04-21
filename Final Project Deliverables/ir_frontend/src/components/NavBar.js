import { Form, FormGroup, Input, Navbar, NavbarBrand, NavItem, Nav, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarToggler } from 'reactstrap';
import React from 'react';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
    
    }
    
    render(){
        return(
        <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"><h2>OASIS</h2></NavbarBrand>\
            <Nav fill>
                <NavItem><NavLink href="/" style={{color:'white'}}>Home</NavLink>
                </NavItem>
                <NavItem><NavLink href="/Description" style={{color:'white'}}>Description</NavLink>
                </NavItem>
                <NavItem><NavLink href="/Collaborators" style={{color:'white'}}>Collaborators</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        </div>
        
        );
    }
}

export default NavBar