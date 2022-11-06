import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from 'react-bootstrap';
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';
import {createDevice} from '../../http/deviceApi';

const CreateDevice = observer(({show, handleClose}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(info => info.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(item => item.number === number ? {...item, [key]: value} : item))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('image', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))

        console.log(JSON.stringify(info))
        createDevice(formData).then(data => handleClose())
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map((type) => {
                                return <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map((brand) => {
                                return <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter device name...'
                    />
                    <Form.Control
                        className='mt-2'
                        value={price}
                        onChange={(e) => setPrice(parseInt(e.target.value))}
                        placeholder='Enter price of the device...'
                        type='number'
                    />
                    <Form.Control
                        className='mt-2'
                        onChange={selectFile}
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
                                        value={info.title}
                                        onChange={(e)=> changeInfo('title', e.target.value, info.number)}
                                        placeholder='Enter name'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={info.description}
                                        onChange={(e)=> changeInfo('description', e.target.value, info.number)}
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
                <Button variant="primary" onClick={addDevice}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
