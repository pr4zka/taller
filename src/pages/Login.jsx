import React from 'react'
import { Form, Formik } from 'formik'
import '/src/App.css';

export const Login = () => {
    return (
        <div id='login-container'>
            <h1>Login</h1>
            <Formik initialValues={null} enableReinitialize={true}>
                <Form className='form'>
                    <input className='input' type="email" placeholder='Email' />
                    <input className='input' type="password" placeholder='Password' />
                     <button className='btn-login'>Sing In</button>
                </Form>
           </Formik>
        </div>
    )
}
