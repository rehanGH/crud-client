import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
  EditCampusFormContainer,
  AllStudentContainer,
  StudentContainer,
  AddStudentFormContainer,
  EditStudentFormContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllCampusesContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/new" component={AddCampusFormContainer} />
      <Route exact path="/campuses/:id" component={CampusContainer} />
      <Route exact path="/students" component={AllStudentContainer} />
      <Route exact path="/students/new" component={AddStudentFormContainer} />
      <Route exact path="/students/:id" component={StudentContainer} />
      <Route
        exact
        path="/campuses/:id/edit"
        component={EditCampusFormContainer}
      />
      <Route
        exact
        path="/students/:id/edit"
        component={EditStudentFormContainer}
      />
    </Switch>
  );
};

export default RoutesView;