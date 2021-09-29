import FacilitySlider from "../../components/Common/FacilitySlider";
import InstagramFeed from "../../components/Common/InstagramFeed";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import TopHeader from "../../components/Layouts/TopHeader";
import ProductDetailsStyleOne from "../../components/ProductDetails/ProductDetailsStyleOne";
import { getProductById, getProducts } from "../../server/api/products"

function Product({product}){
    //console.log(product)
    return (
        <>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle={product.title} 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={product.title} 
            /> 
            <ProductDetailsStyleOne item={product} />
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </>
    );

}

export async function getStaticPaths(){

    const products = await getProducts()
    const productsId = products.data.map(el=>({id: el.id}))

    return {
        fallback: true,
        paths: productsId.map(prod=>({
            params: {id: prod.id}
        }))
    }
}

export async function getStaticProps(context){
    let product = await getProductById(context.params.id);
    return {
        props: {
          product: product.data
        }
    };
}

export default Product