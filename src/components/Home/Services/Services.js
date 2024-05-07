import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div id="Services">
      <div className="inside-service-container">
        <div className="service-top-container">
          <div className="service-top-image-container">
            <img
              src={require("../../../assets/4x/bulk_purchase.png")}
              alt="natural-pahadi-bulk-purchase"
              className="service-top-image"
            />
          </div>
          <div className="service-top-data">
            <div className="inside-service-top-data">
              <div className="service-top-title">
                NATURALLY PAHADI FOR BULK ORDERS
              </div>
              <div className="service-top-description">
                <p className="service-top-description-p">
                  Elevate your business and brand with unbeatable value for
                  money in bulk purchases of premium flours, red rice, premixes,
                  and teas. Tailored deliveries cater to your specific needs,
                  making us the ideal choice for manufacturers, caterers, and
                  bulk buyers seeking excellence without compromise.
                </p>
                <div className="service-enquiry-button">Enquire Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-bottom-container">
          <div className="service-bottom-left-container">
            <div className="insider-service-bottom-left-container">
                <div className="service-bottom-left-image-container">
                <img
                    src={require("../../../assets/4x/book.png")}
                    alt="download_brochure"
                    className="service-bottom-left-image"
                />
                </div>
                <div className="service-bottom-left-button-container">
                    <div className="service-bottom-left-button">Download Brochure</div> 
                </div>
            </div>
          </div>
          <div className="service-bottom-right-container">
            <div className="service-bottom-right-image-container">
              <img
                src={require("../../../assets/4x/gifts.png")}
                alt="naturally_pahadi_gifts"
                className="service-bottom-right-image"
              />
            </div>
            <div className="service-bottom-right-data">
                <div className="service-bottom-right-title">NATURALLY PAHADI FOR GIFTING SOLUTIONS</div>
                <div className="service-bottom-description">
                    <p className="service-bottom-description-p">
                        Transform your gifting experience. Explore our diverse range of gifting solutions, featuring both branded gift boxes and curated assortments. Our meticulously crafted gift boxes showcase a blend of our premium flours, pre-mixes, and teas. You can also opt for our products along with carefully selected partner products in customised branded options. Ideal for corporate gifting across various occasions, these curated brand boxes deliver a distinctive and thoughtful touch to every celebration.
                    </p>
                    <div className="service-enquiry-button">Enquire Now</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
