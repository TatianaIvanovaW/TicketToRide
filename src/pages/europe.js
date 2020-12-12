import React from "react";
import Header from "../components/Header";
import { Form, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import longRoute from "../data/long";
import shortRoute from "../data/short";

export default function Europe() {
  const img = "https://img.icons8.com/android/24/000000/railroad-car.png";
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

  const shortRouteSorted = shortRoute.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  // console.log(longRoute);
  // console.log(shortRoute.length);

  console.log(stations);

  let data = [
    value1,
    value2 * 2,
    value3 * 4,
    value4 * 7,
    value6 * 15,
    value8 * 21,
    parseInt(longRouteScore),
    stations,
  ];

  console.log(`data array`, data);

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

  const countScore = (e) => {
    e.preventDefault();
    const sunShort = dataShort.reduce((sum, num) => {
      return sum + num;
    });
    console.log(sunShort);
    data.push(sunShort);
    console.log(`hew`, data);
    const score = data.reduce((sum, num) => {
      return sum + num;
    });
    console.log(`final score`, score);
    scroll(e);
    set_screenName(name);
    set_finalScore(score);
  };
  let dataShort = [];
  const checkbox = (e) => {
    dataShort.push(parseInt(e.target.value));
    console.log(dataShort);
  };

  return (
    <div>
      <Header />
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
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Routes
            </Form.Label>
            <Row sm={10}>
              <ButtonGroup size="lg" className="mb-2">
                <Button
                  onClick={() => {
                    return set_value1(value1 + 1);
                  }}
                >
                  1 <img alt="train" src={img}></img> trains: {value1}
                </Button>
                <Button
                  onClick={() => {
                    return set_value2(value2 + 1);
                  }}
                >
                  2 <img alt="train" src={img}></img> trains: {value2}
                </Button>
                <Button
                  onClick={() => {
                    return set_value3(value3 + 1);
                  }}
                >
                  3 <img alt="train" src={img}></img> trains: {value3}
                </Button>
                <Button
                  onClick={() => {
                    return set_value4(value4 + 1);
                  }}
                >
                  4 <img alt="train" src={img}></img> trains: {value4}
                </Button>
                <Button
                  onClick={() => {
                    return set_value6(value6 + 1);
                  }}
                >
                  6 <img alt="train" src={img}></img> trains: {value6}
                </Button>
                <Button
                  onClick={() => {
                    return set_value8(value8 + 1);
                  }}
                >
                  8 <img alt="train" src={img}></img> trains: {value8}
                </Button>
              </ButtonGroup>
            </Row>
          </Form.Group>
        </fieldset>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Your long route:</Form.Label>
          <Form.Control
            onChange={(e) => {
              set_longRouteScore(e.target.value);
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
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
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
        <Form.Group>
          <Form.Label>Your short routes: </Form.Label>
          <div key={`inline-checkbox`} className="mb-3">
            {shortRouteSorted.map((route) => {
              return (
                <Form.Check
                  onChange={checkbox}
                  key={route.name}
                  value={route.score}
                  label={route.name}
                  type="checkbox"
                  id={`inline-checkbox-2`}
                />
              );
            })}
          </div>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={countScore} type="submit">
              Count score
            </Button>
            <Button onClick={reset} type="submit">
              Reset
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}