import React from "react";
import { Button } from "react-bootstrap";

export default function CountButton({
  tScore,
  stations,
  lrStatus,
  longRouteScore,
  shorts,
  result,
}) {
  const scroll = (e) => {
    e.preventDefault();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  let data = [];

  const countScore = (e) => {
    e.preventDefault();

    data.push(tScore, stations);

    data.push(
      lrStatus === "done"
        ? longRouteScore
        : lrStatus === "notdone"
        ? -longRouteScore
        : 0
    );
    console.log(shorts);
    if (shorts.length)
      data.push(
        shorts
          .map((route) => {
            return route.status === "done"
              ? route.score
              : route.status === "notdone"
              ? -route.score
              : null;
          })
          .reduce((sum, num) => {
            return sum + num;
          })
      );
    console.log(data);
    const score = data.reduce((sum, num) => {
      return sum + num;
    });
    console.log(`final score`, score);
    result(score);

    scroll(e);
  };
  return (
    <div>
      <Button
        style={{
          position: "fixed",
          top: "12%",
          right: "20px",
          borderRadius: "50%",
          width: "80px",
          height: "80px",
          fontSize: "15px",
          padding: "5px",
        }}
        variant="info"
        onClick={countScore}
        type="submit"
      >
        count score <br></br> ✓
      </Button>
    </div>
  );
}
