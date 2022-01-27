import React from "react";
import { Input, Button, Row, Col, Card } from "antd";

export default function Forma(params) {
  return (
    <Card>
      <Row>
        <Col span={8} offset={8}>
          <Input
            placeholder="Ime"
            value={params.studentFirstName}
            name="studentFirstName"
            onChange={params.onValueChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <Input
            placeholder="Prezime"
            value={params.studentLastName}
            name="studentLastName"
            onChange={params.onValueChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <Input
            placeholder="Email"
            value={params.studentEmail}
            name="studentEmail"
            onChange={params.onValueChange}
          />
        </Col>
      </Row>
      <Row>
        <Button onClick={!params.update ? params.onSub : params.onUpdate}>
          {!params.update ? "Submit" : "Update"}
        </Button>
      </Row>
    </Card>
  );
}
