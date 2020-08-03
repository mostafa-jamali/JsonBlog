import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function UserHeader() {
    const { id } = useParams();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/users">USERS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className='nav-link' to={`/users/${id}/userposts`}>UserPosts</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='nav-link' to={`/users/${id}/usertodos`}>UserTodos</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default UserHeader
