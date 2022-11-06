import React, {useContext} from 'react';
import {Context} from '../index';
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/constants';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Digital Store</NavLink>
                { user.isAuth ?
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => history(ADMIN_ROUTE)}>Admin Panel</Nav.Link>
                        <Nav.Link href={LOGIN_ROUTE} onClick={() => logout()}>Logout</Nav.Link>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link href={LOGIN_ROUTE}>Sign In</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
