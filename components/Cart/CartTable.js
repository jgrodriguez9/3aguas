import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeItem, addQuantity, subtractQuantity } from '../../store/actions/cartActions';


function CartTable(){
    const cartReducer = useSelector((state)=>state.cartReducer)
    const { cart } = cartReducer
    const dispatch = useDispatch()
    const router = useRouter()

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

    const handleAddQuantity = (id, qty)=>{
        dispatch(addQuantity(id, qty+1))
    }
    const handleSubtractQuantity = (id, qty)=>{
        dispatch(subtractQuantity(id, qty-1));
    }

    const procedCheckout = () =>{        
        router.push("/checkout")
    }

    return (
        <section className="cart-area ptb-100">
            <div className="container">
                <form>
                    <div className="cart-table table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cart.total_unique_items > 0 ?
                                    cart.line_items.map((data, idx) => (
                                        <tr key={idx}>
                                            <td className="product-thumbnail">
                                                <a href="#">
                                                    <img src={data.image?.url} alt="item" />
                                                </a>
                                            </td>

                                            <td className="product-name">
                                                <a href="#">{data.name}</a>
                                            </td>

                                            <td className="product-price">
                                                <span className="unit-amount">${data.price.raw}</span>
                                            </td>

                                            <td className="product-quantity">
                                                <div className="input-counter">
                                                    <span 
                                                        className="minus-btn"
                                                        onClick={()=>{handleSubtractQuantity(data.id, data.quantity)}}
                                                    >
                                                        <i className='bx bx-minus'></i>
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        value={data.quantity} 
                                                        min="1" 
                                                        max={10} 
                                                        readOnly={true}
                                                        onChange={e => (e)}
                                                    />
                                                    <span 
                                                        className="plus-btn"
                                                        onClick={()=>{handleAddQuantity(data.id, data.quantity)}}
                                                    >
                                                        <i className='bx bx-plus'></i>
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="product-subtotal">
                                                <span className="subtotal-amount">${data.price.raw * data.quantity}</span>
                                            
                                                <Link href="#">
                                                    <a className="remove" onClick={(e)=>{e.preventDefault();handleRemove(data.id)}}>
                                                        <i className='bx bx-trash'></i>
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                    )) :
                                    <tr>
                                        <td className="product-thumbnail" colSpan="6">
                                            <p>Empty.</p>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="cart-buttons">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <Link href="/products-without-sidebar">
                                    <a className="optional-btn">Continue Shopping</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="cart-totals">
                                    <h3>Cart Totals</h3>

                                    <ul>
                                        <li>Subtotal <span>{cart.subtotal.formatted_with_symbol}</span></li>
                                        {/* <li>Shipping <span>$0.00</span></li> */}
                                        <li>Total <span>{cart.subtotal.formatted_with_symbol}</span></li>
                                    </ul>


                                    <button
                                        type="button" 
                                        className="default-btn" 
                                        disabled={cart.total_unique_items ===0 ?  true: false}
                                        onClick={procedCheckout}
                                    >Proceed to Checkout</button>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )

}

export default CartTable