import React, {Component, useState} from 'react';
import Slider from "react-slick";

function ProductImage({items}) {
    const [assets, setAssets] = useState(items)

    const [slider1, setSlider1] = useState(null)
    const [slider2, setSlider2] = useState(null)
    const [nav1, setNav1] = useState(slider1)
    const [nav2, setNav2] = useState(slider2)

    const renderSliderMainImages = () => {
        return assets.map(({id, url}) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={url} alt="image"/>
                    </div>
                </div>
            )
        })
    }

    const renderSliderSubImages = () => {
        return assets.map(({id, url}) => {
            return (
                <div key={id}>
                    <div className="item">
                        <img src={url} alt="image"/>
                    </div>
                </div>
            )
        })
    }


    return (
        <div className="products-page-gallery">
            <div className="product-page-gallery-main">
                <div>
                    <Slider
                        asNavFor={nav2}
                        ref={slider => (setSlider1(slider))}
                    >
                        {
                            renderSliderMainImages()
                        }
                    </Slider>
                </div>
            </div>

            <div className="product-page-gallery-preview">
                <div>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (setSlider2(slider))}
                        slidesToShow={5}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                        dots={false}
                    >
                        {
                            renderSliderSubImages()
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}


export default ProductImage;
