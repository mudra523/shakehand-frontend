import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

function FooterIndex(props) {
    return (
        <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer_left">
                <span
                    className="text_gray text_small">Copyright © {new Date().getFullYear()} by ShakeHand Group</span>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer_center">
                <a href='#' className="text_small" style={{ margin: '0 15px' }}>Privacy Policy</a>
                <a href='#' className="text_small" style={{ margin: '0 15px' }}>Terms of Service</a>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer_right">
                <span className="text_gray text_small">Designed & Developed by
                    M & K
                </span>
            </Col>
        </Row>
    );
}

export default FooterIndex;