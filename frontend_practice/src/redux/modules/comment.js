import { createAction, handleActions } from "redux-actions";
// 불변성 관리 위한 친구
import { produce } from "immer";
import axios from "axios";

// actions

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));

const addComment = createAction(ADD_POST, (post_id, comment) => ({
  post_id,
  comment,
}));

const initialState = {
  list: {},
};

const addCommentFB = (post_id, contents) => {
  return function (dispatch, getState, { history }) {};
};

const getCommentFB = (post_id) => {
  return function (dispatch, getState, { history }) {};
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id] = action.payload.comment_list;
        action.payload.list;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.post_id].unshift(action.payload.comment);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
