import React, {useContext} from 'react';
import {Context} from '../index';
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import {SHOP_ROUTE} from '../utils/constants';
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Digital Store</NavLink>
                { user.isAuth ?
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Admin Panel</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" onClick={() => user.setIsAuth(true)}>Sign In</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;