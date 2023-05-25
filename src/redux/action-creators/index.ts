import * as DropDownMenu_ActionCreators from "./DropDownMenu/DropDownMenu.ts";
import * as Response_ActionCreators from "./Response/Response.ts";
import * as Question_ActionCreators from "./Question/Question.ts";

export default {
    ...DropDownMenu_ActionCreators,
    ...Response_ActionCreators,
    ...Question_ActionCreators,
}