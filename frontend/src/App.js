import React, { useState, useEffect } from "react";
import axios from "axios";

import { Layout, Button, Row, Col, Modal } from "antd";
import StatusCard from "./components/StatusCard";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [webLists, setWebLists] = useState("");
  const url = "http://localhost:4400/api/";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const getAllWebLists = () => {
    axios
      .get(`${url}status`)
      .then((response) => {
        console.log("response", response);
        setWebLists(response.data);
      })
      .catch((err) => console.log(`Error ${err}`));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getAllWebLists();
  }, []);

  return (
    <div>
      <Layout>
        <Header>
          <h1 style={{ color: "white" }}>Website monitor</h1>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <div className="site-layout-content">
            <Row justify="space-between">
              <Col span={8}>Number of source: {webLists.length}</Col>
              <Col span={2}>
                <Button
                  type="primary"
                  style={{ marginLeft: 8 }}
                  onClick={showModal}
                >
                  Add website
                </Button>
              </Col>
            </Row>
            <Row
              justify="space-around"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              {webLists ? (
                webLists.map((element) => (
                  <StatusCard key={element.id.toString()} value={element} />
                ))
              ) : (
                <p>loading ....</p>
              )}
            </Row>
          </div>
          <Modal
            title="Vertically centered modal dialog"
            centered
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
          </Modal>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
