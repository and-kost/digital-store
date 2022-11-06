import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {createType} from '../../http/deviceApi';

const CreateType = ({show, handleClose}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            handleClose()
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new type</Modal.Title>
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
                <Button variant="primary" onClick={addType}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
