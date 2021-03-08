import React, { useContext } from "react";
import {
  CardTemplateStyle1,
  HeaderStyleTemplate1,
  HomeTemplateStyle1,
} from "./style.component";
import Link from "next/link";

const CardTemplate1 = ({ product, marca, color }) => {
  return (
    <Link
      as={`/${marca}/producto/${product.name}`}
      href="/[shop]/producto/[id]"
    >
      <a>
        <div className="col-12">
          <div className="card cp">
            <img src={product.img[0]} style={{borderBottom: '5px solid #f3f3f3'}} className="card-img" alt={product.name.split("-").join(' ')} />
            <div className="card-img-overlay d-flex justify-content-end"></div>
            <div className="card-body">
              <div className="d-flex">
                <a className="price"> $ {product.price}</a>
              </div>

              <h4 className="card-title">{product.name.split("-").join(' ')}</h4>
            </div>
          </div>
          <CardTemplateStyle1 />
        </div>
      </a>
    </Link>
  );
};

export default CardTemplate1;
