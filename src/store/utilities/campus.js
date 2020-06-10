// Action Types
const FETCH_CAMPUS = "FETCH_CAMPUS";

const campus = {
  id: "3434454",
  name: "Brooklyn College",
  address: "Brooklyn",
  imageUrl: "",
  description: "A college in Brooklyn",
};

// Action Creators

const fetchCampus = (campus) => {
  return {
    type: FETCH_CAMPUS,
    payload: campus,
  };
};

// Thunk Creators
export const fetchCampusThunk = () => (dispatch) => {
  return dispatch(fetchCampus(campus));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;