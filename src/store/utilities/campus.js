// Action Types
const FETCH_CAMPUS = "FETCH_CAMPUS";

// const campus = {
//   id: "3434454",
//   name: "Brooklyn College",
//   address: "Brooklyn",
//   imageUrl: "",
//   description: "A college in Brooklyn",
// };

const allCampuses = [
  {
    id: "3434454",
    name: "Brooklyn College",
    address: "Brooklyn",
    imageUrl: "",
    description: "A college in Brooklyn",
    students: 0,
  },
  {
    id: "3434455",
    name: "CSI",
    address: "Staten Island",
    imageUrl: "",
    description: "A college in Staten Island",
    students: 0,
  },
  {
    id: "3434457",
    name: "John Jay",
    address: "New York",
    imageUrl: "",
    description: "",
    students: 0,
  },
];

// Action Creators

const fetchCampus = (campus) => {
  return {
    type: FETCH_CAMPUS,
    payload: campus,
  };
};

// Thunk Creators
export const fetchCampusThunk = (id) => (dispatch) => {
  const campus = allCampuses.find((c) => c.id === id);

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
