import React from "react";
import { Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const StatusCard = (props) => {
  const { value } = props;
  return (
    <Card title={value.website_name} style={{ width: 400, margin: 10 }}>
      <p>
        URL:
        <a href={value.website_url}> {value.website_url}</a>
      </p>
      <p>Code: {value.code}</p>
      <p>Status: {value.status}</p>
    </Card>
  );
};

export default StatusCard;
