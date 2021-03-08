import React from "react";
import { HomeTemplateStyle1 } from "./style.component";
import { ListProductsComponent } from "../../ListProduct";
import Link from "next/link";

const HomeTemplate1 = ({ client }) => {
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

  if (!Categorias || !Products) {
    return null;
  }
  return (
    <>
      <section id="categorias" className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>CATEGORIAS MAS POPULARES</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            {!Categorias ? (
              <div className="col-12 text-center">
                <h5>
                  Cargá tus categorias con imagen para que se vean aca!
                  <br />
                  <small>Recomendamos 512px x 512px</small>
                </h5>
              </div>
            ) : (
              Categorias.map((e, index) => {
                if (e.img == "") {
                  return;
                }
                return (
                  <div key={index} className="col-lg-4 col-12 mt-4">
                    <Link href={`/${client.marca}/productos?marca=${e.name}`}>
                      <img
                        src={e.img}
                        alt={e.name}
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section id="productos" style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>DESCUBRI TODAS NUESTRAS OFERTAS</h3>
              <h5>MIRA TODAS NUESTRAS CATEGORIAS</h5>
              <hr />
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
                  <button className="btn btn-primary" style={{backgroundColor: client.colorBoton ? client.colorBoton :  '#ff5f32', color:client.colorBotonText ? client.colorBotonText :  'white'}}>
                    VER TODOS LOS PRODUCTOS
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="destacados" style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>LOS MAS VENDIDOS</h3>
              <hr />
            </div>
          </div>
          <ListProductsComponent
            products={ProductsDestacados}
            diseno={client.diseno}
            marca={client.marca}
          />
        </div>
      </section>
      <HomeTemplateStyle1 />
    </>
  );
};

export default HomeTemplate1;
