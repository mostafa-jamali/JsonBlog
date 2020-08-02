import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText, Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container fluid>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className='nav-link' to='/users'>users</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' to='/posts'>post</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link' to='/todos'>todos</Link>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
    </Container>
    );
}

export default Header;