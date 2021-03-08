import React, { useContext } from "react";
import CardTemplateStyle2 from "./style.component";
import Link from "next/link";

const CardTemplate2 = ({ product, marca }) => {
  return (
    <Link
      as={`/${marca}/producto/${product.name}`}
      href="/[shop]/producto/[id]"
    >
      <a>
        <div className="product-box product-wrap">
          <div className="img-wrapper text-center">
            <div className="front" >
              <span>
                <img
                style={{maxHeight: '370px'}}
                  src={product.img[0]}
                  className="img-fluid"
                  alt={product.name.split("-").join(' ')}
                />
              </span>
            </div>
            <div className="addtocart_btn">
              <button className="add-button add_cart mb-3" title="Add to cart">
                Ver producto
              </button>
            </div>
          </div>
          <div className="product-detail text-center">
            <span>
              <h6>{product.name.split("-").join(' ')}</h6>
            </span>
            <h4>${product.price} </h4>
          </div>
          <CardTemplateStyle2 />
        </div>
      </a>
    </Link>
  );
};

export default CardTemplate2;
