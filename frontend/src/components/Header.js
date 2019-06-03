import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


export default function Header() {

    const [isOpen, toggle] = useState(false);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="#">Mandic - Poker</NavbarBrand>
            <NavbarToggler onClick={()=>toggle(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/erivaldodantas/mandic-test">Github</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}