import React from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  DatePicker,
} from "antd";

const { Option } = Select;

function AddJob(props) {
  const onFinish = (values) => {
    console.log(values);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  return (
    <Row
      style={{ marginTop: "0.5em", display: "flex", justifyContent: "center" }}
    >
      <Col xs={24} md={16} lg={14}>
        <Card
          title={
            <div style={{ display: "flex", justifyContent: "center" }} className="text_large text_semibold">
              Add Job
            </div>
          }
        >
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "type"]}
              label="Job Type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="full_time ">Full Time</Option>
                <Option value="part_time">Part Time</Option>
                <Option value="internship">Internship</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["user", "opening_no"]}
              label="No of Opening"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 1,
                  max: 99,
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name={["user", "deadline"]}
              label="Last Date of Job"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name={["user", "salary"]} label="Salary">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item name={["user", "about"]} label="About Job">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              style={{ display: "flex", justifyContent: "end", float: "right" }}
            >
              <Button type="primary" htmlType="submit" className="green_button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      
    </Row>
  );
}

export default AddJob;
