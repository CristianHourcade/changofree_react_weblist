import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ListProductsComponent } from "../../ListProduct";
import { FiltrosModalComponent } from "../../Modal/FiltrosModal";
import ProductosTemplateStyle1 from "./style.component";

const ProductosTemplate1 = ({
  products,
  diseno,
  categorias,
  marca,
  filter,
}) => {
  const [isFiltro, setFiltro] = useState(false);
  const [productFilter, setProductFilter] = useState(products);
  const [textFiltro, setTextFiltro] = useState(null);

  const filterProducts = (filters) => {
    let aux = [];
    if (filters.categoria != 0) {
      setTextFiltro(filters.categoria);
      products.forEach((element) => {
        if (element.category == filters.categoria) {
          aux.push(element);
        }
      });
    } else if (filter.busqueda) {
      products.forEach((element) => {
        if (
          element.name
            .toUpperCase()
            .trim()
            .match(filters.busqueda.toUpperCase().trim())
        ) {
          aux.push(element);
        }
      });
    } else {
      aux = products;
    }
    aux.sort(function (a, b) {
      if (a.price > b.price) {
        return filters.check ? -1 : 1;
      }
      if (a.price < b.price) {
        return filters.check ? 1 : -1;
      }
      return 0;
    });
    setProductFilter(aux);
  };

  useEffect(() => {
    console.log(filter);
    // Filter - prop - It's router query param, that could be categoria or busqueda
    if (filter.marca) {
      setTextFiltro(filter.marca);
      filterProducts({ categoria: filter.marca });
    } else if (filter.busqueda) {
      filterProducts({ busqueda: filter.busqueda, categoria: 0 });
    }
  },[]);

  return (
    <>
      <section className="pt-0" style={{ backgroundColor: "whitesmoke" }}>
        <div className="container">
          <div className="row">
            <div className="col-9 py-3">
              <Link href="/[shop]" as={`/${marca}`}>
                <a style={{ fontSize: "12px" }} className="no-link mx-2">Inicio </a>
              </Link>
              /
              <Link href="/[shop]/productos" as={`/${marca}/productos`}>
                <a style={{ fontSize: "12px" }} className="no-link mx-2">Productos </a>
              </Link>
              {textFiltro ? (
                <>
                  /
                  <Link
                    href="/[shop]/productos"
                    as={`/${marca}/productos?marca=${textFiltro}`}
                  >
                    <a style={{ fontSize: "12px" }} className="no-link mx-2"><b>{textFiltro} </b></a>
                  </Link>
                </>
              ) : null}
            </div>
            <div className="col-3 py-3 d-flex justify-content-end">
              <button
                style={{ fontSize: "12px" }}
                className="btn-filtrar"
                onClick={() => {
                  setFiltro(true);
                }}
              >
                Filtrar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="productos" className="mt-0 pt-0">
        <div className="container">
          <div className="row">
            <div class="col-12">
              <ListProductsComponent
                products={productFilter}
                diseno={diseno}
                marca={marca}
              />
            </div>
          </div>
        </div>
      </section>
      <ProductosTemplateStyle1 />
      <span style={{ display: isFiltro ? "block" : "none" }}>
        <FiltrosModalComponent
          categorias={categorias}
          closeFiltro={setFiltro}
          filterProducts={filterProducts}
        />
      </span>
    </>
  );
};

export default ProductosTemplate1;
