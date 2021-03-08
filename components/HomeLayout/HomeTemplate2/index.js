import React, { useContext, useEffect, useState } from "react";
import { HomeTemplateStyle2 } from "./style.component";
import Link from "next/link";
import Image from "next/image";
import CardTemplate1 from "../../CardProducto/CardTemplate1";
import { ListProductsComponent } from "../../ListProduct";

const HomeTemplate2 = ({ client }) => {
  let Categorias = [];
  let Products = [];
  const ProductsDestacados = [];

  Categorias = Object.keys(client.categoria).map((e) => {
    return client.categoria[e];
  });
  Products = Object.keys(client.productos).map((e) => {
    if (client.productos[e].destacado) {
      ProductsDestacados.push(client.productos[e]);
    }
    return client.productos[e];
  });

  for (let i = 0; 3 > Categorias.length; i++) {
    if (Categorias[i]) {
      if (!Categorias[i].img) {
        Categorias[i].img = "/images/21.jpg";
      }
    } else {
      Categorias[i] = { img: "/images/21.jpg", name: "Ejemplo" };
    }
  }

  if (!Categorias || !Products) {
    return null;
  }
  return (
    <>
      <section id="categorias" className="mb-2 pt-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-12 first-category"
                  style={{ background: `url(${Categorias[0].img})` }}
                >
                  <Link
                    href={`/${client.marca}/productos?marca=${Categorias[0].name}`}
                  >
                    <button
                      className="btn-ver"
                      style={{
                        backgroundColor: client.colorBoton
                          ? client.colorBoton
                          : "#ff5f32",
                        color: client.colorBotonText
                          ? client.colorBotonText
                          : "white",
                      }}
                    >
                      Ver {Categorias[0].name}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-12 sec-category"
                  style={{ background: `url(${Categorias[1].img})` }}
                >
                  <Link
                    href={`/${client.marca}/productos?marca=${Categorias[1].name}`}
                  >
                    <button
                      className="btn-ver"
                      style={{
                        backgroundColor: client.colorBoton
                          ? client.colorBoton
                          : "#ff5f32",
                        color: client.colorBotonText
                          ? client.colorBotonText
                          : "white",
                      }}
                    >
                      Ver {Categorias[1].name}
                    </button>
                  </Link>
                </div>
                <div
                  className="col-12 sec-category"
                  style={{ background: `url(${Categorias[2].img})` }}
                >
                  <Link
                    href={`/${client.marca}/productos?marca=${Categorias[2].name}`}
                  >
                    <button
                      className="btn-ver"
                      style={{
                        backgroundColor: client.colorBoton
                          ? client.colorBoton
                          : "#ff5f32",
                        color: client.colorBotonText
                          ? client.colorBotonText
                          : "white",
                      }}
                    >
                      Ver {Categorias[2].name}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destacados">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h5 className="text-muted">TENDENCIA</h5>
              <h3>MÁS VENDIDOS</h3>
              <hr
                style={{
                  borderBottom: `3px solid ${client.colorBoton ? client.colorBoton :  '#ff5f32'}`,
                  width: "75px",
                  margin: "auto",
                }}
              />
            </div>
          </div>
          <ListProductsComponent
            products={ProductsDestacados}
            diseno={client.diseno}
            marca={client.marca}
          />
        </div>
      </section>
      <section id="productos">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h5 className="text-muted">MIRA TODAS NUESTRAS CATEGORIAS</h5>
              <h3>DESCUBRÍ TODAS NUESTRAS OFERTAS</h3>
              <hr
                style={{
                  borderBottom: `3px solid ${client.colorBoton ? client.colorBoton :  '#ff5f32'}`,
                  width: "75px",
                  margin: "auto",
                }}
              />
            </div>
          </div>
          <ListProductsComponent
            products={Products}
            diseno={client.diseno}
            marca={client.marca}
          />
          <div className="row my-4">
            <div className="col-12 mt-5 text-center">
              <Link as={`/${client.marca}/productos`} href="/[shop]/productos">
                <a>
                  <button
                    className="btn  btn-ver"
                    style={{
                      backgroundColor: client.colorBoton
                        ? client.colorBoton
                        : "#ff5f32",
                      color: client.colorBotonText
                        ? client.colorBotonText
                        : "white",
                    }}
                  >
                    VER TODOS LOS PRODUCTOS
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HomeTemplateStyle2 />
    </>
  );
};

export default HomeTemplate2;
