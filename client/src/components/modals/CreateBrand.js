import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {createBrand} from '../../http/deviceApi';

const CreateBrand = ({show, handleClose}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            handleClose()
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Enter type...'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addBrand}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
