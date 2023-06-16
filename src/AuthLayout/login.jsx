import React, { useState, useEffect } from "react";
import { Row, Col, Radio, Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Link,
} from "react-router-dom";

const Demo = () => {
  let history = useHistory();
  const [mainLayout, setMainLayout] = useState("auth");
  const [key, setKey] = useState("auth");
  const onFinish = (values) => {
    console.log("key:", key);
    localStorage.setItem("mainLayout", values.layout);
    setMainLayout(values.layout);
    {
      key === "institute" ? history.push("/institute") : history.push("/user");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    let K = localStorage.getItem("mainLayout");
    setKey(K);
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <Row
          gutter={[16, 16]}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
          }}
          className="bg_whitesmoke"
        >
          <Col xs={24} md={8} lg={6}>
            {/* {console.log("layout", mainLayout)} */}
            {/* {mainLayout && key === "institution" ? (
          <ILayout />
        ) : mainLayout && key === "user" ? (
          <ULayout />
        ) : ( */}
            <Card
              title={
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="text_xlarge text_semibold"
                >
                  Log In
                </div>
              }
              bordered={false}
            >
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label={<div className="text_semibold">Log In As</div>}
                  name="layout"
                >
                  <Radio.Group value={mainLayout}>
                    <Radio value="institution">Institution</Radio>
                    <Radio value="user">User</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item>
                  <Row
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Col>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>
                    </Col>
                    <Col>
                      <Link className="login-form-forgot" to="">
                        Forgot password
                      </Link>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="green_button"
                    style={{ width: "100%" }}
                  >
                    Log in
                  </Button>
                  <div style={{ marginTop: "1em" }}>
                    Or <Link to="">register now!</Link>
                  </div>
                </Form.Item>
              </Form>
            </Card>
            {/* )} */}
          </Col>
        </Row>
      </Route>
    </Router>
  );
};

export default Demo;
