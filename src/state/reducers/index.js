//combine all reducers
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import tabReducer from "./tabReducer";

const reducers = combineReducers({
    tabReducer: tabReducer,
    cartReducer: cartReducer
})

export default reducers