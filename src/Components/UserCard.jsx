import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  BookOutlined,
  TeamOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

function JobCard(props) {
  const { layout } = props;
  let history = useHistory();

  function handleExpand() {
    history.push("/institute/jobs/detail");
  }

  function handleApply() {
    history.push("/user/jobs/apply");
  }
  return (
    <div>
      <Router>
        <Row style={{ marginBottom: "0.5em", display: "flex", justifyContent: "center" }}>
          <Col xs={24}>
            <Card
              size="small"
              title={
                <Row type="flex" justify="space-between">
                  <div className="text_app_color text_large ">Job Title</div>
                  {layout === "institute" ? (
                    <div>
                      <button
                        type="primary"
                        className="green_button"
                        onClick={handleExpand}
                      >
                        Expand
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        type="primary"
                        className="green_button"
                        onClick={handleApply}
                      >
                        Apply Now
                      </button>
                    </div>
                  )}
                </Row>
              }
              style={{ width: "100%" }}
            >
              <Row type="flex" justify="space-between">
                <Col>
                  <EnvironmentOutlined className="text_pink" />
                  &nbsp; Location
                </Col>
                <Col>
                  <BookOutlined className="text_pink" />
                  &nbsp; Institite Name
                </Col>
                <Col>
                  <TeamOutlined className="text_pink" />
                  &nbsp; Openings: 5
                </Col>
                <Col>
                  <SolutionOutlined className="text_pink" />
                  &nbsp; Full Time
                  {/* Part Time 
                Internship */}
                </Col>
                <Col>
                  <CalendarOutlined className="text_pink" />
                  &nbsp; Date posted
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
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Paragraph>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default JobCard;
