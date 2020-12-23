import React from "react";
import Header from "../components/Header";
import { Form, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import longRoute from "../data/long";
import shortRoute from "../data/short";
import TrainButtons from "../components/TrainButtons";
import CountButton from "../components/CountButton";

export default function Europe() {
  const [name, set_name] = useState("");
  const [screenName, set_screenName] = useState("");
  const [finalScore, set_finalScore] = useState(0);
  const [longRouteScore, set_longRouteScore] = useState(0);
  const [stations, set_stations] = useState(12);
  const [lrStatus, set_lrStatus] = useState("");
  const [tScore, set_tScore] = useState(0);
  // const [show, setShow] = useState(true);

  const result = (score) => {
    set_finalScore(score);
    set_screenName(name);
  };

  const shortRouteSorted = shortRoute.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const reset = () => {
    set_finalScore(0);
  };

  let shorts = [];
  const countTrains = (value1) => {
    set_tScore(value1);
  };

  const getShortRoutes = (e, route) => {
    if (shorts.includes(route)) {
      const choosenRoute = shorts.find((shortRoute) => {
        return shortRoute === route;
      });
      choosenRoute.status = e.target.value;
      console.log(shorts);
      return shorts;
    } else {
      route.status = e.target.value;
      shorts.push(route);
      console.log(shorts);
      return shorts;
    }
  };

  return (
    <div>
      <Header />
      {/* {show ? (
        <Alert variant="info">
          <Alert.Heading>HI!!</Alert.Heading>
          <p>
            You should choose
            {!shorts.lenght
              ? " 3 short routes"
              : shorts.lenght === 1
              ? " 2 short routes"
              : shorts.lenght === 2
              ? " 1 short route"
              : null}
            {longRouteScore === 0 ? " and 1 long" : null}
          </p>
        </Alert>
      ) : null} */}
      <div
        style={{
          fontFamily: "'Nova Flat', cursive",
          margin: "20px",
          justifyContent: "center",
        }}
      >
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            {!screenName ? (
              <Col md={{ span: 3, offset: 0 }} sm={10}>
                <Form.Control
                  onChange={(e) => {
                    set_name(e.target.value);
                  }}
                  type="text"
                  placeholder="name"
                />
              </Col>
            ) : (
              <p>{name}</p>
            )}
            <Form.Label column sm={2}>
              Score : {finalScore}
            </Form.Label>
            <Button variant="secondary" onClick={reset} type="submit">
              Reset
            </Button>
          </Form.Group>
          <TrainButtons score={countTrains} />

          <Form.Label>Your long route:</Form.Label>

          <Form.Group>
            <Form.Control
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
                set_longRouteScore(parseInt(e.target.value));
              }}
              as="select"
            >
              <option value={0}>choose a route...</option>
              {longRoute.map((route) => {
                return (
                  <option key={route.name} value={route.score}>
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
                ></input>
                <label>Done</label>
              </ListGroup.Item>
              <ListGroup.Item>
                <input
                  id="not done"
                  name="status"
                  type="radio"
                  value="notdone"
                ></input>
                <label>Not done</label>
              </ListGroup.Item>
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Stations used:</Form.Label>
            <Form.Control
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
        </Form>
        <Form.Group>
          <Form.Label>Your short routes: </Form.Label>
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
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <input
                          type="radio"
                          id="not done"
                          name="status"
                          value="notdone"
                        ></input>
                        <label>Not done</label>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <input
                          type="radio"
                          id="done"
                          name="status"
                          value="done"
                        ></input>
                        <label style={{ margin: "17px" }}>done</label>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <input
                          type="radio"
                          id="default"
                          name="status"
                          value="default"
                          defaultChecked
                        ></input>
                        <label style={{ margin: "17px" }}>not choosen</label>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Form>
              );
            })}
          </div>
          ;
        </Form.Group>

        <CountButton
          tScore={tScore}
          stations={stations}
          lrStatus={lrStatus}
          longRouteScore={longRouteScore}
          shorts={shorts}
          result={result}
        />
      </div>
    </div>
  );
}
