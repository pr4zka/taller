import React from 'react'
import { Form, Formik } from 'formik'
import '/src/App.css';

export const Register = () => {
    return (
        <div id='login-container'>
            <h1>Register</h1>
            <Formik initialValues={null} enableReinitialize={true}>
                <Form className='form'>
                    <input className='input' type="email" placeholder='Email' />
                    <input className='input btn-r' type="password" placeholder='Contraseña' />
                    <button className='btn-login'>Registrar</button>
                </Form>
            </Formik>
        </div>
    )
}
