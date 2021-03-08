import CardTemplate1 from "../CardProducto/CardTemplate1";
import CardTemplate2 from "../CardProducto/CardTemplate2";

export const ListProductsComponent = ({ products, diseno, marca }) => {
  const SelectCardLayout = ({ diseno, product }) => {
    switch (diseno) {
      case 1:
        return <CardTemplate1 product={product} marca={marca} />;
        break;
      case 2:
        return <CardTemplate2 product={product} marca={marca} />;
        break;
      default:
        return <CardTemplate1 product={product} marca={marca}/>;

        break;
    }
  };

  return (
    <div className="row pb-5">
      {products.length == 0 ? (
        <div class="py-5">
          <h3>¡Parece que no encontramos el producto que estas buscando!</h3>
        </div>
      ) : (
        products.map((e, index) => {
          if (index > 5) {
            return null;
          }
          return (
            <div key={index} className="col-lg-3 col-6 mt-3 pl-0 pr-0">
              <SelectCardLayout diseno={diseno} product={e} />
            </div>
          );
        })
      )}
    </div>
  );
};
