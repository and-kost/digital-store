import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from '../utils/constants';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {login, registration} from '../http/userApi';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onAuth = async () => {
        try {
            let userData
            if (isLogin) {
                userData = await login(email, password)
            } else {
                userData = await registration(email, password)
            }
            user.setUser(userData)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Card style={{width: 600}} className='p-5 mt-5'>
                <h2 className='m-aut'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter your email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter your password...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Form className='d-flex justify-content-between mt-3'>
                        {isLogin ?
                            <div>
                                No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>
                                Have account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                            </div>
                        }
                        <Button className='mt-3 align-self-end'
                                variant={'outline-primary'}
                                onClick={() => onAuth()}
                        >
                            {isLogin ? 'Login' : 'Registration' }
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
