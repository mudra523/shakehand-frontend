import React from "react";
import { Card, Col, Row, Avatar, Typography } from "antd";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import {
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  UserOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

function JobCard(props) {
  let history = useHistory();
  function handleDetail() {
    history.push("/user/institute/detail");
  }
  return (
    <Router>
      <Row
        style={{
          marginBottom: "1em",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col xs={24}>
          <Card
            size="small"
            title={
              <Row type="flex" justify="space-between">
                <div className="text_app_color text_large">Institute Name</div>
                <div>
                  <button
                    type="primary"
                    className="green_button"
                    onClick={handleDetail}
                  >
                    Detail
                  </button>
                </div>
              </Row>
            }
            style={{ width: "100%" }}
          >
            <Row>
              <Col span={4}>
                <Avatar size={64} icon={<UserOutlined />} />
              </Col>
              <Col span={10}>
                <Row type="flex" justify="space-between">
                  <Col span={24}>
                    <MailOutlined className="text_pink" />
                    &nbsp; shakehand@gmail.com
                  </Col>
                  <Col span={24}>
                    <GlobalOutlined className="text_pink" />
                    &nbsp; https//shakehand.com
                  </Col>
                  <Col span={24}>
                    <EnvironmentOutlined className="text_pink" />
                    &nbsp; Location(Address+Country)
                  </Col>
                </Row>
              </Col>
              <Col span={10}>
                <Row type="flex" justify="space-between">
                  <Col span={24}>
                    <TeamOutlined className="text_pink" />
                    &nbsp; Institute Size: 250
                  </Col>
                  <Col span={24}>
                    <SolutionOutlined className="text_pink" />
                    &nbsp; Institute Type
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row type="flex" justify="space-around">
              <Col span={24}>
                <Paragraph
                  ellipsis={{
                    rows: 1,
                    expandable: true,
                    symbol: "more",
                  }}
                  style={{ marginTop: "1em", whiteSpace: "normal" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Router>
  );
}

export default JobCard;
