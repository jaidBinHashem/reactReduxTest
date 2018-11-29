import { FETCH_POST, NEW_POST } from "../actions/type";

export const fetchPosts = () => dispatch => {
  fetch("https:/jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POST,
        payload: posts
      })
    );
};
