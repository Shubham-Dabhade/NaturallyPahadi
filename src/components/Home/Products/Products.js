import React from "react";
import "./products.css";

const Products = () => {
  return (
    <div id="Products">
      <div className="inside-products-container">
        <div className="product-top-container">
          <div className="product-top-container-image-container">
            <img
              src={require("../../../assets/4x/flour_rice.png")}
              alt="natural-pahadi-flour-rice"
              className="product-top-container-image"
            />
          </div>
          <div className="product-top-container-data">
            <div className="product-top-container-data-title">
              FLOURS AND RICE
            </div>
            <div className="product-top-container-data-description">
              <p className="product-top-container-data-description-p">
                Naturally Pahadi’s single-grain, multi-grain flours and rice are
                minimally processed and sourced from small farms. We use a
                local-traditional variety of grains that are are indigenous to
                the Himalayan belt. The milling is done in water mills (gharats)
                via the cold press method which enhances the taste and preserves
                the nutrients.
              </p>
              <p className="product-top-container-data-description-p">
                Our flours are used to make healthy breads and Indian
                flatbreads. Our Red Rice is healthier option to any whole
                variety.{" "}
              </p>
              <p className="product-top-container-data-description-p">
                Our product range Five Grain Flour, Amaranth Flour (Rajgira),
                Whole Grains (Diabetic Flour), Masa Harina (Corn Flour),
                Buckwheat Flour(Kuttu), and Red Rice.
              </p>
            </div>
            <div className="product-top-container-data-button">
              Download Brochure
            </div>
          </div>
        </div>
        <div className="product-bottom-container">
          <div className="product-bottom-left-container">
            <div className="product-bottom-image-container">
              <img
                src={require("../../../assets/4x/fussion_tea.png")}
                alt=""
                className="product-bottom-image"
              />
            </div>
            <div className="product-bottom-data">
              <div className="product-bottom-title">INFUSION TEAS</div>
              <div className="product-bottom-description">
                <div className="product-bottom-description-p">
                  The flora, leaves, fruits and berries that go into the making
                  of our blends are sourced straight from the Himalayas. They
                  are fresh and flavourful with high healing properties which
                  help to rejuvenate the body and nourish the soul. Our herbs
                  infused brews are like a superfood and an amazing way to
                  provide deep nourishment.
                </div>
                <div className="product-bottom-description-p">
                  Our product range HACH CH’I, BĀĀN, RÚMUK and XÓPAN.
                </div>
                <div className="product-top-container-data-button">
                  Download Brochure
                </div>
              </div>
            </div>
          </div>
          <div className="product-bottom-right-container">
            <div className="product-bottom-image-container">
              <img
                src={require("../../../assets/4x/premix.png")}
                alt=""
                className="product-bottom-image"
              />
            </div>
            <div className="product-bottom-data">
              <div className="product-bottom-title">PREMIXES</div>
              <div className="product-bottom-description">
                <div className="product-bottom-description-p">
                  Made with love, most of our ingredients are directly sourced
                  from the Himalayan small scale farmers and are off the purest
                  quality.
                </div>
                <div className="product-bottom-description-p">
                  Our Premixes / Ready-to-cook are made so you can make healthy
                  food instantly. These products have minimal additives and
                  better packaging to increase the shelf life.
                </div>
                <div className="product-bottom-description-p">
                  Our product range Instant Barnyard Dosa, Instant Blueberry
                  Barnyard - Oats Pancake and Instant Choco Ragi - Buckwheat
                  Pancake.
                </div>
                <div className="product-top-container-data-button">
                  Download Brochure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
