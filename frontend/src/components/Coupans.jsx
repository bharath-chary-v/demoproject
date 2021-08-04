import React from "react";
import CoupanListItem from "../components/CoupanListItem";
import { CardDeck } from "reactstrap";

const Coupans = ({coupans}) => {
  console.log(coupans);
  return (
    <CardDeck style={{ padding: "10px" }}>
      {coupans.map(coupan=> (
        <CoupanListItem
          key={coupan.id}coupan={coupan}
       
        />
      ))}
    </CardDeck>
  );
};

export default Coupans;
