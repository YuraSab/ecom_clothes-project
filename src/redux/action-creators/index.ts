import * as DropDownMenu_ActionCreators from "./DropDownMenu/DropDownMenu.ts";
import * as Response_ActionCreators from "./Response/Response.ts";
import * as Question_ActionCreators from "./Question/Question.ts";
import * as ProductLike_ActionCreators from "./ProductLike/ProductLike.ts";

export default {
    ...DropDownMenu_ActionCreators,
    ...Response_ActionCreators,
    ...Question_ActionCreators,
    ...ProductLike_ActionCreators,
}