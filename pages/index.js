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

        domains.push({
          url: `https://${element.marca}.changofree.com`,
          changefreq: "daily",
          priority: 0.3,
        });
        if (element.productos) {
          Object.keys(element.productos).map((key) => {
            domains.push({
              url: `https://${element.marca + ".changofree.com"}/${
                element.marca
              }/producto/${element.productos[key].name}`,
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
