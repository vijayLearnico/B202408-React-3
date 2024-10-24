const initialState = {
  userDetails: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-USERDETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return initialState;
  }
};
