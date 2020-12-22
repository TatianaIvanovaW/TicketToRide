import React from "react";
import { ButtonGroup, Button, Form, Row } from "react-bootstrap";
import { img } from "../resurses/links";
import { useState } from "react";

export default function TrainButtons() {
  const [value1, set_value1] = useState(0);
  const [value2, set_value2] = useState(0);
  const [value3, set_value3] = useState(0);
  const [value4, set_value4] = useState(0);
  const [value6, set_value6] = useState(0);
  const [value8, set_value8] = useState(0);

  const trainScore = () => {
    return (
      value1 + value2 * 2 + value3 * 4 + value4 * 7 + value6 * 15 + value8 * 21
    );
  };

  console.log(trainScore());

  return (
    <div>
      <Form.Group>
        <Form.Label as="legend" column sm={2}>
          Trains:
        </Form.Label>
        <Row sm={10}>
          <ButtonGroup
            style={{ display: "flex", flexWrap: "wrap" }}
            size="lg"
            className="mb-2"
          >
            <div>
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
                  return value1 > 0 ? set_value1(value1 - 1) : null;
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
                  return value2 > 0 ? set_value2(value2 - 1) : null;
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
                  return value3 > 0 ? set_value3(value3 - 1) : null;
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
                  return value4 > 0 ? set_value4(value4 - 1) : null;
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
                  return value6 > 0 ? set_value6(value6 - 1) : null;
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
                  return value8 > 0 ? set_value8(value8 - 1) : null;
                }}
                variant="danger"
              >
                -1
              </Button>
            </div>
          </ButtonGroup>
        </Row>
      </Form.Group>
    </div>
  );
}
