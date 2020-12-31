import React from "react";
import "./App.css";
import HomePage from "./components/pagesapp/homepage/HomePage";
import Shop from "./components/pagesapp/shop/Shop";
import Header from "./components/header/Header"

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </>
  );
};

// online mentor ubong king

export default App;
