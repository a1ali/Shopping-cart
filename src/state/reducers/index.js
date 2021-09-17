//combine all reducers
import { combineReducers } from "redux";
import tabReducer from "./tabReducer";

const reducers = combineReducers({
    tabReducer: tabReducer,
})

export default reducers