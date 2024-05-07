import React from 'react';
import "./banner.css"

const Banner = () => {
  return (
    <div className="Banner">
        <div className="banner-container">
            <div className="inside-banner-container">
                <div className="np-main-icon-container">
                    <img className='np-main-icon-img' src={require("../../../assets/4x/np_icon.png")} alt="np_main_image" />
                    <div className="np-main-icon-title">FOR KITCHENS & CAFES</div>
                    <div className="second-banner-image-container">
                        <img src={require("../../../assets/4x/cheif_cafe.png")} alt="cheif-cafe-products" className="cheif-cafe-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner