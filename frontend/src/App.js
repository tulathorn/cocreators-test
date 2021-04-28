import React from "react";
import { Layout, Button, Row, Col, Card, DatePicker } from "antd";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;
const style = { background: "#0092ff", padding: "8px 0" };

const App = () => {
  return (
    <div>
      <Layout>
        <Header>
          <h1 style={{ color: "white" }}>Website monitor</h1>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <div className="site-layout-content">
            <Row justify="space-between">
              <Col span={8}>Number of source: {"<Response lenght>"}</Col>
              <Col span={2}>
                <Button type="primary" style={{ marginLeft: 8 }}>
                  Add website
                </Button>
              </Col>
            </Row>
            <Row
              justify="space-around"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Card title={"website-name"} style={{ width: 300, margin: 10 }}>
                <p>{"url"}</p>
                <p>Code: {200}</p>
                <p>Status: {"ok"}</p>
              </Card>
              <Card title="Card" style={{ width: 300, margin: 10 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" style={{ width: 300, margin: 10 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" style={{ width: 300, margin: 10 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" style={{ width: 300, margin: 10 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
