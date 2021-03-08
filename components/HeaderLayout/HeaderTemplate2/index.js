import React, { useContext, useEffect } from "react";
import { HeaderStyleTemplate2 } from "./style.component";
import { UserContext } from "../../../context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderTemplate2 = ({ client }) => {
  const router = useRouter();

  const UserDataContext = useContext(UserContext);

  const deleteItemCarrito = (producto) => {
    let carritoAux = UserDataContext.carrito.filter(function (
      value,
      index,
      arr
    ) {
      return producto.name != value.name;
    });
    localStorage.setItem(`carrito${client.marca}`, JSON.stringify(carritoAux));
    UserDataContext.setCarrito([...carritoAux]);
  };

  let Categorias = [];
  if (client.categoria) {
    Categorias = Object.keys(client.categoria).map((e) => {
      return client.categoria[e];
    });
  }

  const calculateTotal = () => {
    let contador = 0;
    UserDataContext.carrito.forEach((element) => {
      contador = contador + element.price * element.cantidad;
    });
    return contador;
  };

  const openCart = () => {
    document.getElementById("cart_side").classList.toggle("open-side");
  };
  const closeNav = () => {
    document.getElementById("mySidenav").classList.remove("open-side");
  };
  const openNav = () => {
    document.getElementById("mySidenav").classList.add("open-side");
  };

  const openSearch = () => {
    document.getElementById("search-overlay").classList.toggle("block");
  };

  return (
    <div id="header-nav" style={{ display: "none" }}>
      <header>
        <div class="mobile-fix-option"></div>
        <div
          class="top-header top-header-dark2"
          style={{
            backgroundColor: client.backgroundGeneral
              ? client.backgroundGeneral
              : "#2d2a25",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="header-contact">
                  <ul>
                    <li
                      style={{
                        color: client.backgroundGeneralTexto
                          ? client.backgroundGeneralTexto
                          : "white",
                      }}
                    >
                      Bienvenid@ a {client.marca}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container layout3-menu">
          <div class="row">
            <div class="col-sm-12 " style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "calc(100% - 30px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!client.logo ? (
                  <Link
                    href="/[shop]"
                    as={`/${client.marca}`}
                    className="navbar-brand"
                  >
                    <h3>{client.marca.split("-").join(" ")}</h3>
                  </Link>
                ) : (
                  <Link href="/[shop]" as={`/${client.marca}`}>
                    <img
                      style={{ height: "75px" }}
                      src={client.logo}
                      alt={client.marca}
                    />
                  </Link>
                )}
              </div>
              <div class="main-menu">
                <div class="menu-left around-border">
                  <div class="navbar">
                    <span onClick={openNav} style={{ zIndex: "100" }}>
                      <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                    </span>
                    <div id="mySidenav" class="sidenav">
                      <span class="sidebar-overlay" onClick={closeNav}></span>
                      <nav>
                        <span onClick={closeNav}>
                          <div class="sidebar-back text-left">
                            <i
                              class="fa fa-angle-left pr-2"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </span>
                        <ul id="sub-menu" class="sm pixelstrap sm-vertical">
                          <li>
                            <Link href="/[shop]" as={`/${client.marca}`}>
                              home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/[shop]/productos"
                              as={`/${client.marca}/productos`}
                            >
                              productos
                            </Link>
                          </li>
                          {/* <li id="hover-cls">
                            <Link
                              href="/[shop]/nosotros"
                              as={`/${client.marca}/nosotros`}
                            >
                              nosotros
                            </Link>
                          </li> */}
                          <li>
                            <hr />
                          </li>
                          {Categorias.map((e, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  href={{
                                    pathname: "/[shop]/productos",
                                    query: {
                                      shop: client.marca,
                                      marca: e.name,
                                    },
                                  }}
                                  as={`/${client.marca}/productos?marca=${e.name}`}
                                >
                                  <a>{e.name}</a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="main-menu-right">
                    <nav id="main-nav">
                      <ul
                        id="main-menu"
                        class="sm pixelstrap sm-horizontal light-font-menu"
                      >
                        <li>
                          <div class="mobile-back text-right">
                            Back
                            <i
                              class="fa fa-angle-right pl-2"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </li>
                        <li class="ml-4">
                          <Link href="/[shop]" as={`/${client.marca}`}>
                            home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/[shop]/productos"
                            as={`/${client.marca}/productos`}
                          >
                            productos
                          </Link>
                        </li>
                        {/* <li id="hover-cls">
                          <Link
                            href="/[shop]/nosotros"
                            as={`/${client.marca}/nosotros`}
                          >
                            nosotros
                          </Link>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div
                  class="absolute-logo"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "initial",
                  }}
                >
                  <div class="brand-logo" id="mob-brand">
                    <span id="headerlogo"> </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="menu-right pull-right">
                    <div>
                      <div class="icon-nav">
                        <ul>
                          <li class="onhover-div ">
                            <div>
                              <i
                                onClick={openSearch}
                                class="fas fa-search"
                                style={{ fontSize: "24px", display: "block" }}
                              ></i>
                              <i class="ti-search" onClick={openSearch}></i>
                            </div>
                            <div id="search-overlay" class="search-overlay">
                              <div>
                                <span
                                  class="closebtn"
                                  onClick={openSearch}
                                  title="Close Overlay"
                                >
                                  ×
                                </span>
                                <div class="overlay-content">
                                  <div class="container">
                                    <div class="row">
                                      <div class="col-xl-12">
                                        <form
                                          action={() =>
                                            router.push(
                                              `/${client.marca}/productos`
                                            )
                                          }
                                        >
                                          <div class="form-group">
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="exampleInputPassword1"
                                              name="busqueda"
                                              placeholder="Escribí el nombre del producto..."
                                            />
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="onhover-div mobile-cart">
                            <div
                              className="count"
                              style={{
                                backgroundColor: client.colorBoton
                                  ? client.colorBoton
                                  : "#ff5f32",
                                color: client.colorBotonText
                                  ? client.colorBotonText
                                  : "white",
                              }}
                            >
                              {UserDataContext.carrito.length}
                            </div>
                            <div onClick={openCart}>
                              <i
                                class="fa fa-shopping-cart"
                                style={{
                                  color: "#222222",
                                  fontSize: "24px",
                                  display: "block",
                                }}
                              ></i>
                              <i class="ti-shopping-cart"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="cart_side" class=" add_to_cart top">
        <a class="overlay" onClick={openCart}></a>
        <div class="cart-inner">
          <div class="cart_top">
            <h3>Mi carrito</h3>
            <div class="close-cart">
              <a onClick={openCart}>
                <i class="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="cart_media" style={{ height: "auto!important;" }}>
            <ul class="cart_product" style={{ padding: "15px 15px" }}>
              {UserDataContext.carrito.map((producto, index) => {
                return (
                  <li key={index}>
                    <div class="media">
                      <Link
                        as={`/${client.marca}/producto/${producto.name}`}
                        href={"/[shop]/producto/[id]"}
                      >
                        <img
                          alt={producto.name}
                          class="mr-3"
                          src={producto.img[0]}
                        />
                      </Link>
                      <div class="media-body">
                        <span>
                          <h4>{producto.name.split("-").join(" ")}</h4>
                        </span>
                        <h4>
                          <span>
                            $ {producto.price} x {producto.cantidad}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div class="close-circle">
                      <a
                        href="#"
                        onClick={() => {
                          deleteItemCarrito(producto);
                        }}
                      >
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
            <ul class="cart_total">
              <li>
                <div class="total">
                  {UserDataContext.carrito.length == 0 ? (
                    <h3>No hay carrito productos en tu carrito</h3>
                  ) : (
                    <div>
                      <b className="h3" style={{ paddingTop: "15px" }}>
                        Total: ${calculateTotal()}
                      </b>
                      <p className="mb-0">
                        <Link
                          href="/[shop]/checkout"
                          as={`/${client.marca}/checkout`}
                        >
                          <button
                            className="btn mt-3"
                            style={{
                              width: "100%",
                              backgroundColor: client.colorBoton
                                ? client.colorBoton
                                : "#ff5f32",
                              color: client.colorBotonText
                                ? client.colorBotonText
                                : "white",
                            }}
                          >
                            Continuar compra
                          </button>
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <HeaderStyleTemplate2 />
    </div>
  );
};

export default HeaderTemplate2;
