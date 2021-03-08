import React from "react";
import { getFirebaseRB } from "../firebase";
const RouterInitial = ({ domains }) => {
  console.log(domains);
  return (
    <>
      {domains.map((element, index) => {
        return <div key={index} ><a href={`https://${element}`}>{element}</a></div>;
      })}
    </>
  );
};

export default RouterInitial;
export const getServerSideProps = async ({ req, res }) => {
  let domains = [];
  await getFirebaseRB()
    .ref("usuarios")
    .once("value", (value) => {
      Object.keys(value.val()).map((key) => {
        let element = value.val()[key];
        console.log(element)
        if (element.dominio) {
          domains.push(element.dominio.url);
        } else {
          domains.push(`${element.marca}.changofree.com`);
        }
      });
    });
  return { props: { domains: domains } };
};
