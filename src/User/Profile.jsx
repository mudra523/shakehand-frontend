import React from "react";
import { Col, Row } from "antd";
import { Switch, Route, useHistory } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import UserEditProfile from "../Components/UserEditProfile";
import UserInfoCard from "../Components/UserInfoCard";

function Profile(props) {
  let history = useHistory();

  function handleExpand() {
    history.push("/user/jobs/add");
  }

  return (
    <Switch>
      <Route path="/user/profile/edit">
         <UserEditProfile />
      </Route>
      <Route path="/user/profile/details/edit">
      </Route>
      <Route>
      <Row gutter={[16, 0]} style={{ marginTop: "0.5em" }}>
        <Col xs={24} md={6} lg={6}>
            <UserProfile edit={"edit"} />
        </Col>
        <Col xs={24} md={18} lg={18}>
        
            {/* <UserInfoCard layout={"hello"} /> */}
            {/* <UserInfoCard layout={"institute"} /> */}
          <UserInfoCard title={"About You"}/>
          <UserInfoCard title={'Work Experience'}/>
          <UserInfoCard title={'Projects'}/>
           <UserInfoCard title={'Certificates'}/>
        </Col>
      </Row>
      </Route>
    </Switch>
  );
}

export default Profile;
