import React from 'react';
import {observer} from 'mobx-react-lite';
import {Card, Col, Image} from 'react-bootstrap';
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
import {DEVICE_ROUTE} from '../utils/constants';

const DeviceCard = observer(({device}) => {
    const history = useNavigate()
    return (
        <Col md={3} onClick={() => history(`${DEVICE_ROUTE}/:${device.id}`)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={device.image}/>
                <div className='d-flex mt-1 text-black-50 justify-content-between align-items-center'>
                    <div>Apple</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
});

export default DeviceCard;
