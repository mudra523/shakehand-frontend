import React from "react";
import { Card, Col, Row, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  UserOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

function InstituteProfile(props) {
  const { edit } = props;
  return (
    <Card
      size="small"
      title={
        <Row type="flex" justify="space-between">
          <div className="text_app_color text_large">Institute Name</div>
          <div>
            {edit === "edit" && (
              <button type="primary" className="green_button">
                <Link to="/institute/profile/edit" className="text_white">
                  Edit
                </Link>
              </button>
            )}
          </div>
        </Row>
      }
    >
      <Row type="flex" justify="space-between">
        <Col span={24}>
          <Avatar size={128} icon={<UserOutlined />} />
        </Col>
        <Col span={24} style={{ marginTop: "1em" }}>
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
        <Col span={24}>
          <TeamOutlined className="text_pink" />
          &nbsp; Institute Size: 250
        </Col>
        <Col span={24}>
          <SolutionOutlined className="text_pink" />
          &nbsp; Institute Type
        </Col>
        <Col span={24} style={{ marginTop: "1em" }}>
          <div className="text_app_color text_normal text_semibold">
            About Us
          </div>
          <Paragraph
            ellipsis={{
              rows: 2,
              expandable: true,
              symbol: "more",
            }}
            style={{ marginTop: "1em", whiteSpace: "normal" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
}

export default InstituteProfile;
