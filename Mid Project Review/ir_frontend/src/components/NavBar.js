import { Form, FormGroup, Input, Navbar, NavbarBrand, NavItem, Nav, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarToggler } from 'reactstrap';
import React from 'react';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
    
    }
    
    render(){
        return(
        <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><h2>OASIS</h2></NavbarBrand>
            <Collapse navbar fill>
            {/* <Nav fill>
                <NavItem>
                </NavItem>
            </Nav> */}
            </Collapse>
        </Navbar>
        </div>
        
        );
    }
}

export default NavBar