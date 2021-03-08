export const CardTemplateStyle1 = () => {
  return (
    <style jsx="true">{`
      body {
        padding: 2rem 0rem;
      }

      .like {
        font-size: 1.5rem;
      }

      .btn {
        font-family: "TEMPLATE1";
        text-shadow: 0px 0px 3px black;
      }

      .price {
        font-size: 28px;
        font-weight: bold;
      }

      .card {
        transition: all 0.2s ease-in-out;
        height: 350px;

        border-radius: 10px;
        border: 0;
        box-shadow: 0px 0px 8px -5px #b9b9b9;
      }
      .card-img {
        height: 225px;
        height: 225px;
        border-bottom: 5px solid rgb(229 255 231);
        border-radius: 5px 5px 0px 0px;
      }
      .card-body {
        padding-top: 10px;
      }
      img {
        padding: 10px;
      }

      .btn-success {
        border-radius: 0px 0px 10px 10px;
      }

      .card:hover {
        box-shadow: 0px 0px 10px -5px black;
        transform: scale(1.05);
      }
      .card-title {
        font-size: 15px;
        margin-top: 10px;
      }
    `}</style>
  );
};
