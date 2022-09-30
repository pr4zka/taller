import React from 'react'
import { Form, Formik } from 'formik'
import '/src/App.css';

export const Login = () => {
    return (
        <div id='login-container'>
            <h1>Iniciar sesión</h1>
            <Formik initialValues={null} enableReinitialize={true}>
                <Form className='form'>
                    <input className='input' type="email" placeholder='Email' />
                    <input className='input' type="password" placeholder='Contraseña' />
                    <a className='link' href='#'>Has olvidado tu contraseña?</a>
                     <button className='btn-login'>Iniciar Sesion</button>
                </Form>
           </Formik>
        </div>
    )
}
