import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import DeviceCard from './DeviceCard';
import {Row} from 'react-bootstrap';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className='d-flex mt-3'>
            {device.devices.map((device) => {
                return <DeviceCard key={device.id} device={device} />
            })}
        </Row>
    );
});

export default DeviceList;
