import React from "react";
import { Card, Form, Input } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const AddCard = (props) => {
  const { value } = props;
  return (
    <Card
      title={`Add new website`}
      style={{ width: 300, margin: 10 }}
      actions={[<SaveOutlined key="save" />]}
    >
      <Form id="addWebsite">
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
      </Form>
    </Card>
  );
};

export default AddCard;
