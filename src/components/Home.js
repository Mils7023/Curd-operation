import React, { Fragment } from "react";
import { Heading } from "./Heading";
import { Employeelist } from "./EmployeeList";

export const Home = () => {
  return (
    <Fragment>
      <div className="App">
        <div className="container mx-auto">
          <h3 className="heading-text">
            CRUD with React Context API and Hooks
          </h3>
          <Heading />
          <Employeelist />
        </div>
      </div>
    </Fragment>
  );
};
