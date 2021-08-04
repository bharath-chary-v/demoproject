import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const CoupanListItem = ({ coupan }) => {
  console.log(coupan);
  return (
    <Card
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to={`/coupans/${coupan.id}`}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <CardImg
          top
          height="200vh"
          src={`https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
`}
          alt="Coupan thumbnail"
          style={{ width: "50%" }}
        />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <span style={{ fontWeight: "bold" }}>Title:</span> {coupan.title}
          </CardTitle>
          <CardSubtitle>
            <span style={{ fontWeight: "bold" }}>Store:</span> {coupan.store}
          </CardSubtitle>
        </CardBody>
      </Link>
    </Card>
  );
};

export default CoupanListItem;
