import { useState } from "react";

export const FiltrosModalComponent = ({
  categorias,
  closeFiltro,
  filterProducts,
}) => {
  // 0 = menor. 1 = mayor
  const [checkboxFilter, setCheckboxFilter] = useState(0);

  // 0 = Todos los productos
  const [categoriasFilter, setCategoriasFilter] = useState(0);

  return (
    <div className="lightbox">
      <div className="filtros">
        <div className="text-center pt-3 bg-white">
          <b>FILTRAR POR:</b>
          <hr />
        </div>
        <div className="text-center">
          <button
            id="btn-menorprecio"
            style={{
              backgroundColor: checkboxFilter ? "#00a1ff" : "white",
              color: checkboxFilter ? "white" : "black",
            }}
            onClick={() => {
              setCheckboxFilter(1);
            }}
          >
            Mayor precio
          </button>
          <button
            id="btn-mayorprecio"
            style={{
              backgroundColor: !checkboxFilter ? "#00a1ff" : "white",
              color: !checkboxFilter ? "white" : "black",
            }}
            onClick={() => {
              setCheckboxFilter(0);
            }}
          >
            Menor precio
          </button>
        </div>
        <div className="text-center mt-4">
          <p>Categorias:</p>
          <select
            onChange={(event) => {
              setCategoriasFilter(event.target.value);
            }}
          >
            <option value={0}>Todos los productos</option>
            {categorias.map((element) => {
              return <option value={element.name}>{element.name}</option>;
            })}
          </select>
        </div>
        <button
          className="button-filtros"
          style={{ bottom: "40px" }}
          onClick={() => {
            filterProducts({
              check: checkboxFilter,
              categoria: categoriasFilter,
            });
            closeFiltro(false);
          }}
        >
          APLICAR
        </button>
        <button
          className="button-filtros bg-transparent text-danger"
          onClick={() => {
            closeFiltro(false);
          }}
        >
          CERRAR
        </button>
      </div>
      <style jsx>
        {`
          #btn-menorprecio {
            border-radius: 10px 0px 0px 10px;
            border: 1px solid #00a1ff;
            background: white;
            padding: 15px;
          }
          #btn-mayorprecio {
            border-radius: 0px 10px 10px 0px;
            border: 1px solid #00a1ff;
            background: white;
            padding: 15px;
          }
          .lightbox {
            background: #0000004d;
            position: fixed;
            top: 0px;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999999999;
          }
          .filtros {
            background: #efefef;
            height: 50vh;
            width: 75vw;
            border-radius: 5px;
            box-shadow: 0px 0px 9px -4px black;
            position: relative;
          }
          .button-filtros {
            position: absolute;
            bottom: 0px;
            width: 100%;
            border: 0px;
            background: #00a1ff;
            height: 40px;
            color: white;
            font-weight: bold;
          }
          select {
            width: 90%;
            height: 40px;
          }
          @media screen and (min-width: 768) {
            .filtros {
              height: 20vw;
              width: 30vw;
            }
          }
        `}
      </style>
    </div>
  );
};
