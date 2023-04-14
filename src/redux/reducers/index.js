import dropDownMenu from "./DropDownMenu/DropDownMenu";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    dropDownValue: dropDownMenu,
})