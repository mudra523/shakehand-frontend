import React from "react";
import { Card, Col, Row } from "antd";
import {  Button } from "antd";
import {  UploadOutlined } from "@ant-design/icons";

function jobApplyCard(props) {
  return (
    <div>
      <Row>
        <Col offset={3}>
          <Card size="small" style={{ width: "100%" }}>
            <h2 className="text_blue">Require Documents</h2>
            <h3>1) Attach Resume</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
            <Col style={{ paddingBottom: "20px" }}>
              <Button
                icon={<UploadOutlined />}
                style={{ marginRight: "2px", borderRadius: "2px" }}
              >
                Click to Upload
              </Button>
            </Col>
            <h3>2) Attach CoverLetters</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <Col>
              <Button
                icon={<UploadOutlined />}
                style={{
                  marginRight: "2px",
                  borderRadius: "2px",
                  backgroundColor: "",
                }}
              >
                Click to Upload
              </Button>
            </Col>

            <Row>
              <Col offset={22}>
                <button
                  style={{
                    marginRight: "2px",
                    border: "0px",
                    borderRadius: "2px",
                    padding: "5px 20px 5px ",
                  }}
                  className="bg_green"
                >
                  Submit
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default jobApplyCard;
