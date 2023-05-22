import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup';
import PropTypes from 'prop-types'

function LoginForm({logged, fetching, onLogin}) {

    const initialValues = {
        email: '',
        password: ''
    }

    const userSchema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().min(4, 'Password is too short!').required()
    })

    return (
        <div>
            <h2>LOGIN</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={userSchema}
                onSubmit={async (values) => {
                    onLogin(values.username, values.password)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting
                }) => (
                    <Form>
                        <Field type='text' id='username' name='username' placeholder='username' />
                        {
                            errors.username && touched.username && (
                                <ErrorMessage name='username' component={'div'}></ErrorMessage>
                            )
                        }
                        <Field type='text' id='password' name='password' placeholder='password'></Field>
                        <button type='submit'>Login</button>
                       
                        {
                            fetching && (
                                <p>Loading...</p>
                            )
                        }
                    </Form>
                )}
            </Formik>
        </div>
    )
}

LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm