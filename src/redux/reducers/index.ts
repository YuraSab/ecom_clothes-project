import headerReducer from "./DropDownMenu/DropDownMenu.ts";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    headerState: headerReducer,
});


export type RootState = ReturnType<typeof reducers>