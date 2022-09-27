import React from 'react'
import { Form, Formik } from 'formik'
export const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <Formik initialValues={null} enableReinitialize={true}>
                <Form>
                    <input className='input' type="text" placeholder='Username' />
                    <input className='input' type="email" placeholder='Email' />
                    <input className='input' type="password" placeholder='Password' />
                    <button className='btn-login'>Register</button>
                </Form>
            </Formik>
        </div>
    )
}
