export const addNewTask = (data) => async (dispatch) => {
  dispatch({
    type: "ADD-TASK",
    payload: data,
  });
};

export const deleteTaskfromArr = (data) => async (dispatch) => {
  dispatch({
    type: "DELETE-TASK",
    payload: data,
  });
};

export const editTaskfromArr = (data) => async (dispatch) => {
  dispatch({
    type: "EDIT-TASK",
    payload: data,
  });
};

export const UpdateEditData = (data) => async (dispatch) => {
  dispatch({
    type: "EDIT-DATA",
    payload: data,
  });
};
