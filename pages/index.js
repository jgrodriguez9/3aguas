import React from 'react';
import { connect, useSelector } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import CategoriesBanner from '../components/HomeOne/CategoriesBanner';
import RecentProducts from '../components/HomeOne/RecentProducts';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Partner from '../components/Common/Partner';
import RecentBlogPost from '../components/Common/RecentBlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import PopularProducts from '../components/HomeOne/PopularProducts';
import BestSellingProducts from '../components/HomeOne/BestSellingProducts';
import { getProducts } from '../server/api/products';

function Index({products}){
    return (
        <>
            <TopHeader />
            <Navbar />
            <MainBanner />
            <CategoriesBanner />
            <RecentProducts products={products} />
            <OfferStyleOne />
            {/* <PopularProducts products={products} /> */}
            <FacilitySlider />
            {/* <BestSellingProducts products={products} /> */}
            <Partner />
            <RecentBlogPost />
            <InstagramFeed />
            <Footer />
        </>
    )

}

export async function getStaticProps(context) {
    let products = await getProducts();
    return {
      props: {
        products: products.data
      },
      unstable_revalidate: 10
    };
  }
export default Index;