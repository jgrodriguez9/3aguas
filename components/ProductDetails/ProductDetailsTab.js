import React, {Component, useState} from 'react';
import Link from 'next/link';

function ProductDetailsTab({item}) {

    const [product, setProduct] = useState(item)
    const openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }


    return (
        <div className="tab products-details-tab">
            <ul className="tabs">
                <li
                    onClick={(e) => {
                        e.preventDefault();
                        openTabSection(e, 'tab1')
                    }}
                    className="current"
                >
                    <a href="#">
                        <div className="dot"></div>
                        Description
                    </a>
                </li>

                <li
                    onClick={(e) => {
                        e.preventDefault();
                        openTabSection(e, 'tab3')
                    }}
                >
                    <a href="#">
                        <div className="dot"></div>
                        Shipping
                    </a>
                </li>

            </ul>

            <div className="tab-content">
                <div id="tab1" className="tabs-item">
                    <div className="products-details-tab-content">
                        <p>{product.description}</p>
                    </div>
                </div>


                <div id="tab3" className="tabs-item">
                    <div className="products-details-tab-content">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                <tr>
                                    <td>Shipping</td>
                                    <td>This item Ship to USA</td>
                                </tr>

                                <tr>
                                    <td>Delivery</td>
                                    <td>
                                        Estimated between Wednesday 07/31/2020 and Monday 08/05/2020 <br/>
                                        Will usually ship within 1 bussiness day.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );

}

export default ProductDetailsTab;