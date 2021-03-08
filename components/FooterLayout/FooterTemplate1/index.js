import Link from "next/link";
import React, { useContext } from "react";
import { FooterTemplateStyle1 } from "./style.component";

const FooterTemplate1 = ({ client }) => {
  const Categorias = [];
  if(client.categoria){
    Object.keys(client.categoria).forEach((element) => {
      Categorias.push(client.categoria[element]);
    });
  }
  return (
    <>
      <footer className="footer-light" >
        <section className="section-b-space light-layout pt-5" style={{backgroundColor: client.backgroundGeneral ? client.backgroundGeneral :  '#2d2a25'}}>
          <div className="container">
            <div className="row footer-theme partition-f" >
              <div className="col-lg-4 col-md-6">
                <div className="footer-contant">
                  <div className="footer-logo">
                    {!client.logo ? (
                      <a className="navbar-brand">{client.marca.replace('-', ' ')}</a>
                    ) : (
                      <img
                        src={client.logo}
                        alt={`Logo - ${client.marca}`}
                        style={{ height: "70px", width: "auto" }}
                      />
                    )}
                  </div>
                  <p  style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>
                    <b>{client.marca.replace('-', ' ')}</b> es una tienda creada por Changofree.
                    El sitio cuenta con la seguridad necesaria para que realices
                    tus compras. Podés pagar por mercadopago para tu
                    tranquilidad.
                  </p>
                </div>
              </div>
              <div
                className="col offset-xl-1 right-category mt-3"
                style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white',textAlign: "right" }}
              >
                <div className="sub-title">
                  <div
                    className="footer-title"
                    style={{ marginBottom: "15px", paddingBottom: "15px" }}
                  >
                    <h4>Categorias</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      {Categorias.map((e, index) => {
                        return (
                          <li key={index} style={{ marginLeft: "20px" }}>
                            <Link href={{
                                    pathname: "/[shop]/productos",
                                    query: { shop: client.marca, marca:e.name },
                                  }} className="mr-3">
                              <span>{e.name}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-12 d-flex py-3">
                <div className="footer-end my-auto">
                  <p className="mb-0">Tienda Creada por Changofree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterTemplateStyle1 />
    </>
  );
};

export default FooterTemplate1;
