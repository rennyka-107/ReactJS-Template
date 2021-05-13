import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../Constant/route.constant";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import PrivateRoute from "./private.route";

const RouteList = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        {ROUTES.map((route, index) => {
          if (route.private) return <PrivateRoute key={index} {...route} />;
          return <Route key={index} {...route} />;
        })}
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default RouteList;
