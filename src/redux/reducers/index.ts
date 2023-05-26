import headerReducer from "./DropDownMenu/DropDownMenu.ts";
import responseReducer from "./Response/Response.ts";
import questionReducer from "./Question/Question.ts";
import productLike from "./ProductLike/ProductLike";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    headerState: headerReducer,
    responseReducer: responseReducer,
    questionReducer: questionReducer,
    productLike: productLike,
});


export type RootState = ReturnType<typeof reducers>