import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import * as Yup from 'yup';
import { Field, Formik } from "formik"
import { userLogin } from '../store/actions/securityAction';

function Login(){
    const securityReducer = useSelector((state)=>state.securityReducer)
    const { loading, login, user, error } = securityReducer
    const dispatch = useDispatch()
    const [sendEmail, setSendEmail] = useState(false)

    const [initialValues, setInitialValues] = useState({
        email: ''
    })

    const shema = Yup.object().shape({
        email: Yup.string()
           .email("Correo inválido")
           .required('Campo requerido'),
    });

    return(
        <>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Login" 
            /> 
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="login-content">
                                <h2>Login</h2>
                                {
                                    user && 
                                    <div className="alert alert-success" role="alert">
                                        If that email address exists in our system, we've just sent you a link to continue logging in!
                                    </div>
                                }
                                {
                                    error &&
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                }

                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={shema}
                                    onSubmit={(values, { setSubmitting,setFieldValue }) => { 
                                        console.log(values)  
                                        dispatch(userLogin(values.email))

                                    }}
                                >{
                                    ({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        setFieldValue,
                                        setFieldError
                                    }) => (
                                        <form onSubmit={handleSubmit} className="login-form">
                                            <div className="form-group">
                                                <Field 
                                                    type="email"
                                                    className="form-control" 
                                                    name="email"
                                                    placeholder="demo@example.com"
                                                />
                                                {
                                                    errors.email &&
                                                    <div className="invalid-feedback d-block">{errors.email}</div>
                                                }
                                            </div>
                                            
                                            
                                            <button type="submit" className="default-btn" disabled={loading}>
                                                {
                                                    loading ? 
                                                    <div className="spinner-border text-white" role="status" style={{height: '1rem', width: '1rem'}}>
                                                        <span className="sr-only">Loading...</span>
                                                    </div> :
                                                    'Get magic Link'
                                                }                                                
                                            </button>

                                        </form>
                                    )
                                }

                                </Formik>
                            </div>
                        </div>

                        {/* <div className="col-lg-6 col-md-6">
                            <div className="new-customer-content">
                                <h2>New Customer</h2>

                                <span>Create an Account</span>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                
                                <Link href="/signup">
                                    <a className="optional-btn">Create an Account</a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </>
    )
}

export default Login

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userLogin: () => {dispatch(userLogin())}
//     }
// }

// export default connect(null, mapDispatchToProps)(Login)