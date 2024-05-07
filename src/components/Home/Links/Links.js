import React from 'react';
import "./links.css";
import Lenis from 'lenis';
import AnchorLink from "react-anchor-link-smooth-scroll";


const Links = () => {
  return (
    <div className="Links">
        <div className="inside-links-container">
            <div className="main-links-container">
                <div className="inside-main-links-container">
                    <div className="main-links">
                        <AnchorLink href="#AboutUs" className="main-link">WHO ARE WE?</AnchorLink>
                    </div>
                    <div className="main-links">
                        <AnchorLink href="#Products" className="main-link">OUR PRODUCTS</AnchorLink>
                    </div>
                    <div className="main-links">
                        <a href="#" className="main-link">ENQUIRE NOW</a>
                    </div>
                    <div className="main-links">
                        <a href="#" className="main-link">FAQs</a>
                    </div>
                </div>
            </div>
            <div className="side-links-container">
                <div className="inside-side-links-container">
                    <div className="side-links">
                        <a href="#" className="side-link">BULK ORDERS</a>
                    </div>
                    <div className="side-links">
                        <a href="#" className="side-link">GIFTING SERVICES</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Links;