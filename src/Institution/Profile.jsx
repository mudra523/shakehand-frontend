import React from "react";
import { Col, Row } from "antd";
import { Switch, Route, useHistory } from "react-router-dom";
import InstituteProfile from "../Components/InstituteProfile";
import InstituteEditeProfile from "../Components/InstituteEditeProfile";
import JobCard from "../Components/JobCard";

function Profile(props) {
  let history = useHistory();

  function handleExpand() {
    history.push("/institute/jobs/add");
  }
  return (
    <Switch>
      <Route path="/institute/profile/edit">
        <InstituteEditeProfile />
      </Route>
      <Route path="/institute/profile">
        <Row gutter={[16, 0]} style={{ marginTop: "0.5em" }}>
          <Col xs={24} md={6} lg={6}>
            <InstituteProfile edit={"edit"} />
          </Col>
          <Col xs={24} md={18} lg={18}>
            <Row
              className="bg_white"
              type="flex"
              justify="space-between"
              style={{ padding: "1em", marginBottom: "0.5em" }}
            >
              <div className="text_app_color text_large text_semibold">
                Click Here to add new job profile
              </div>
              <div>
                <button
                  type="primary"
                  className="green_button"
                  onClick={handleExpand}
                >
                  Add
                </button>
              </div>
            </Row>
            <JobCard layout={"institute"} />
            <JobCard layout={"institute"} />
          </Col>
        </Row>
      </Route>
    </Switch>
  );
}

export default Profile;
