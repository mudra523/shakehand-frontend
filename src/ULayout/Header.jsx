import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Row, Col, Menu, Avatar, Input } from 'antd';
import { UserOutlined, MessageOutlined, BellOutlined } from '@ant-design/icons';
import Jobs from './../Institution/Jobs'
import Profile from './../Institution/Profile'
import Payment from './../Institution/Payment'
import Team from './../Institution/Team'

const { SubMenu } = Menu;

function HeaderIndex(props) {

    const [menu, setMenu] = useState('user-jobs')
    const handleClick = e => {
        console.log('click ', e);
        setMenu(e.key);
    };
    return (
        <Row type="flex" justify="middle" align="space-between">
            <Col
                offset={1}
                span={3}
                style={{ marginTop: "-0.2em" }}
            >
                {/* <img src={User} className="app_logo" /> */}
                LOGO
            </Col>
            <Col span={7} offset={1} className="app_menu_wrapper">
                <Input
                    placeholder="Search here"
                    size="small"
                    className="header_search"
                    suffix={
                        <i className="icon-search text_app_color text_normal" />
                    }
                />
            </Col>
            <Col pull={1} className="app_menu_wrapper">
                <div className="app_menu">
                    <Router>
                        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[menu]}>
                            <Menu.Item key="i-jobs">
                                <Link to="/institute-jobs">Jobs</Link>
                            </Menu.Item>
                            <Menu.Item key="i-profile">
                                <Link to="/institute-profile">Profile</Link>
                            </Menu.Item>
                            <Menu.Item key="i-team">
                                <Link to="/institute-team">Team</Link>
                            </Menu.Item>
                            <Menu.Item key="i-message">
                                <Link to="/institute-message"><MessageOutlined /></Link>
                            </Menu.Item>
                            <Menu.Item key="i-notification">
                                <Link to="/institute-notification"><BellOutlined /></Link>
                            </Menu.Item>
                            <Menu.Item key="i-payment">
                                <Link to="/institute-payment">Payment</Link>
                            </Menu.Item>
                            <Menu.Item key="i-acount">
                                <Link to="/institute-acount">
                                    <Avatar size="large" icon={<UserOutlined />} />
                                </Link>
                            </Menu.Item>
                        </Menu>
                        <Switch>
                            <Route path="/institute-jobs">
                                <Jobs />
                            </Route>
                            <Route path="/institute-profile">
                                <Profile />
                            </Route>
                            <Route path="/institute-team">
                                <Team />
                            </Route>
                            <Route path="/institute-message">
                                <Jobs />
                            </Route>
                            <Route path="/institute-notification">
                                <Jobs />
                            </Route>
                            <Route path="/institute-payment">
                                <Payment />
                            </Route>
                            <Route path="/institute-acount">
                                <Jobs />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Col>
        </Row>

    );
}

export default HeaderIndex;