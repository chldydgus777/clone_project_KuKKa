import "./App.css";
import Header from "../components/Header";
import styled from "styled-components";
import PostList from "../components/PostList";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { history } from "../redux/configureStore";
import React, { useDebugValue } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostDetail from "../pages/PostDetail";
import Footer from "../components/Footer";
import Grid from "../elements/Grid";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const is_session = sessionStorage.getItem("token");

  // login maintenace
  React.useEffect(() => {
    if (user) {
      return;
    }
    dispatch(userActions.loginCheckDB(is_session));
  }, []);

  return (
    <AppFrame>
      <Header />
      <ConnectedRouter history={history}>
        <Grid>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={PostList} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/detail/:id" component={PostDetail} />
        </Grid>
        <Footer />
      </ConnectedRouter>
    </AppFrame>
  );
}

const AppFrame = styled.div`
  box-sizing: border-box;
`;
export default App;
