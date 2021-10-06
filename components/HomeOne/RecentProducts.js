import React, {useState} from 'react';
import QuickViewModal from '../Modals/QuickViewModal';
import { toast } from 'react-toastify';
import SingleProduct from '../Common/SingleProduct';
import { useDispatch } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';

function RecentProducts({products})  {
    const [quickViewModal, setQuickViewModal] = useState(false);
    const [modalProduct, setModalProduct] = useState({});
    const dispatch = useDispatch()

    const toggleModal = () => {
        setQuickViewModal(!quickViewModal);
    };

    const handleAddToCart = (id) => {
        dispatch(addQuantityWithNumber(id, 1))
        toast.success('Agregado al carrito', {
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
            <section className="products-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Ver nuestra colección</span>
                        <h2>Productos Recientes</h2>
                    </div>

                    <div className="row">
                        {!!products.length && products.map((product, idx) => (                            
                            <SingleProduct
                                styleCls="col-lg-4 col-sm-6"
                                key={idx}
                                product={product}
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
export default RecentProducts