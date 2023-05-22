import headerReducer from "./DropDownMenu/DropDownMenu.ts";
import responseReducer from "./Response/Response.ts";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    headerState: headerReducer,
    responseReducer: responseReducer,
});


export type RootState = ReturnType<typeof reducers>