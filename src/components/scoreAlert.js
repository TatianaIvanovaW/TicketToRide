import React from "react";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import longRoutes from "../data/long";

export default function ScoreAlert({ score, longRouteId }) {
  const [show, set_show] = useState(true);

  const long = longRoutes.find((route) => {
    return route.id === longRouteId;
  });
  console.log(`alert alert `, long);
  return (
    <div style={{ position: "sticky", top: "0", width: "100%", zIndex: "10" }}>
      {show ? (
        <div>
          <Alert onClose={() => set_show(false)} dismissible variant="dark">
            Final score is <b>{score} </b>
            <p>Your long route is {long.name} </p>
          </Alert>
        </div>
      ) : null}
    </div>
  );
}
