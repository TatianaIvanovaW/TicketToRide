import React from "react";
import { ButtonGroup, Button, Form, Row } from "react-bootstrap";
import { img } from "../resurses/links";
import { useState, useEffect } from "react";

export default function TrainButtons({ score }) {
  const [value1, set_value1] = useState(0);
  const [value2, set_value2] = useState(0);
  const [value3, set_value3] = useState(0);
  const [value4, set_value4] = useState(0);
  const [value6, set_value6] = useState(0);
  const [value8, set_value8] = useState(0);

  const result =
    value1 + value2 * 2 + value3 * 4 + value4 * 7 + value6 * 15 + value8 * 21;

  useEffect(() => {
    score(result);
  }, [result, score]);

  return (
    <div>
      <Form.Group>
        <Form.Label as="legend" column sm={2}>
          <b style={{ fontSize: "20px" }}>Trains:</b>
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
                onClick={(e) => {
                  e.preventDefault();

                  return value1 < 4 ? set_value1(value1 + 1) : null;
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
                  return value2 < 33 ? set_value2(value2 + 1) : null;
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
                  return value3 < 31 ? set_value3(value3 + 1) : null;
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
                  return value4 < 29 ? set_value4(value4 + 1) : null;
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
                  return value6 < 2 ? set_value6(value6 + 1) : null;
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
              <Button
                style={{ margin: "10px" }}
                variant="secondary"
                onClick={() => {
                  return value8 < 1 ? set_value8(value8 + 1) : null;
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
