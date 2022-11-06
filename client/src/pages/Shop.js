import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {getBrands, getDevices, getTypes} from '../http/deviceApi';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        getTypes().then(data => device.setTypes(data))
        getBrands().then(data => device.setBrands(data))
        getDevices().then(data => device.setDevices(data.rows))
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
