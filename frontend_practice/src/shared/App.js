import "./App.css";
import Header from "../components/Header";
import styled from "styled-components";
import PostList from "../components/PostList";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import React from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostDetail from "../pages/PostDetail";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ConnectedRouter history={history}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={PostList} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/detail/:id" component={PostDetail} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
