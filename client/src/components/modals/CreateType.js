import React, {useState} from 'react';
import {Button, Form, Modal, Col} from 'react-bootstrap';
import {createType} from '../../http/deviceApi';
import { Formik  } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    type: yup.string().required()
});

const CreateType = ({show, handleClose}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            handleClose()
        })
    }

    return <Formik
        validationSchema={schema}
        onSubmit={addType}
        initialValues={{
            type: ''
        }}
        >
        {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
          }) => (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate>
                    <Form.Group as={Col} md="12" controlId="validationFormik03">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            value={values.type}
                            type="text"
                            name="type"
                            onChange={(e) => {handleChange(e); setValue(e.target.value)}}
                            placeholder={'Enter type...'}
                            isInvalid={!!errors.type}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.type}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )}
    </Formik>
};

export default CreateType;
