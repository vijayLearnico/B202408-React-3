export const addUserDetails = (data) => async (dispatch) => {
  dispatch({
    type: "ADD-USERDETAILS",
    payload: data,
  });
};
