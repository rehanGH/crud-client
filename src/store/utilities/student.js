import axios from "axios";

// Action Types
const FETCH_STUDENT = "FETCH_STUDENT";

// Action Creators

const fetchCampus = (student) => {
  return {
    type: FETCH_STUDENT,
    payload: student,
  };
};

// Thunk Creators
export const fetchCampusThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/students/${id}`)
    .then((res) => res.data)
    .then((student) => dispatch(fetchCampus(student)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
