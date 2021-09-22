import '../styles.scss';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/_App/Layout';
import store from '../store/store';
import {getProductList} from "../store/actions/commerceAction";



const MyApp = ({Component, pageProps}) => {
    
    React.useEffect(() => {
        store.dispatch(getProductList())
    });


    return (
        <Layout>
            <ToastContainer />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
};

const makeStore = () => store;


export default withRedux(makeStore)(MyApp)