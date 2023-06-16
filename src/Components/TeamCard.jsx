import React, { useState } from "react";
import { Card, Col, Row, Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  MailOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

function TeamCard(props) {
  return (
    <>
      <Row
        style={{
          marginBottom: "0.5em",
          display: "flex",
          justifyContent: "center",
        }}
        gutter={[16, 16]}
      >
        <Col xs={24} md={12} lg={12}>
          <Card size="small" style={{ width: "100%" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={4} lg={4}>
                <Avatar size={64} icon={<UserOutlined />} />
              </Col>
              <Col xs={24} md={20} lg={20}>
                <Row type="flex" justify="space-between">
                  <Col>
                    <div>
                      <UserOutlined className="text_pink" />
                      &nbsp; Mudra Koradia
                    </div>
                    <div>
                      <MailOutlined className="text_pink" />
                      &nbsp; mudrak@gmail.com
                    </div>
                    <div>
                      <EnvironmentOutlined className="text_pink" />
                      &nbsp; Location(Address+Country)
                    </div>
                  </Col>
                  <Col>
                    <button type="primary" className="green_button">
                      <Link to="/institute-jobs/1" className="text_white">
                        See Profile
                      </Link>
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <Card size="small" style={{ width: "100%" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={4} lg={4}>
                <Avatar size={64} icon={<UserOutlined />} />
              </Col>
              <Col xs={24} md={20} lg={20}>
                <Row type="flex" justify="space-between">
                  <Col>
                    <div>
                      <UserOutlined className="text_pink" />
                      &nbsp; Kewal Jani
                    </div>
                    <div>
                      <MailOutlined className="text_pink" />
                      &nbsp; kewalj@gmail.com
                    </div>
                    <div>
                      <EnvironmentOutlined className="text_pink" />
                      &nbsp; Location(Address+Country)
                    </div>
                  </Col>
                  <Col>
                    <button type="primary" className="green_button">
                      <Link to="/institute-jobs/1" className="text_white">
                        See Profile
                      </Link>
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default TeamCard;
