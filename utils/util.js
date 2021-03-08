import { getFirebaseRB } from "../firebase";

export const getData = async (host) => {
  /****** Dev Config *****/
  // let domain = '.changofree.com';  
  /****** Dev Config *****/  
  let domain = '.localhost:3000';

  let urlUser;
  if (host.toString().includes(domain)) {
    urlUser = `usuarios/${host.split(domain)[0]}`;
  } else {
    urlUser = `dominios/${host.replace(".", "001100")}`;
  }
  if (host == "changofree.com") {
    return "404";
  }
  let client;
  let db = getFirebaseRB().ref(`${urlUser}`);

  return await new Promise((resolve) => {
    db.once("value", async (snapshopt) => {
      if (snapshopt.val() === null) {
        return resolve("404");
      } else {
        let value = snapshopt.val();
        if (value) {
          if (value.key_marca) {
            let db = getFirebaseRB().ref(`usuarios/${value.key_marca}`);
            await db
              .once("value", (snapshopt) => {
                client = snapshopt.val();
                resolve(client);
              })
              .catch((error) => {
                resolve("404");
              });
          } else {
            client = value;
            resolve(client);
          }
          client.pedidos = null;
          client.ventas = null;
        }
      }
    }).catch((error) => {
      resolve("404");
    });
  });
};
