import React, { useState } from 'react';
import Link from 'next/link';
import WishlistModal from '../Modals/WishlistModal';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/actions/securityAction';
import { useRouter } from 'next/router';


function TopHeader(){
    const customerReducer = useSelector((state)=>state.customerReducer)    
    const { loading, customer } = customerReducer
    const dispatch = useDispatch();
    const [wishlistModal, setWishlistModal] = useState(false)
    const router = useRouter()

    const toggleModalWishlist = () =>{
        setWishlistModal(!wishlistModal)
    }

    const handleLogout = e =>{
        e.preventDefault();
        console.log('logout')
        dispatch(userLogout())
        router.push("/")
    }

    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <ul className="header-contact-info">
                                <li>Welcome to Livani</li>
                                <li>Call: +1-541-754-3010</li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ul className="header-top-menu">
                                <li>
                                    <Link href={customer ? "/my-account" : "/login"}>
                                        <a>
                                            <i className='bx bxs-user'></i> My Account
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#toggleModalWishlist">
                                        <a onClick={toggleModalWishlist}>
                                            <i className='bx bx-heart'></i> Wishlist
                                        </a>
                                    </Link>
                                </li>

                                <li>
                                    {customer ? (
                                        <Link href="#">
                                            <a onClick={handleLogout}>
                                                <i className='bx bx-log-in'></i> Logout
                                            </a>
                                        </Link>
                                    ) : (
                                        <Link href="/login">
                                            <a>
                                                <i className='bx bx-log-in'></i> Login
                                            </a>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wishlist Modal */}
            <WishlistModal 
                onClick={toggleModalWishlist} 
                active={wishlistModal ? 'active' : ''} 
            />
        </>
    )
}


export default TopHeader;