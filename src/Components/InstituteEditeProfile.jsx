import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Input,
  Button,
  Upload,
  message,
  InputNumber,
  Avatar,
} from "antd";
import { LoadingOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

function InstituteEditeProfile(props) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(false);
  const onFinish = (values) => {
    console.log(values);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a number!",
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
            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="text_large text_semibold"
            >
              Edit Institute Profile
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
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "phone_number"]}
              label="Phone No."
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name={["user", "address"]}
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "website"]} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "about"]} label="About You">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={["user", "logo"]} label="Profile Picture">
              <Row gutter={[16,16]}>
                <Col>
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <Avatar size={128} icon={<UserOutlined />} />
                  )}
                </Col>
                <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <div style={{ marginTop: "1em" }} className="custom_upload">
                    <Upload
                      // name="avatar"
                      // listType="picture-card"
                      className="green_button text_white"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      Change Picture
                    </Upload>
                  </div>
                </Col>
              </Row>
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

export default InstituteEditeProfile;
