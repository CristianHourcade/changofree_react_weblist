import React from "react";
import { getFirebaseRB } from "../firebase";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const RouterInitial = ({ domains }) => {
  const download = () => {
    document.open(
      "data:Application/octet-stream," + encodeURIComponent(domains)
    );
  };
  return (
    <>
      <a href="#" onClick={download} download="file.xml">Descargar XML</a>
      {domains}
    </>
  );
};

export default RouterInitial;
export const getServerSideProps = async ({ req, res }) => {
  const stream = new SitemapStream();
  let domains = [];
  await getFirebaseRB()
    .ref("usuarios")
    .once("value", (value) => {
      Object.keys(value.val()).map((key) => {
        let element = value.val()[key];
        console.log(element);
        if (element.dominio) {
          domains.push({
            url: "https://" + element.dominio.url,
            changefreq: "daily",
            priority: 0.3,
          });
        } else {
          domains.push({
            url: `https://${element.marca}.changofree.com`,
            changefreq: "daily",
            priority: 0.3,
          });
        }
        if (element.productos) {
          Object.keys(element.productos).map((key) => {
            domains.push({
              url: `https://${(element.dominio) ? element.dominio.url : element.marca+'.changofree.com'}/${element.marca}/producto/${element.productos[key].name}`,
              changefreq: "daily",
              priority: 0.3,
            });
          });
        }
      });
    });
  return {
    props: {
      domains: await (
        await streamToPromise(Readable.from(domains).pipe(stream))
      ).toString(),
    },
  };
};
