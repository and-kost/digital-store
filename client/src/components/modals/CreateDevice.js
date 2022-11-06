import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {Context} from '../../index';

const CreateDevice = ({show, handleClose}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(info => info.number !== number))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map((type) => {
                                return <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map((brand) => {
                                return <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter device name...'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Enter price of the device...'
                        type='number'
                    />
                    <Form.Control
                        className='mt-2'
                        type='file'
                    />
                    <hr/>
                    <Button variant={'outline-dark'}
                        onClick={addInfo}
                    >Add new description</Button>
                    {info.map(info => {
                            return <Row className='mt-2' key={info.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Enter name'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Enter value'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button variant={'outline-danger'}
                                            onClick={() => removeInfo(info.number)}
                                    >Delete</Button>
                                </Col>
                            </Row>
                        })}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
