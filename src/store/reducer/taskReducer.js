const initialState = {
  taskDetails: [],
  completedTask: [],
  editData: {},
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return {
        ...state,
        taskDetails: [...state.taskDetails, action.payload],
      };
    case "DELETE-TASK":
      return {
        ...state,
        taskDetails: action.payload,
      };
    case "EDIT-TASK":
      return {
        ...state,
        taskDetails: action.payload,
        editData: {},
      };
    case "EDIT-DATA":
      return {
        ...state,
        editData: action.payload,
      };
    case 2:
      console.log(2);
    default:
      return initialState;
  }
};
