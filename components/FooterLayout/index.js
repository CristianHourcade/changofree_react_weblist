import React from "react";
import FooterTemplate1 from "./FooterTemplate1";
import FooterTemplate2 from "./FooterTemplate2";

const FooterComponent = ({ client }) => {
  if(!client){
    return null;
  }
  const SelectFooter = () => {
    switch (client.diseno) {
      case 1:
        return <FooterTemplate1 client={client}/>;
        break;
      case 2:
        return <FooterTemplate2 client={client}/>;
        break;
      default:
        return <FooterTemplate2 client={client}/>;
        break;
    }
  };
  return (
    <>
      <SelectFooter></SelectFooter>
    </>
  );
};

export default FooterComponent;
