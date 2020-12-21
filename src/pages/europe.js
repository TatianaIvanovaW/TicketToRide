import React from "react";
import Header from "../components/Header";
import {
  Form,
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useState } from "react";
import longRoute from "../data/long";
import shortRoute from "../data/short";
import { img } from "../resurses/links";

export default function Europe() {
  const [value1, set_value1] = useState(0);
  const [value2, set_value2] = useState(0);
  const [value3, set_value3] = useState(0);
  const [value4, set_value4] = useState(0);
  const [value6, set_value6] = useState(0);
  const [value8, set_value8] = useState(0);
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
    set_value1(0);
    set_value2(0);
    set_value3(0);
    set_value4(0);
    set_value6(0);
    set_value8(0);
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
      value1,
      value2 * 2,
      value3 * 4,
      value4 * 7,
      value6 * 15,
      value8 * 21,

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
              : route.status === "default"
              ? 0
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
      <div style={{ fontFamily: "'Nova Flat', cursive", margin: "20px" }}>
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
          <fieldset>
            <Form.Group>
              <Form.Label as="legend" column sm={2}>
                Routes
              </Form.Label>
              <Row sm={10}>
                <ButtonGroup
                  style={{ display: "flex", flexWrap: "wrap" }}
                  size="lg"
                  className="mb-2"
                >
                  <div>
                    {" "}
                    <Button
                      style={{ margin: "10px" }}
                      variant="secondary"
                      onClick={() => {
                        return set_value1(value1 + 1);
                      }}
                    >
                      1 <img alt="train" src={img}></img> trains: {value1}
                    </Button>
                    <Button
                      onClick={() => {
                        return set_value1(value1 - 1);
                      }}
                      variant="danger"
                    >
                      -1
                    </Button>
                  </div>
                  <div>
                    {" "}
                    <Button
                      style={{ margin: "10px" }}
                      variant="secondary"
                      onClick={() => {
                        return set_value2(value2 + 1);
                      }}
                    >
                      2 <img alt="train" src={img}></img> trains: {value2}
                    </Button>
                    <Button
                      onClick={() => {
                        return set_value2(value2 - 1);
                      }}
                      variant="danger"
                    >
                      -1
                    </Button>
                  </div>
                  <div>
                    {" "}
                    <Button
                      style={{ margin: "10px" }}
                      variant="secondary"
                      onClick={() => {
                        return set_value3(value3 + 1);
                      }}
                    >
                      3 <img alt="train" src={img}></img> trains: {value3}
                    </Button>
                    <Button
                      onClick={() => {
                        return set_value3(value3 - 1);
                      }}
                      variant="danger"
                    >
                      -1
                    </Button>
                  </div>

                  <div>
                    <Button
                      style={{ margin: "10px" }}
                      variant="secondary"
                      onClick={() => {
                        return set_value4(value4 + 1);
                      }}
                    >
                      4 <img alt="train" src={img}></img> trains: {value4}
                    </Button>
                    <Button
                      onClick={() => {
                        return set_value4(value4 - 1);
                      }}
                      variant="danger"
                    >
                      -1
                    </Button>
                  </div>
                  <div>
                    <Button
                      style={{ margin: "10px" }}
                      variant="secondary"
                      onClick={() => {
                        return set_value6(value6 + 1);
                      }}
                    >
                      6 <img alt="train" src={img}></img> trains: {value6}
                    </Button>
                    <Button
                      onClick={() => {
                        return set_value6(value6 - 1);
                      }}
                      variant="danger"
                    >
                      -1
                    </Button>
                  </div>
                  <div>
                    {" "}
                    <Button
                      style={{ margin: "10px" }}
                      variant="secondary"
                      onClick={() => {
                        return set_value8(value8 + 1);
                      }}
                    >
                      8 <img alt="train" src={img}></img> trains: {value8}
                    </Button>
                    <Button
                      onClick={() => {
                        return set_value8(value8 - 1);
                      }}
                      variant="danger"
                    >
                      -1
                    </Button>
                  </div>
                </ButtonGroup>
              </Row>
            </Form.Group>
          </fieldset>
          <Form.Label>
            Your long route (first choose the status then the route):
          </Form.Label>

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
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="secondary" onClick={countScore} type="submit">
              Count score
            </Button>
          </Col>
        </Form.Group>
      </div>
    </div>
  );
}
