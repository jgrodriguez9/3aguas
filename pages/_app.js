import '../styles.scss';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
import { addProducts, currentCart } from '../store/actions/cartActions';
import { checkUserLogin, setCustomer } from '../store/actions/securityAction';
import store from '../store/store';
import RouteGuard from '../components/security/RouteGuard';

const MyApp = ({Component, pageProps}) => {
    
    useEffect(()=>{
        store.dispatch(setCustomer())
        store.dispatch(currentCart())
    })

    return (
        <Layout>
            <ToastContainer />
            <Provider store={store}>
                <RouteGuard>
                    <Component {...pageProps} />
                </RouteGuard>
            </Provider>
        </Layout>
    );
    
};

const makeStore = () => store;
export default withRedux(makeStore)(MyApp)