import React from 'react';
import Head from "next/head";
import GoTop from '../Shared/GoTop';
import { ToastContainer } from 'react-toastify';

const Layout = ({children}) => {
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, []);

    return(
        <React.Fragment>
            <ToastContainer />
            <Head>
                <title>3 Aguas</title>
                <meta name="description" content="3 Aguas - Tienda Playa" />
                <meta name="og:title" property="og:title" content="3 Aguas - Tienda Playa"></meta>
                <meta name="twitter:card" content="3 Aguas - Tienda Playa"></meta>
                <link rel="canonical" href="https://livani-react.envytheme.com/"></link>
                <meta property="og:image" content="https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg" />
            </Head>
            {/* {loader ? 'Loading' : children} */}
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;