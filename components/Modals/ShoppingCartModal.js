import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeItem } from '../../store/actions/cartActions';
import { useState } from 'react/cjs/react.development';

function ShoppingCartModal({active, onClick}){
    const [modal, setModal] = useState(false)
    const cartReducer = useSelector((state)=>state.cartReducer)
    const { addedItems, total } = cartReducer
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
                        <h3>My Cart ({addedItems.length})</h3>

                        {
                            addedItems.length ?
                            addedItems.map((product, idx) => (
                                <div className="products-cart-content" key={idx}>
                                    <div className="products-cart">
                                        <div className="products-image">
                                            <Link href="#">
                                                <a>
                                                    <img src={product.imageUrl} alt="image" />
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="products-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>{product.title}</a>
                                                </Link>
                                            </h3>

                                            <div className="products-price">
                                                <span>{product.quantity}</span>
                                                <span>x</span>
                                                <span className="price">${product.newPrice}</span>
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
                            <span className="subtotal">${total}</span>
                        </div>

                        <div className="products-cart-btn">
                            <Link href="/checkout">
                                <a className="default-btn">Proceed to Checkout</a>
                            </Link>
                            
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