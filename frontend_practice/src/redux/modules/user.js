import { createAction, handleActions } from "redux-actions";
// 불변성 관리 위한 친구
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";

// actions
//const LOG_IN = "LOG_IN";
const SIGN_UP = "SIGN_UP";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// initialState

const initialState = {
  user: null,
  is_login: false,
};

// middleware actions

const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
      url: "http://3.143.205.173:8080/api/authenticate",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        username: id,
        password: pwd,
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("nick", JSON.stringify(`${id}`));
        sessionStorage.setItem("token", res.data.token);
        dispatch(
          setUser({
            username: id,
            password: pwd,
          })
        );
        history.push("/");
        window.alert("정상적으로 로그인 되었습니다!");
      })
      .catch((err) => {
        window.alert(err);
      });
  };
};

// 회원가입DB

const signupDB = (id, pwd, nickname) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "POST",
      url: "http://3.143.205.173:8080/api/signup",
      data: {
        username: id,
        nickname: nickname,
        password: pwd,
      },
    })
      .then((res) => {
        window.location.href = "/";
        window.alert("환영합니다!");
      })
      .catch((err) => {
        window.alert("회원가입에 실패했습니다", err);
      });
  };
};

// maintains the login status when is_session is true -> setUser with username
const loginCheckDB = (is_session) => {
  return function (dispatch, getState, { history }) {
    if (is_session) {
      dispatch(setUser({ nickname: localStorage.getItem("nickname") }));
    } else {
      dispatch(logOut());
    }
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    sessionStorage.removeItem("token");
    localStorage.removeItem("nick");
    dispatch(logOut());
    history.replace("/");
  };
};

// actionCreators

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const signUp = createAction(SIGN_UP, (id, pwd) => ({ id, pwd }));

// reducer

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [SIGN_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.user.push(action.payload.user);
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export

const actionCreators = {
  logOut,
  signUp,
  setUser,
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logOutDB,
};

export { actionCreators };
