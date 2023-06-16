import React, { useState } from "react";
import { Layout, Row, Col, Menu, Avatar, Input, Button } from "antd";
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
import Jobs from "../Institution/Jobs";
import Profile from "../Institution/Profile";
// import Payment from "../Institution/Payment";
import Team from "../Institution/Team";
import JobDetailCard from "../Components/JobDetailCard";

const { Content, Header, Footer } = Layout;
const { SubMenu } = Menu;

function Index(props) {
  let history = useHistory();
  const [menu, setMenu] = useState();
  const handleClick = (e) => {
    // console.log("click ", e);
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
              <Link to="/institute">
                {/* <img src={User} className="app_logo" /> */}
                LOGO
              </Link>
            </Col>
            <Col pull={1} className="app_menu_wrapper">
              <div className="app_menu">
                <Menu
                  mode="horizontal"
                  onClick={handleClick}
                  selectedKeys={[menu]}
                >
                  <Menu.Item key="i-jobs">
                    <Link to="/institute/jobs">Jobs</Link>
                  </Menu.Item>
                  <Menu.Item key="i-team">
                    <Link to="/institute/team">Team</Link>
                  </Menu.Item>
                  {/* <Menu.Item key="i-payment">
                    <Link to="/institute/payment">Payment</Link>
                  </Menu.Item> */}
                  <Menu.Item key="i-message">
                    <Link to="/institute/message">
                      <MessageOutlined />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="i-notification">
                    <Link to="/institute/notification">
                      <BellOutlined />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="i-profile">
                    <Link to="/institute/profile">
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
                <Route path="/institute/jobs">
                  <Jobs />
                </Route>
                <Route path="/institute/team">
                  <Team />
                </Route>
                {/* <Route path="/institute/payment">
                  <Payment />
                </Route> */}
                <Route path="/institute/message">
                  <div>Message</div>
                </Route>
                <Route path="/institute/notification">
                  <div>Notification</div>
                </Route>
                <Route path="/institute/profile">
                  <Profile />
                </Route>
                <Route path="/institute">Institute Home</Route>
                <Route path="/institute/jobs/detail">
                  <JobDetailCard />
                </Route>
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
