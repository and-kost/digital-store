import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row, Card, Button} from 'react-bootstrap';
import star from '../assets/star.png'
import {useParams} from 'react-router-dom';
import {getDevice} from '../http/deviceApi';

const Device = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        getDevice(id).then(device => setDevice(device))
    }, [])

    return (
        <Container className='mt-5'>
            <Row>
                <Col md={4}>
                    <Image width={400} height={400} src={process.env.REACT_APP_API + device.image}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{background: `url(${star}) no-repeat center center`, width: 300, height: 300, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around p-5'>
                        <h3>{device.price}$</h3>
                        <Button variant={'outline-dark'}>Buy</Button>
                    </Card>
                </Col>
            </Row>
            <h1>Descriptions</h1>
            <Row className='d-flex flex-column m-3'>
                {device.info.map((description, index) => {
                    return <Row key={description.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding: 10}}>
                        {description.title}:{description.description}
                    </Row>
                })}
            </Row>
        </Container>
    );
};

export default Device;
