import Head from "next/head";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export const HeadTag = ({ client }) => {
  return (
    <Head>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      {client.logo ? (
        <link rel="icon" href={client.logo} />
      ) : null}

      <title>{client.marca} - Tienda online - Toto sos crack</title>
      
      <meta
        name="description"
        content="This is an example of a meta description. 
This will often show up in search results."
      ></meta>
    </Head>
  );
};
