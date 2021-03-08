import Link from "next/link";
import React, { useContext } from "react";
import { FooterTemplateStyle2 } from "./style.component";

const FooterTemplate2 = ({ client }) => {
  const Categorias = [];
  if (client.categoria) {
    Object.keys(client.categoria).forEach((element) => {
      Categorias.push(client.categoria[element]);
    });
  }
  return (
    <>
      <footer>
        <div class="dark-layout" style={{backgroundColor: client.backgroundGeneral ? client.backgroundGeneral :  '#2d2a25'}}>
          <div class="container" >
            <section class="section-b-space border-b" style={{borderBottom: '1px solid'+(client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  '#2d2a25')}}>
              <div class="row footer-theme2">
                <div class="col-lg-6 mt-3">
                  <div class="footer-title footer-mobile-title">
                    <h4>about</h4>
                  </div>
                  <div class="footer-contant">
                    <div class="footer-logo">
                      {!client.logo ? (
                        <a class="navbar-brand" style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>{client.marca.replace('-', ' ')}</a>
                      ) : (
                        <img
                          src={client.logo}
                          alt={`Logo - ${client.marca}`}
                          style={{ height: "70px", width: "auto" }}
                        />
                      )}
                    </div>
                    <p style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>
                      <b>{client.marca.replace('-', ' ')}</b> es una tienda creada por Changofree.
                      El sitio cuenta con la seguridad necesaria para que
                      realices tus compras. Podés pagar por mercadopago para tu
                      tranquilidad.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 mt-3 mb-5">
                  <div class="footer-title">
                    <h4 style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}} >Contacto</h4>
                  </div>
                  <div class="footer-contant" style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>
                    {client.contacto ? (
                      <ul class="contact-details">
                        <li style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>Telefono: {client.contacto.whatsapp}</li>
                        <li style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>
                          Email: <span>{client.email}</span>
                        </li>
                        <li style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>Instagram: {client.contacto.instagram}</li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="dark-layout" style={{backgroundColor: client.backgroundGeneral ? client.backgroundGeneral :  '#2d2a25'}}>
          <div class="container">
            <section class="small-section">
              <div class="row footer-theme2" >
                <div class="col p-set">
                  <div class="footer-link">
                    <div class="footer-title">
                      <h4 style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}} >Categorias</h4>
                    </div>
                    <div class="footer-contant">
                      <ul>
                        {Categorias.map((e, index) => {
                          return (
                            <li key={index} style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>
                              <Link
                                href={{
                                  pathname: "/[shop]/productos",
                                  query: { shop: client.marca, marca:e.name },
                                }}
                                as={`/${client.marca}/productos?marca=${e.name}`}
                              >
                                <a style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white', lineHeight: "1.7"}}>{e.name}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="sub-footer darker-subfooter">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-md-6 col-sm-12">
                <div class="footer-end">
                  <p>Tienda creada por Changofree</p>
                </div>
              </div>
              <div class="col-xl-6 col-md-6 col-sm-12">
                <div class="payment-card-bottom">
                  <ul>
                    <li>
                      <span>
                        <img src="/images/icon/visa.png" alt="Visa" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img
                          src="/images/icon/mastercard.png"
                          alt="Mastercard"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <img
                          src="/images/icon/american-express.png"
                          alt="American Express"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterTemplateStyle2 />
    </>
  );
};

export default FooterTemplate2;
