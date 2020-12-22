import React from "react";
import Header from "../components/Header";
import { Form, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import longRoute from "../data/long";
import shortRoute from "../data/short";
import TrainButtons from "../components/TrainButtons";

export default function Europe() {
  const [name, set_name] = useState("");
  const [screenName, set_screenName] = useState("");
  const [finalScore, set_finalScore] = useState(0);
  const [longRouteScore, set_longRouteScore] = useState(0);
  const [stations, set_stations] = useState(12);
  const [lrStatus, set_lrStatus] = useState("");

  const shortRouteSorted = shortRoute.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  let data = [];

  console.log(`long route`, lrStatus);

  const reset = () => {
    set_finalScore(0);
    set_screenName("");
    set_longRouteScore(0);
  };

  const scroll = (e) => {
    e.preventDefault();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  let shorts = [];

  const countScore = (e) => {
    data.push(
      // value1,
      // value2 * 2,
      // value3 * 4,
      // value4 * 7,
      // value6 * 15,
      // value8 * 21,

      stations
    );
    const longRoute = lrStatus === "done" ? longRouteScore : -longRouteScore;

    data.push(longRoute);

    e.preventDefault();

    console.log(data);
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
    scroll(e);
    set_screenName(name);
    set_finalScore(score);
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
          <TrainButtons />

          <Form.Label>Your long route:</Form.Label>

          <Form.Group>
            <Form.Control
              onChange={(e) => {
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
        </Form.Group>

        <Button
          style={{
            position: "fixed",
            top: "12%",
            right: "20px",
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            fontSize: "40px",
          }}
          variant="success"
          onClick={countScore}
          type="submit"
        >
          ✓
        </Button>
      </div>
    </div>
  );
}
