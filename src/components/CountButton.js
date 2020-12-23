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

    data.push(lrStatus === "done" ? longRouteScore : -longRouteScore);

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
          top: "25%",
          right: "20px",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          fontSize: "40px",
        }}
        variant="info"
        onClick={countScore}
        type="submit"
      >
        ✓
      </Button>
    </div>
  );
}
