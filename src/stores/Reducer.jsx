import { combineReducers } from "redux";
import AccountReducer from "./reducers/AccountReducer";
import userReducer from "./reducers/UserReducer";

const reducers = combineReducers({
  account: AccountReducer,
  user: userReducer,
});
export default reducers;
