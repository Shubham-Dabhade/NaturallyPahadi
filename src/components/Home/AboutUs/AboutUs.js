import React from "react";
import "./aboutus.css";
import Lenis from "lenis";

const AboutUs = () => {
  return (
    <div  id="AboutUs">
      <div className="inside-aboutus-container">
        <div className="aboutus-top-container">
          <div className="aboutus-top-container-title">
            WE ARE NATURALLY PAHADI
          </div>
          <div className="aboutus-top-container-description">
            <p className="aboutus-top-container-description-p">
              We are a brand that is all about conscious eating as a road to
              holistic health development. We believe in consuming a diversity
              of grains and other food products, for balanced life, without
              overindulgence, and wastage. Our products hence, are made with
              least processing, adopting traditional methods, learned from
              across the globe, for enhancing flavors, taste and nutritional
              values, in most natural ways.
            </p>
            <p className="aboutus-top-container-description-p">
              We specialize in co-creating new recipes, understanding each
              client’s needs individually. We believe in building strong and
              lasting relations based on the common love of providing healthy
              foods. The 3000+ farmers affiliated with the Self-Help Groups
              (SHGs) constitute our backbone and function as our equal partners
              in our collaborative efforts.
            </p>
          </div>
        </div>
        <div className="aboutus-bottom-container">
          <div className="aboutus-bottom-data-container">
            <div className="aboutus-bottom-title">
              NATURALLY PAHADI FOR KITCHENS AND CAFES
            </div>
            <div className="aboutus-bottom-description">
              <p className="aboutus-bottom-description-p">
                Our aim is to provide flours, rice, pre-mixes, and exotic teas.
                This division is created to meet the demands of kitchens and
                cafes so that they get to access the quality associated with
                Naturally Pahadi products. Our services are customized to
                enhance efficiency, convenience and satisfaction of our partners
                in the food and hospitality industry.
              </p>
              <p className="aboutus-bottom-description-p">
                You can expand your menu with our products. Our products will
                help you curate exciting recipes for your customers. We can also
                cater to bulk orders.
              </p>
            </div>
          </div>
          <div className="aboutus-bottom-image-container">
            <img src={require("../../../assets/4x/cheif.png")} className="cheif-png" alt="np-cheif" />
            <img src={require("../../../assets/4x/cheif-center.png")} className="cheif-center-png" alt="np-cheif" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
