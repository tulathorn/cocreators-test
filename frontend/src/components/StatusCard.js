import React from "react";
import { Card } from "antd";

const StatusCard = (props) => {
  const { value } = props;
  return (
    <Card title={value.website_name} style={{ width: 300, margin: 10 }}>
      <p>
        URL:
        <a> {value.website_url}</a>
      </p>
      <p>Code: {value.code}</p>
      <p>Status: {value.status}</p>
    </Card>
  );
};

export default StatusCard;
