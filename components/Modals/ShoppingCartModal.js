import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeItem } from '../../store/actions/cartActions';
import { useState } from 'react/cjs/react.development';

function ShoppingCartModal({active, onClick}){
    const [modal, setModal] = useState(false)
    const cartReducer = useSelector((state)=>state.cartReducer)
    const { cart } = cartReducer

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeItem(id))
        toast.error('Eliminado del carrito', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    const closeModal = () => onClick(modal)


    return(
        <>
            <div className={`shoppingCartModal right ${active}`}>
                <div className="modal-innter-content">
                    <button type="button" className="close" onClick={closeModal}>
                        <span aria-hidden="true">
                            <i className='bx bx-x'></i>
                        </span>
                    </button>

                    <div className="modal-body">
                        <h3>My Cart ({cart.total_unique_items})</h3>

                        {
                            cart.total_unique_items > 0 ?
                            cart.line_items.map((product, idx) => (
                                <div className="products-cart-content" key={idx}>
                                    <div className="products-cart">
                                        <div className="products-image">
                                            <Link href="#">
                                                <a>
                                                    <img src={product.image ? product.image.url : ''} alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>{product.name}</a>
                                                </Link>
                                            </h3>

                                            <div className="products-price">
                                                <span>{product.quantity}</span>
                                                <span>x</span>
                                                <span className="price">${product.price.raw}</span>
                                            </div>

                                            <Link href="#">
                                                <a 
                                                    className="remove-btn"
                                                    onClick={(e)=>{e.preventDefault();handleRemove(product.id)}}
                                                >
                                                    <i className='bx bx-trash'></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )) :
                            <div className="products-cart-content">
                                <p>Empty.</p>
                            </div>
                        }

                        <div className="products-cart-subtotal">
                            <span>Subtotal</span>
                            <span className="subtotal">{cart.subtotal?.formatted_with_symbol}</span>
                        </div>

                        <div className="products-cart-btn">
                            <button className="default-btn" disabled={cart.total_unique_items === 0 ? true : false}>Proceed to Checkout</button>
                            {/* <Link href="/checkout">
                                <a className="default-btn"></a>
                            </Link> */}
                            
                            <Link href="/cart">
                                <a className="optional-btn">View Shopping Cart</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ShoppingCartModal