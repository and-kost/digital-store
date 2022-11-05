import React from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/constants';
import {NavLink, useLocation} from 'react-router-dom';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Card style={{width: 600}} className='p-5 mt-5'>
                <h2 className='m-aut'>{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter your email...'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter your password...'
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
                        >
                            {isLogin ? 'Login' : 'Registration' }
                        </Button>
                    </Form>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
