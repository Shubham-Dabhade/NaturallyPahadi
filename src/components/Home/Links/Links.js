import React, { useState } from 'react';
import "./links.css";
import Lenis from 'lenis';
import AnchorLink from "react-anchor-link-smooth-scroll";


const Links = () => {
    const [open,setOpen] = useState(false);
    const email='dabhadeshubham83@gmail.com'

    // bulk order
    const bulk_subject = "Need to Order in Bulk"
    const bulk_body = "bulk need"

  return (
    <>
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
                            <AnchorLink href="#ContactUs" className="main-link">ENQUIRE NOW</AnchorLink>
                        </div>
                        <div className="main-links">
                            <a href="#" className="main-link">FAQs</a>
                        </div>
                    </div>
                </div>
                <div className="side-links-container">
                    <div className="inside-side-links-container">
                        <div className="side-links">
                            <a href={`mailto:${email}?subject=${encodeURIComponent(bulk_subject) || ''}&body=${encodeURIComponent(bulk_body) || ''}`} className="side-link">BULK ORDERS</a>
                        </div>
                        <div className="side-links">
                            <a href="#" className="side-link">GIFTING SERVICES</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`Links-alternative ${open?'links-alternative-overlap':""}`}>
            <nav className='nav-container'>
                <button className='nav-start-button' onClick={()=>{setOpen(!open)}}>
                    <div className="div-nav">
                        <div className="nav-lengths"></div>
                        <div className="nav-lengths"></div>
                        <div className="nav-lengths"></div>
                    </div>
                </button>
            </nav>
            <nav className={`slide-nav-container ${open? "slide-translate" : " "}`}>
                <div className="inside-slide-nav-container">
                    <button className='nav-close-button' onClick={()=>{setOpen(!open)}}>
                        <img className='nav-close-button-img' src={require("../../../assets/4x/forward.png")} alt="close-menu" />
                    </button>
                    <div className="slide-links-container">
                        <AnchorLink href="#AboutUs" onClick={()=>{setOpen(!open)}} className="slide-links">WHO ARE WE?</AnchorLink>
                        <AnchorLink href="#Products" onClick={()=>{setOpen(!open)}} className="slide-links">OUR PRODUCTS</AnchorLink>
                        <AnchorLink href="#ContactUs" onClick={()=>{setOpen(!open)}} className="slide-links">ENQUIRE NOW</AnchorLink>
                        <AnchorLink href="#" onClick={()=>{setOpen(!open)}} className="slide-links">FAQs</AnchorLink>
                        <AnchorLink href="#" onClick={()=>{setOpen(!open)}} className="slide-links">BULK ORDERS</AnchorLink>
                        <AnchorLink href="#" onClick={()=>{setOpen(!open)}} className="slide-links">GIFTING SERVICES</AnchorLink>
                    </div>
                </div>
            </nav>
        </div>
        <div className={`Blank ${open?'alt-blank':""}`}></div>
    </>
  )
}

export default Links;