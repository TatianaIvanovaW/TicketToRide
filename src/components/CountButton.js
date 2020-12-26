import React from "react";
import { Button } from "react-bootstrap";
import longRoutes from "../data/long";

export default function CountButton({
  tScore,
  stations,
  lrStatus,
  longRouteId,
  shorts,
  result,
}) {
  const scroll = (e) => {
    e.preventDefault();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  let data = [];

  const long = longRoutes.find((route) => {
    return route.id === longRouteId;
  });

  console.log(`long`, long.score);

  const countScore = (e) => {
    e.preventDefault();

    data.push(tScore, stations);

    data.push(
      lrStatus === "done"
        ? long.score
        : lrStatus === "notdone"
        ? -long.score
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
          top: "11%",
          right: "20px",
          borderRadius: "50%",
          width: "90px",
          height: "90px",
          fontSize: "40px",
          padding: "5px",
        }}
        variant="warning"
        onClick={countScore}
        type="submit"
      >
        ✓
      </Button>
    </div>
  );
}
