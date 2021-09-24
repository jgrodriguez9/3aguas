import { useSelector } from "react-redux"
import FacilitySlider from "../components/Common/FacilitySlider"
import InstagramFeed from "../components/Common/InstagramFeed"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/Layouts/Footer"
import Navbar from "../components/Layouts/Navbar"
import TopHeader from "../components/Layouts/TopHeader"
import { getOrders } from "../server/api/orders"
import store from "../store/store"

function MyAccount({orders}){
    console.log(orders)
    const customerReducer = useSelector(state=>state.customerReducer)
    const { customer } = customerReducer

    return(
        <>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="My Account" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Account" 
            /> 
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>{`Hola ${customer?.firstname} ${customer?.lastname}!`}</h1>    

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

export async function getStaticProps(context) {
    console.log(context)
    
    //console.log(store.getState())
    let orders = await getOrders("cstmr_kd6Ll2QjmY5V2m")
    console.log(orders)
    return {
      props: {
        protected: true,
        orders: orders
      }
    };
  }

export default MyAccount