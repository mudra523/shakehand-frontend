import React, { useState } from "react";
import { Layout, Row, Col, Menu, Avatar, Input } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  BellOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
// import AppHeader from './Header'
import AppFooter from "./Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Jobs from "../User/Jobs";
import Profile from "../User/Profile";
import Institute from "../User/Institute";

const { Content, Header, Footer } = Layout;

function Index(props) {
  let history = useHistory();
  const [menu, setMenu] = useState("u-jobs");
  const handleClick = (e) => {
    setMenu(e.key);
  };
  const onLogout = (e) => {
    localStorage.setItem("mainLayout", "auth");
    history.push("/");
  };
  return (
    <Layout style={{ minWidth: "100vh" }}>
      <Router>
        <Header
          className="bg_white"
          style={{
            position: "fixed",
            zIndex: 50,
            width: "100%",
            padding: 0,
          }}
        >
          <Row type="flex" justify="middle" align="space-between">
            <Col offset={1} span={3} style={{ marginTop: "-0.2em" }}>
              <Link to="/user">
                {/* <img src={User} className="app_logo" /> */}
                LOGO
              </Link>
              {/* <img src={User} className="app_logo" /> */}
            </Col>
            <Col pull={1} className="app_menu_wrapper">
              <div className="app_menu">
                <Menu
                  mode="horizontal"
                  onClick={handleClick}
                  selectedKeys={[menu]}
                >
                  <Menu.Item key="u-jobs">
                    <Link to="/user/jobs">Jobs</Link>
                  </Menu.Item>
                  <Menu.Item key="u-institute">
                    <Link to="/user/institute">Institute</Link>
                  </Menu.Item>
                  <Menu.Item key="u-message">
                    <Link to="/user/message">
                      <MessageOutlined />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="u-notification">
                    <Link to="/user/notification">
                      <BellOutlined />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="u-profile">
                    <Link to="/user/profile">
                      <Avatar size="large" icon={<UserOutlined />} size={32} />
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <LogoutOutlined onClick={onLogout} />
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
          </Row>
        </Header>
        <Content className="main_layout ">
          <Row type="flex" justify="center">
            <Col lg={20} xl={20} xs={22} style={{ padding: "20px 0" }}>
              <Switch>
                <Route path="/user/jobs">
                  <Jobs />
                </Route>
                <Route path="/user/institute">
                  <Institute />
                </Route>
                <Route path="/user/message">  
                  <div>Message</div>
                </Route>
                <Route path="/user/notification">
                  <div>Notification</div>
                </Route>
                <Route path="/user/profile">
                  <Profile />
                </Route>
                <Route path="/user">User Home</Route>
              </Switch>
            </Col>
          </Row>
        </Content>
        <Footer className="bg_app_color app_footer">
          <AppFooter />
        </Footer>
      </Router>
    </Layout>
  );
}

export default Index;
