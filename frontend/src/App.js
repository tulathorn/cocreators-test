import React, { useState, useEffect } from "react";
import axios from "axios";

import { Layout, Button, Row, Col } from "antd";
import AddCard from "./components/AddCard";
import StatusCard from "./components/StatusCard";

import "antd/dist/antd.css";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  const [webLists, setWebLists] = useState("");
  const url = "http://localhost:4400/api/";

  const [showAddCard, setShowAddCards] = useState(false);

  const addWebsite = () => {
    setShowAddCards(!showAddCard);
  };

  const getAllWebLists = () => {
    axios
      .get(`${url}status`)
      .then((response) => {
        console.log("response", response);
        setWebLists(response.data);
      })
      .catch((err) => console.log(`Error ${err}`));
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
              <Col span={4}>
                <Button
                  type="primary"
                  style={{ marginLeft: 8 }}
                  onClick={addWebsite}
                >
                  Add website
                </Button>
              </Col>
            </Row>
            <Row
              justify="space-around"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              {showAddCard ? (
                <AddCard lists={setWebLists} cancleState={setShowAddCards} />
              ) : (
                ""
              )}
              {webLists ? (
                webLists.map((element) => (
                  <StatusCard
                    key={element.id.toString()}
                    elementId={element.id}
                    element={element}
                    lists={setWebLists}
                  />
                ))
              ) : (
                <p>loading ....</p>
              )}
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
