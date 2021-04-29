import React from "react";
import axios from "axios";

import { Button, Card, Form, Input } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const AddCard = (props) => {
  const { cancleState } = props;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onCancel = () => {
    cancleState(false);
  };
  return (
    <Card title={`Add new website`} style={{ width: 400, margin: 10 }}>
      <Form id="addWebsite" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Website URL"
          name="url"
          rules={[
            {
              required: true,
              message: "Please input your url with http:// or https://",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Website Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your website name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: 150, marginLeft: 2 }}
          >
            <SaveOutlined /> Save
          </Button>
          <Button onClick={onCancel} style={{ width: 150, marginLeft: 10 }}>
            Cancle
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddCard;
