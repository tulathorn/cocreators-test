import React, { useState } from "react";
import axios from "axios";

import { Button, Card, Form, Input, Row } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const StatusCard = (props) => {
  const { elementId, element, lists } = props;

  const [showForm, setShowForm] = useState(false);

  const url = "http://localhost:4400/api/";

  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .put(`${url}status`, {
        id: elementId,
        website_url: values.url,
        website_name: values.name,
      })
      .then((res) => {
        setShowForm(!showForm);
        lists(res.data);
      })
      .catch((err) => console.log(("Error", err)));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const onDelete = () => {
    console.log("Element ID", elementId);
    axios
      .delete(`${url}status`, {
        data: {
          id: 1,
        },
      })
      .then((res) => lists(res.data))
      .catch((err) => console.log(("Error", err)));
  };

  const DisplayData = (data) => (
    <React.Fragment>
      <p>
        URL:
        <a href={data.value.website_url}> {data.value.website_url}</a>
      </p>
      <p>Code: {data.value.code}</p>
      <p>Status: {data.value.status}</p>
      <Button
        onClick={toggleForm}
        type="primary"
        style={{ width: 150, marginLeft: 2 }}
      >
        <EditOutlined /> Edit
      </Button>
      <Button onClick={onDelete} style={{ width: 150, marginLeft: 10 }}>
        <DeleteOutlined /> Delete
      </Button>
    </React.Fragment>
  );

  const DisplayEditForm = (data) => (
    <React.Fragment>
      <Row>
        <p>
          Current URL:
          <a href={data.value.website_url}> {data.value.website_url}</a>
        </p>
      </Row>
      <Form id="edit" onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
          <Input
            initialvalues={data.value.website_url}
            value={data.value.website_url}
          />
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
          <Input
            initialvalues={data.value.website_name}
            value={data.value.website_name}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: 150, marginLeft: 2 }}
          >
            <SaveOutlined /> Save
          </Button>
          <Button onClick={toggleForm} style={{ width: 150, marginLeft: 10 }}>
            Cancle
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );

  return (
    <Card title={element.website_name} style={{ width: 400, margin: 10 }}>
      {showForm ? (
        <DisplayEditForm value={element} />
      ) : (
        <DisplayData value={element} />
      )}
    </Card>
  );
};

export default StatusCard;
