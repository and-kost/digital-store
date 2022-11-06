import React, {useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

const Admin = () => {
    const [showBrandModal, setShowBrandModal] = useState(false)
    const [showTypeModal, setShowTypeModal] = useState(false)
    const [showDeviceModal, setShowDeviceModal] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-danger'}
                    onClick={() => setShowTypeModal(true)}
                    className='mt-2'>Add type</Button>
            <Button variant={'outline-danger'}
                    className='mt-2'
                    onClick={() => setShowBrandModal(true)}>Add brand</Button>
            <Button variant={'outline-danger'}
                    onClick={() => setShowDeviceModal(true)}
                    className='mt-2'>Add device</Button>
            <CreateBrand show={showBrandModal} handleClose={() => setShowBrandModal(false)}/>
            <CreateType show={showTypeModal} handleClose={() => setShowTypeModal(false)}/>
            <CreateDevice show={showDeviceModal} handleClose={() => setShowDeviceModal(false)}/>
        </Container>
    );
};

export default Admin;
