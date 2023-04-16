import headerReducer from "./DropDownMenu/DropDownMenu";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    headerState: headerReducer,
});