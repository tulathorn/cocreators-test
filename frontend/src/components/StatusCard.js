import React from "react";
import { Card } from "antd";

const StatusCard = () => {
  return (
    <Card title={"website-name"} style={{ width: 300, margin: 10 }}>
      <p>{"url"}</p>
      <p>Code: {200}</p>
      <p>Status: {"ok"}</p>
    </Card>
  );
};

export default StatusCard;
