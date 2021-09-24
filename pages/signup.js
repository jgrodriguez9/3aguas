import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import * as Yup from 'yup';
import { Field, Formik } from "formik"
import { useDispatch, useSelector } from 'react-redux';
import { registerCustomer } from '../store/actions/securityAction';


function Signup(){
    const registerReducer = useSelector((state)=>state.registerReducer)
    const { loading, user, error } = registerReducer
    const dispatch = useDispatch()
    
    
    const [initialValues, setInitialValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    })

    const shema = Yup.object().shape({
        firstname: Yup.string()
          .required('Campo requuerido'),
        lastname: Yup.string()
          .required('Campo requuerido'),
        email: Yup.string()
           .email("Correo inválido")
           .required('Campo requuerido'),
    });

    return (
        <React.Fragment>
           <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Login" 
            /> 

            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="signup-content">
                        <h2>Create an Account</h2>
                        
                        <Formik
                            initialValues={initialValues}
                            validationSchema={shema}
                            onSubmit={(values, { setSubmitting,setFieldValue }) => { 
                                dispatch(registerCustomer(JSON.stringify(values)))
                                if(user){
                                    Router.push("/login")
                                }

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
                                <form onSubmit={handleSubmit} className="signup-form">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <Field 
                                            type="text"
                                            className="form-control"
                                            id="fname" 
                                            name="firstname"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <Field 
                                            type="text"
                                            className="form-control"
                                            id="lname" 
                                            name="lastname"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <Field 
                                            type="email"
                                            className="form-control" 
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <Field 
                                            type="text"
                                            className="form-control" 
                                            name="phone"
                                        />
                                    </div>

                                    <button type="submit" className="default-btn" disabled={registerReducer.loading}>
                                        {
                                            registerReducer.loading ? 
                                            <div className="spinner-border text-white" role="status" style={{height: '1rem', width: '1rem'}}>
                                                <span className="sr-only">Loading...</span>
                                            </div> :
                                            'Signup'
                                        }
                                        
                                    </button>

                                    <div className="text-center">
                                    <Link href="/">
                                        <a className="return-store">or Return to Store</a>
                                    </Link>
                                </div>

                                </form>
                            )
                        }

                        </Formik>
                    </div>
                </div>
            </section>

            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

export default Signup