import React from "react";
import { Card, Col, Row } from "antd";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  BookOutlined,
} from "@ant-design/icons";

function JobDetailCard(props) {
  let match = useRouteMatch("/institute-jobs/1"); 
  return (
    <Row style={{ marginTop: "0.5em" }}>
      <Card title="Job Post Name" style={{ width: "100%" }}>
        <Col>
          <Row style={{ borderBottom: "solid 1px #086972" }}>
            <table width="100%" style={{ marginBottom: "20px" }}>
              <tr>
                <td width="30%">
                  <EnvironmentOutlined />
                  Location
                </td>
                <td className="text_right">
                  <CalendarOutlined /> Date posted
                </td>
              </tr>
            </table>

            {/* <Row style={{paddingTop:'20px'}}> */}
            <h4 className="text_dark_green">Qualification</h4>
          </Row>
          <p style={{ padding: "0 0 0 20px" }}>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum..
          </p>
          <Row style={{ borderBottom: "solid 1px #086972" }}>
            <h4 className="text_dark_green">Role Discription</h4>
          </Row>
          <p style={{ padding: "0 0 0 20px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Row style={{ borderBottom: "solid 1px #086972" }}>
            <h4 className="text_dark_green">Pay or Rate</h4>
          </Row>
          <p style={{ padding: "0 0 0 20px" }}> 2000$</p>
          <Row style={{ borderBottom: "solid 1px #086972" }}>
            <h4 className="text_dark_green">Location</h4>
          </Row>
          <p style={{ padding: "0 0 0 20px" }}> Map</p>
          <p className="text_right">
            <button
              type="primary"
              className="bg_green text_center"
              style={{
                border: "0px",
                borderRadius: "5px",
                padding: "5px 20px 5px 20px",
              }}
            >
              {" "}
              Apply
            </button>
          </p>
        </Col>
      </Card>
    </Row>
  );
}

export default JobDetailCard;
