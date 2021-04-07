import { createAction, handleActions } from "redux-actions";
import { produce, produceWithPatches } from "immer";
import axios from "axios";

const SET_POSTS = "SET_POSTS";
const setProducts = createAction(SET_POSTS, (data) => ({ data }));

const initialState = {
  flower: [],
  per: " ",
  oldPrice: " ",
};

const mockAPl = `https://s3.us-west-2.amazonaws.com/secure.notion-static.com/89bd6400-5188-4b6a-a9ce-18e82848fd69/KukkaFlowerData.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210406T111404Z&X-Amz-Expires=86400&X-Amz-Signature=657366138ce104f4f13011aa4869a205d7b72415bf8f9cb1135df3d9447309f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KukkaFlowerData.json%22`;
const products_API = "http://3.143.205.173:8080/api/products";
const getProductsAPI = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get(products_API)
      .then((resp) => {
        console.log(resp);
        dispatch(setProducts(resp.data));
      })
      .catch((e) => console.error(e));
  };
};

// const getOneProduct = () => {
//   return function (dispatch, getState, { history }) {
//     axios.get(products_API).then((res) => {
//       res.data;
//     });
//   };
// };

// reducer
export default handleActions(
  {
    [SET_POSTS]: (state, action) =>
      produce(state, (draft) => {
        draft.flower = action.payload.data;
      }),
    //   [ADD_COMMENT]: (state, action) =>
    //     produce(state, (draft) => {
    //       draft.commentList.unshift(action.payload.comment);
    //     }),
    //   [REMOVE_COMMENT]: (state, action) =>
    //     produce(state, (draft) => {
    //       const id = action.payload.commentId;
    //       draft.commentList = draft.commentList.filter((c) => {
    //         return c.id !== id;
    //       });
    //     }),
    //   [EDIT_COMMENT]: (state, action) =>
    //     produce(state, (draft) => {
    //       let idx = draft.commentList.findIndex(
    //         (c) => c.id === action.payload.commentId
    //       );
    //       console.log(action.payload.comment);

    //       draft.commentList[idx] = {
    //         ...action.payload.comment
    //       };
    //     })
    // },
  },
  initialState
);

const actionCreators = {
  getProductsAPI,
  // setProducts,
};

export { actionCreators };
