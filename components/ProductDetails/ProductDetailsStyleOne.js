import React, { Component, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart, addQuantityWithNumber } from '../../store/actions/cartActions';
import ProductDetailsTab from './ProductDetailsTab';
import RelatedProducts from './RelatedProducts';
import ProductImage from './ProductImage';
import VariantColor from './VariantColor';
import VariantSize from './VariantSize';

function ProductDetailsStyleOne({item}){
    const [product, setProduct] = useState(item)
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(1)
    //variantes selected
    const [variantColorSelected, setVariantColorSelected] = useState(null)
    const [variantSizeSelected, setVariantSizeSelected] = useState(null)

    const handleAddToCart = () => {
        dispatch(addQuantityWithNumber(product.id, qty))
        toast.success('Agregado al carrito', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    const incrementItem = () => {
        if(qty < 10){
            setQty(qty+1)
        }
        // this.setState(prevState => {
        //     if(prevState.qty < 10) {
        //         return {
        //             qty: prevState.qty + 1
        //         }
        //     } else {
        //         return null;
        //     }
        // });
    }

    const decreaseItem = () => {
        if(qty > 1){
            setQty(qty-1)
        }
        // this.setState(prevState => {
        //     if(prevState.qty > 1) {
        //         return {
        //             qty: prevState.qty - 1
        //         }
        //     } else {
        //         return null;
        //     }
        // });
    }

    const selectVariantColor = (it) =>{
        console.log(it)
        setVariantColorSelected(it.id)
        setProduct(prev=>({
            ...prev,
            oldPrice: it.price.raw,
        }))
    }
    const selectVariantSize = (it) =>{
        console.log(it)
        setVariantSizeSelected(it.id)
        setProduct(prev=>({
            ...prev,
            oldPrice: it.price.raw,
        }))

    }

    return (
        <section className="product-details-area pt-100 pb-70">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <ProductImage imageUrl={product.imageUrl} />
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>{product.title}</h3>

                                <div className="price">
                                {
                                    product.offer ? (
                                        <>
                                            <span className="old-price">${product.oldPrice}</span>
                                            <span className="new-price">${product.newPrice}</span>
                                        </>
                                    ) : (
                                        <span className="new-price">${product.oldPrice}</span>
                                    )
                                }
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="rating-count">3 reviews</a>
                                    </Link>
                                </div>

                                <ul className="products-info">
                                    <li>
                                        <span>Vendor:</span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>Lereve</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Availability:</span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>In stock (7 items)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Products Type:</span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>T-Shirt</a>
                                        </Link>
                                    </li>
                                </ul>

                                {
                                    product.variant_groups.filter(el=>el.name==='Color').length > 0 &&
                                    <VariantColor 
                                        variants={product.variant_groups.filter(el=>el.name==='Color')[0]}
                                        selectVariant={selectVariantColor}
                                        selected={variantColorSelected}
                                    />
                                }

                                {
                                    product.variant_groups.filter(el=>el.name==='Size').length > 0 &&
                                    <VariantSize 
                                        variants={product.variant_groups.filter(el=>el.name==='Size')[0]}
                                        selectVariant={selectVariantSize}
                                        selected={variantSizeSelected}
                                    />
                                }

                                <div className="products-info-btn">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} data-toggle="modal" data-target="#sizeGuideModal">
                                            <i className='bx bx-crop'></i> 
                                            Size guide
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} data-toggle="modal" data-target="#productsShippingModal">
                                            <i className='bx bxs-truck'></i> 
                                            Shipping
                                        </a>
                                    </Link>

                                    <Link href="/contact">
                                        <a onClick={e => e.preventDefault()}>
                                            <i className='bx bx-envelope'></i> 
                                            Ask about this products
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        <span 
                                            className="minus-btn"
                                            onClick={decreaseItem}
                                        >
                                            <i className='bx bx-minus'></i>
                                        </span>

                                        <input 
                                            type="text" 
                                            value={qty}
                                            min={min}
                                            max={max}
                                            onChange={e => setQty(e.target.value)}
                                        />

                                        <span 
                                            className="plus-btn"
                                            onClick={incrementItem}
                                        >
                                            <i className='bx bx-plus'></i>
                                        </span>
                                    </div>

                                    <button 
                                        className="default-btn"
                                        onClick={handleAddToCart}
                                    >
                                        <i className="fas fa-cart-plus"></i> 
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="wishlist-compare-btn">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="optional-btn">
                                            <i className='bx bx-heart'></i> 
                                            Add to Wishlist
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="optional-btn">
                                            <i className='bx bx-refresh'></i> 
                                            Add to Compare
                                        </a>
                                    </Link>
                                </div>

                                <div className="buy-checkbox-btn">
                                    <div className="item">
                                        <input className="inp-cbx" id="cbx" type="checkbox" />
                                        <label className="cbx" htmlFor="cbx">
                                            <span>
                                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg>
                                            </span>
                                            <span>I agree with the terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="default-btn">Buy it now!</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Tab */}
                    <ProductDetailsTab />
                </div>

                {/* Related Products */}
                {/* <RelatedProducts /> */}
            </section>
    )

}

export default ProductDetailsStyleOne