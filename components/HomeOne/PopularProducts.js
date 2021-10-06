import React, {useState} from 'react';
import QuickViewModal from '../Modals/QuickViewModal';
import { ToastContainer, toast } from 'react-toastify';
import SingleProduct from '../Common/SingleProduct';

export default function PopularProducts ({products})  {
    const [quickViewModal, setQuickViewModal] = useState(false);
    const [modalProduct, setModalProduct] = useState({});

    const toggleModal = () => {
        setQuickViewModal(!quickViewModal);
    };

    const handleAddToCart = (id) => {
        // addToCart(id);
        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    };

    const  passDataToModal = (product) => {
        setModalProduct(product);
    };

    return (
        <>
            <section className="products-area pt-100 pb-70">
                <ToastContainer />
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Ver nuestra colección</span>
                        <h2>Productos Populares</h2>
                    </div>

                    <div className="row">
                        {!!products.length && products.map((product, idx) => (
                            <SingleProduct
                                styleCls="col-lg-4 col-sm-6"
                                styleClsTwo="products-box"
                                product={product}
                                key={idx}
                                onHandleAddToCart={handleAddToCart}
                                onhandleModalProduct={passDataToModal}
                                ontoggleModal={toggleModal}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <QuickViewModal
                onClick={toggleModal} active={quickViewModal ? 'active' : ''}
                product={modalProduct}
            />
        </>
    );
}