import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserJobsPage from "../Components/UserJobsPage";
import JobApplyCard from "../Components/JobApplyCard";

function Jobs(props) {
  return (
    <Switch>
      <Route path="/user/jobs/apply">
        <JobApplyCard />
      </Route>
      <Route path="/user/jobs">
        <UserJobsPage />
      </Route>
    </Switch>
  );
}

export default Jobs;
