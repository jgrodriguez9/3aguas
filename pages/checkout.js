import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CheckoutContent from '../components/Checkout/CheckoutContent';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import { getAllCountriesToShipping } from '../server/api/checkout';


function Checkout(){
    return (
        <>
           <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Checkout" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Checkout" 
            /> 
            <CheckoutContent /> 
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </>
    );
}

export default Checkout;

