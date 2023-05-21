import React from 'react'
import * as yup from 'yup';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import PropTypes from 'prop-types';


function TodoForm({submit}) {
 
    const initialValues = {
        id: 0,
        text: '',
        completed: false
    }

    const todoSchema = yup.object().shape(
        {   
            id: yup.number(),
            text: yup.string('Todo description is required').required(),
            completed: yup.bool()
        }
    )
 
    return (
        <div>
        <h2>ADD YOUR TODOs</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={todoSchema}
          onSubmit={(values)=>{
          submit(values.text);
          }}
        >
        {({
            touched, 
            errors
        })=>(

            <Form>
                <Field id="text" name="text"  type="text" placeholder={"TODO Description"}/> 
                    {
                        errors.text && touched.text && (
                            <ErrorMessage name='text' component={'div'}></ErrorMessage>
                        )
                    }

            <button type='submit'>ADD TODO</button>
            </Form>
            )}
        </Formik>
        </div>
  )
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;