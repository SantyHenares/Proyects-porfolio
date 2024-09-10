import React from 'react';
import './Checkout.css';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
 
 const Formulario = ( {submitHandler} ) => {
   return (
     <Formik
       initialValues={{ name: '', phone: '', email: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Nombre requerido'),
         phone: Yup.number()
            .typeError('Solo caracteres numericos')
            .required('Telefono requerido'),
         email: Yup.string()
            .email('Invalid email address')
            .required('Email requerido'),
       })}
       onSubmit={(values) => {
        submitHandler(values);
       }}
     >
       <Form className='m-5'>
        <h1>Check out</h1>
        <p>Ingresa tus datos para finalizar la compra.</p>
        <div className='contenedor-form d-flex justify-content-center'>
        <Field name='name' type="text" className="form-control" placeholder="Name" aria-label="Name"/>
            <ErrorMessage name="name" />
        </div>

        <div className='contenedor-form d-flex justify-content-center'>
             <Field name='phone' type="text" className="form-control" placeholder="Phone" aria-label="Phone"/>
            <ErrorMessage name="phone" />
        </div>
         
        <div className='contenedor-form d-flex justify-content-center'>
            <Field name='email' type="email" className="form-control" placeholder="Email" aria-label="Email"/>
            <ErrorMessage name="email" />
        </div>
         
        <button type='submit' className='btn btn-dark m-2'>Finalizar compra</button>
       </Form>
     </Formik>
   );
 };

 export default Formulario