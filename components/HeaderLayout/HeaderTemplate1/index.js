import React, { useContext, useEffect, useState } from "react";
import { HeaderStyleTemplate1 } from "./style.component";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "../../../context/UserContext";

const HeaderTemplate1 = ({ client }) => {
  const UserDataContext = useContext(UserContext);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    return () => {};
  });
  const calculateTotal = () => {
    let contador = 0;
    UserDataContext.carrito.forEach((element) => {
      contador = contador + element.price * element.cantidad;
    });
    return contador;
  };

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
      <header className="header-2">
        <div className="mobile-fix-option"></div>
        <div className="top-header" style={{backgroundColor: client.backgroundGeneral ? client.backgroundGeneral :  '#2d2a25'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li style={{color: client.backgroundGeneralTexto ? client.backgroundGeneralTexto :  'white'}}>Bienvenid@ a {client.marca}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu border-section border-top-0">
                <div className="menu-left">
                  <div className="navbar">
                    <span onClick={openNav}>
                      <i
                        className="fa fa-bars sidebar-bar"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div id="mySidenav" className="sidenav">
                      <span
                        className="sidebar-overlay"
                        onClick={closeNav}
                      ></span>
                      <nav>
                        <span onClick={closeNav}>
                          <div className="sidebar-back text-left">
                            <i
                              className="fa fa-angle-left pr-2"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </span>
                        <ul id="sub-menu" className="sm pixelstrap sm-vertical">
                          <li>
                            <Link as={`/${client.marca}`} href="/[shop]">
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/[shop]/productos"
                              as={`/${client.marca}/productos`}
                            >
                              Productos
                            </Link>
                          </li>
                          {/* <li id="hover-cls">
                            <Link
                              href="/[shop]/nosotros"
                              as={`/${client.marca}/nosotros`}
                            >
                              Nosotros
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
                </div>
                <div className="brand-logo layout2-logo">
                  <Link href="/[shop]" as={`/${client.marca}`}>
                    <span id="headerlogo">
                      {!client.logo ? (
                        <span className="navbar-brand">{client.marca.split("-").join(' ')}</span>
                      ) : (
                        <img
                          style={{ height: "70px", width: "auto" }}
                          src={client.logo}
                          alt={client.marca}
                        />
                      )}
                    </span>
                  </Link>
                </div>
                <div className="menu-right pull-right">
                  <div className="icon-nav">
                    <ul>
                      <li className="onhover-div ">
                        <div>
                          <i
                            onClick={openSearch}
                            className="fas fa-search"
                            style={{ fontSize: "24px" }}
                          ></i>
                          <i className="ti-search" onClick={openSearch}></i>
                        </div>
                        <div id="search-overlay" className="search-overlay">
                          <div>
                            <span
                              className="closebtn"
                              onClick={openSearch}
                              title="Close Overlay"
                            >
                              ×
                            </span>
                            <div className="overlay-content">
                              <div className="container">
                                <div className="row">
                                  <div className="col-xl-12">
                                    <form
                                      action={() =>
                                        router.push(
                                          `/${client.marca}/productos`
                                        )
                                      }
                                    >
                                      <div className="form-group">
                                        <input
                                          type="text"
                                          name="busqueda"
                                          className="form-control"
                                          id="exampleInputPassword1"
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
                      <li className="onhover-div mobile-cart">
                        <div style={{ position: "relative"}}>
                          <i
                            class="fa fa-shopping-cart"
                            style={{
                              color: "#222222",
                              fontSize: "24px",
                              display: "block",
                            }}
                          ></i>
                          {width ? (
                            <div
                              className={`${
                                UserDataContext.carrito.length == 0 &&
                                width < 768
                                  ? ""
                                  : "count"
                              }`}
                              style={{backgroundColor: client.colorBoton ? client.colorBoton :  '#ff5f32'}}
                            >
                              <b style={{ zIndex: "99999999999", color:client.colorBotonText? client.colorBotonText : 'white'}}>
                                {UserDataContext.carrito.length}
                              </b>
                            </div>
                          ) : null}
                          <i className="ti-shopping-cart"></i>
                        </div>
                        <ul className="show-div shopping-cart">
                          {UserDataContext.carrito.map((producto) => {
                            return (
                              <li>
                                <div className="media">
                                  <Link
                                    as={`/${client.marca}/producto/${producto.name}`}
                                    href={"/[shop]/producto/[id]"}
                                  >
                                    <Image
                                      className="mr-3"
                                      src={producto.img[0]}
                                      alt={producto.name}
                                      width={50}
                                      height={50}
                                    />
                                  </Link>
                                  <div className="media-body">
                                    <Link
                                      href={`/${client.marca}/producto/${producto.name}`}
                                    >
                                      <a className="">{producto.name.split("-").join(" ")}</a>
                                    </Link>
                                    <h4>
                                      <span>$ {producto.price}</span>
                                    </h4>
                                  </div>
                                </div>
                                <div className="close-circle">
                                  <span
                                    onClick={() => {
                                      deleteItemCarrito(producto);
                                    }}
                                  >
                                    <i
                                      className="fa fa-times"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </li>
                            );
                          })}

                          <li>
                            <div className="total">
                              <h5>
                                subtotal :<span>$ {calculateTotal()}</span>
                              </h5>
                            </div>
                          </li>
                          <li>
                            <div className="buttons">
                              <Link
                                href="/[shop]/checkout"
                                as={`/${client.marca}/checkout`}
                                className="checkout"
                              >
                                Continuar compra
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-nav-center">
                <nav id="main-nav">
                  <div className="toggle-nav"></div>
                  <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                    <li>
                      <div className="mobile-back text-right">
                        Back
                        <i
                          className="fa fa-angle-right pl-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>
                    <li>
                      <Link href="/[shop]" as={`/${client.marca}`}>
                        <a>Home</a>
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
                    {/* <li className="mega" id="hover-cls">
                      <Link as={`/${client.marca}/nosotros`} href="/[shop]/nosotros">
                        <a>Nosotros</a>
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderStyleTemplate1 />
    </div>
  );
};

export default HeaderTemplate1;
