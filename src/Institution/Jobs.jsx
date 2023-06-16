import React from "react";
import { Switch, Route } from "react-router-dom";
import InstituteJobsPage from "../Components/InstituteJobsPage";
import JobDetailCard from "../Components/JobDetailCard";
import AddJob from "../Components/AddJob";

function Jobs(props) {
  return (
    <Switch>
      <Route path="/institute/jobs/add">
        <AddJob />
      </Route>
      <Route path="/institute/jobs/detail">
        <JobDetailCard />
      </Route>
      <Route path="/institute/jobs">
        <InstituteJobsPage />
      </Route>
    </Switch>
  );
}

export default Jobs;
