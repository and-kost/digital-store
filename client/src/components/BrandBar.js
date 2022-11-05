import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {Form, Card} from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Form className='d-flex'>
            {
                device.brands.map((brand) => {
                    return <Card
                        key={brand.id}
                        className='p-3'
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        onClick={() => {device.setSelectedBrand(brand)}}
                    >{brand.name}</Card>
                })
            }
        </Form>
    );
});

export default BrandBar;
