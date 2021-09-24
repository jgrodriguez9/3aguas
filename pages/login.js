import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import * as Yup from 'yup';
import { Field, Formik } from "formik"
import { setCustomer, userLogin } from '../store/actions/securityAction';
import { useEffect } from 'react';
import LoginAnimation from '../components/Loader/LoginAnimation';
import commerce from '../server/config/commerce';

function Login(){
    const router = useRouter()
    const { token } = router.query
    const securityReducer = useSelector((state)=>state.securityReducer)
    const { loading, login, user, error } = securityReducer
    const dispatch = useDispatch()
    const [sendEmail, setSendEmail] = useState(false)
    const [messageAlert, setMessageAlert] = useState(null)
    const [validToken, setValidToken] = useState(true)

    const [initialValues, setInitialValues] = useState({
        email: ''
    })

    const shema = Yup.object().shape({
        email: Yup.string()
           .email("Correo inválido")
           .required('Campo requerido'),
    });


    useEffect(()=>{
        //checamos que no venga el tokenpor la url
        if(token){
            setValidToken(true)
            commerce.customer.getToken(token)
            .then(jwt=>{
                dispatch(setCustomer())
                router.push("/my-account")
            })
            .catch(error=>{
                console.log(error)
                setMessageAlert("Este token no se encuentra o no es válido")
            })
        }else{

        }
    }, [])

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
                            {
                                messageAlert ?
                                <div className="text-center">
                                    <div className="alert alert-info" role="alert">
                                        {messageAlert}
                                    </div>
                                    <button type="button" className="default-btn" 
                                    onClick={e=>{
                                        setMessageAlert(null)
                                        setValidToken(false)
                                    }}>
                                        Return to Login
                                    </button>
                                </div>
                                :
                                (token && validToken) ? 
                                <div className="procesing-login">
                                    <LoginAnimation />
                                </div> :
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
                            }
                        </div>
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