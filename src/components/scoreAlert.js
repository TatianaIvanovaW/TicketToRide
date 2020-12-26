import React from "react";
import { Alert } from "react-bootstrap";
import { img } from "../resurses/links";

export default function ScoreAlert({ score, status }) {
  return (
    // <div style={{ position: "sticky", top: "0", width: "70%", zIndex: "10" }}>
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "37%",
        width: "400px",
        height: "298px",
        lineHeight: "40px",
        outline: "9999px solid rgba(0,0,0,0.5)",
        border: "solid grey 10px",
        marginLeft: "-150px",
        marginTop: "-100px",
        color: "black",
        textAlign: "center",

        zIndex: "10",
      }}
    >
      <Alert onClose={() => status()} dismissible variant="warning">
        <p style={{ fontSize: "25px", color: "black" }}>
          <img alt="train" src={img}></img> Final score is <b>{score} </b>
          <img alt="train" src={img}></img>
        </p>
        <p style={{ textAlign: "left", fontSize: "15px", color: "black" }}>
          The player with the longest continuous path of routes receives this
          special bonus card and can add <b>10</b> points to his score (in case
          of a tie, both players receive the points).<br></br> The continuous
          path may include loops and pass through the same city several times,
          but a given plastic train may never be used twice.
        </p>
      </Alert>
    </div>
  );
}
