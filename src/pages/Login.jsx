import React from 'react'
import { Form, Formik } from 'formik'


export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Formik initialValues={null} enableReinitialize={true}>
                <Form>
                    <input className='input' type="text" placeholder='Username' />
                    <input className='input' type="email" placeholder='Email' />
                    <input className='input' type="password" placeholder='Password' />
                     <button className='btn-login'>Login</button>
                </Form>
           </Formik>
        </div>
    )
}
