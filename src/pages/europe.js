import React from "react";
import Header from "../components/Header";
import { Form, Row, Button, Card, ListGroup, Alert } from "react-bootstrap";
import { useState } from "react";
import longRoutes from "../data/long";
import shortRoute from "../data/short";
import TrainButtons from "../components/TrainButtons";
import CountButton from "../components/CountButton";
import ScoreAlert from "../components/scoreAlert";

export default function Europe() {
  const [finalScore, set_finalScore] = useState(0);
  const [longRouteId, set_longRouteId] = useState(0);
  const [stations, set_stations] = useState(12);
  const [lrStatus, set_lrStatus] = useState("");
  const [tScore, set_tScore] = useState(0);
  const [shorts, set_Shorts] = useState([]);
  const [info, set_info] = useState(true);
  const [show, set_show] = useState(false);

  const result = (score) => {
    set_finalScore(score);
    set_show(true);
  };

  const setFalse = () => {
    set_show(false);
  };

  const shortRouteSorted = shortRoute.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const reset = () => {
    set_finalScore(0);
  };

  const countTrains = (value) => {
    set_tScore(value);
  };

  const getShortRoutes = (e, route) => {
    if (shorts.includes(route)) {
      const choosenRoute = shorts.find((shortRoute) => {
        return shortRoute === route;
      });
      choosenRoute.status = e.target.value;

      return shorts;
    } else {
      route.status = e.target.value;
      set_Shorts([...shorts, route]);

      return shorts;
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Nova Flat', cursive",
        justifyContent: "center",
      }}
    >
      <Header />
      {show ? <ScoreAlert status={setFalse} score={finalScore} /> : null}
      {info ? (
        <Alert
          style={{
            position: "sticky",
            top: "0",
            width: "100%",
            zIndex: "10",
          }}
          variant="warning"
        >
          <p>
            <br></br>
            You should choose at least
            {!shorts.length
              ? " 3 short routes"
              : shorts.length === 1
              ? " 2 short routes"
              : shorts.length === 2
              ? " 1 short route"
              : null}
            {longRouteId === 0 && shorts.length < 3 ? " and" : " "}
            {longRouteId !== 0 && shorts.length > 2 ? set_info(false) : null}
            {longRouteId === 0 || lrStatus === "" ? " 1 long route" : null}
          </p>
        </Alert>
      ) : null}

      <div>
        <Form style={{ margin: "20px" }}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Score : {finalScore}
            </Form.Label>
            <Button variant="warning" onClick={reset} type="submit">
              Reset
            </Button>
          </Form.Group>
          <TrainButtons score={countTrains} />
          <Form.Group>
            <Form.Label>
              <b style={{ fontSize: "20px" }}>Stations used:</b>
            </Form.Label>
            <Form.Control
              style={{
                padding: "10px",
                paddingTop: "12px",
              }}
              onChange={(e) => {
                set_stations(parseInt(e.target.value));
              }}
              as="select"
            >
              <option value={12}>0</option>
              <option value={8}>1</option> <option value={4}>2</option>
              <option value={0}>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Label>
            <b style={{ fontSize: "20px" }}>Your long route:</b>
          </Form.Label>
          <Form.Group
            style={{
              paddingTop: "12px",
            }}
          >
            <Form.Control
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
                set_longRouteId(parseInt(e.target.value));
              }}
              as="select"
            >
              <option value={0}>choose a route...</option>
              {longRoutes.map((route) => {
                return (
                  <option key={route.name} value={route.id}>
                    {route.name}
                  </option>
                );
              })}
            </Form.Control>
            <ListGroup
              onChange={(e) => {
                e.preventDefault();
                set_lrStatus(e.target.value);
              }}
            >
              <ListGroup.Item>
                <input
                  id="done"
                  name="status"
                  type="radio"
                  value="done"
                  style={{ marginRight: "5px" }}
                ></input>
                <label style={{ marginRight: "17px" }}> Done</label>

                <input
                  id="not done"
                  name="status"
                  type="radio"
                  value="notdone"
                  style={{ marginRight: "5px" }}
                ></input>
                <label> Not done</label>
              </ListGroup.Item>
            </ListGroup>
          </Form.Group>
        </Form>
        <Form.Group>
          <Form.Label>
            <b style={{ fontSize: "20px" }}>Your short routes:</b>
          </Form.Label>

          <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
            {shortRouteSorted.map((route) => {
              return (
                <Form
                  key={route.name}
                  onChange={(e) => {
                    getShortRoutes(e, route);
                  }}
                >
                  <Card style={{ width: "18rem", margin: "20px" }}>
                    <Card.Header
                      style={{
                        fontFamily: "'Fredericka the Great', cursive",
                        fontSize: "25px",
                      }}
                      key={route.name}
                    >
                      {route.name}
                    </Card.Header>
                    <ListGroup>
                      <ListGroup.Item>
                        <input
                          type="radio"
                          id="not done"
                          name="status"
                          value="notdone"
                          style={{ marginRight: "5px" }}
                        ></input>
                        <label style={{ marginRight: "17px" }}>Not done</label>

                        <input
                          type="radio"
                          id="done"
                          name="status"
                          value="done"
                          style={{ marginRight: "5px" }}
                        ></input>
                        <label style={{ marginRight: "17px" }}>Done</label>
                        <br></br>
                        <input
                          type="radio"
                          id="default"
                          name="status"
                          value="default"
                          style={{ marginRight: "5px" }}
                          defaultChecked
                        ></input>
                        <label style={{ marginRight: "17px" }}>
                          Not choosen
                        </label>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Form>
              );
            })}
          </div>
        </Form.Group>
        {longRouteId !== 0 && shorts.length > 2 ? (
          <CountButton
            tScore={tScore}
            stations={stations}
            lrStatus={lrStatus}
            longRouteId={longRouteId}
            shorts={shorts}
            result={result}
          />
        ) : null}
      </div>
    </div>
  );
}
