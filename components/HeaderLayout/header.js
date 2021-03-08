import React from "react";
import HeaderTemplate1 from "./HeaderTemplate1";
import HeaderTemplate2 from "./HeaderTemplate2";

const HeaderComponent = ({ client }) => {
  if(!client){
    return null;
  }
  const SelectHeader = () => {
    switch (client.diseno) {
      case 1:
        return <HeaderTemplate1 client={client}/>;
        break;
      case 2:
        return <HeaderTemplate2 client={client}/>;
        break;
      default:
        return <HeaderTemplate2 client={client}/>;
        break;
    }
  };
  return (
    <>
      <SelectHeader></SelectHeader>
    </>
  );
};

export default HeaderComponent;
