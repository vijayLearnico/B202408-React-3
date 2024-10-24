import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
});

export default rootReducer;
