import React, { useState } from 'react';
import useForm from './userForm';
import OrderSummary from './OrderSummary';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutGenerateToken, getShippingOptions } from '../../store/actions/checkoutActions';
import { getAllCountriesToShipping, getAllRegionsToShippingForACountry } from '../../server/api/checkout';

function CheckoutContent() {
    const { cart, checkout, shippingOptions } = useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch()
    const [countries, setCountries] = useState({})
    const [regions, setRegions] = useState({})
    function handleSubmit() {
        console.log("Form submitted.");
    }

    const stateSchema = {
        country: {value: "MX", error: ""},
        firstName: {value: "", error: ""},
        lastName: {value: "", error: ""},
        address: {value: "", error: ""},
        city: {value: "", error: ""},
        state: {value: "ROO", error: ""},
        zip: {value: "", error: ""},
        email: {value: "", error: ""},
        fullName: {value: "", error: ""},
        shippingmethod: {value: "", error: ""}
    };

    
    
    useEffect(()=>{
        //generate token checkout
        if(cart.id){

            (async () => {
                let data = await dispatch(checkoutGenerateToken(cart.id))

                //get cpuntries donde se puede enviar
                getAllCountriesShipping(data)
                getAllRegionsShipping(data)
                
                //get shipping methods
                console.log('get shipping methods')
                dispatch(getShippingOptions(data.id, stateSchema.country.value))
              })()

            
        }
    },[])
    //console.log(checkout)

    const getAllCountriesShipping = (checkout) => {
        getAllCountriesToShipping(checkout.id)
        .then(response=>{
            setCountries(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const getAllRegionsShipping = (checkout) => {
        getAllRegionsToShippingForACountry(checkout.id, stateSchema.country.value)
        .then(response=>{
            //console.log(response)
            setRegions(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    
    

    const validationStateSchema = {
        firstName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid first name format."
            }
        },

        lastName: {
            required: true,
            validator: {
            regEx: /^[a-zA-Z]+$/,
            error: "Invalid last name format."
            }
        },

        address: {
            required: true,
            validator: {
                error: "Invalid address format."
            }
        },

        country: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        shippingmethod: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        city: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        state: {
            required: true,
            validator: {
                error: "Invalid last name format."
            }
        },

        zip: {
            required: true,
            validator: {
                regEx: /^\d{5}$|^\d{5}-\d{4}$/,
                error: "Invalid zip format, use like 12345."
            }
        },

        email: {
            required: true,
            validator: {
                regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                error: "Invalid email format."
            }
        }
    };

    const { state, handleOnChange, handleOnSubmit, disable } = useForm (
        stateSchema,
        validationStateSchema,
        handleSubmit
    );
    
    const errorStyle = {
        color: "red",
        fontSize: "13px"
    };
    return (
        <section className="checkout-area ptb-100">
            <div className="container">           

                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="billing-details">
                                <h3 className="title">Customer</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>First Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.firstName.value}
                                            />
                                            {state.firstName.error && <p style={errorStyle}>{state.firstName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Last Name <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.lastName.value}
                                            />
                                            {state.lastName.error && <p style={errorStyle}>{state.lastName.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Email Address <span className="required">*</span></label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.email.value}
                                            />
                                            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="billing-details">
                                <br/>
                                <h3 className="title">Shipping address</h3>

                                <div className="row">

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Country <span className="required">*</span></label>
                                            
                                            <div className="select-box">
                                                <select className="form-control" onChange={handleOnChange} value={state.country.value} name="country">
                                                    {
                                                        Object.entries(countries).map(([code, name]) => (
                                                            <option value={code} key={code}>{ name }</option>
                                                        ))
                                                    }
                                                </select>
                                                {state.country.error && <p style={errorStyle}>{state.country.error}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Town / City <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="city"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.city.value}
                                            />
                                            {state.city.error && <p style={errorStyle}>{state.city.error}</p>}
                                        </div>
                                    </div>                                    

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Address <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                className="form-control" 
                                                onChange={handleOnChange}
                                                value={state.address.value}
                                            />
                                            {state.address.error && <p style={errorStyle}>{state.address.error}</p>}
                                        </div>
                                    </div>

                                    

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>State / Province / Region <span className="required">*</span></label>
                                            <div className="select-box">
                                                <select className="form-control" onChange={handleOnChange} value={state.state.value} name="state">
                                                    {
                                                        Object.entries(regions).map(([code, name]) => (
                                                            <option value={code} key={code}>{ name }</option>
                                                        ))
                                                    }
                                                </select>
                                                {state.state.error && <p style={errorStyle}>{state.state.error}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Postcode / Zip <span className="required">*</span></label>
                                            <input 
                                                type="text" 
                                                name="zip"
                                                className="form-control"
                                                onChange={handleOnChange}
                                                value={state.zip.value}
                                            />
                                            {state.zip.error && <p style={errorStyle}>{state.zip.error}</p>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Shipping method <span className="required">*</span></label>
                                            <div className="select-box">
                                                <select className="form-control" onChange={handleOnChange} value={state.shippingmethod.value} name="shippingmethod">
                                                    <option value="">Seleccionar opción</option>
                                                    {
                                                        shippingOptions.map(option => (
                                                            <option key={option.id} value={option.id}>
                                                            { `${option.description} - $${option.price.formatted_with_code}` }
                                                            </option>   
                                                        ))
                                                    }
                                                </select>
                                                {state.shippingmethod.error && <p style={errorStyle}>{state.shippingmethod.error}</p>}
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="notes" id="notes" cols="30" rows="4" placeholder="Order Notes" className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <OrderSummary disabled={disable} stateData={state} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CheckoutContent;