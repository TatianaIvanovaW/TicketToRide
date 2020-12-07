import React from "react";
import { Button, Form } from "react-bootstrap";

export default function ResetButton() {
  return (
    <div>
      <Form inline>
        <Button variant="info">Reset</Button>
      </Form>
    </div>
  );
}
