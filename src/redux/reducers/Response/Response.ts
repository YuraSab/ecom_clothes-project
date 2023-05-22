import {
    Like,
    Parent_Child_comment,
    Response,
    Response_Actions,
    Response_Types
} from "../../action-types";
type InitialState_type = {
    responses: Response[],
    likes: Like[],
    parent_child_comments: Parent_Child_comment[],
}
const initialState: InitialState_type = {
    responses: [],
    likes: [],
    parent_child_comments: [],
};



export default (state = initialState, action: Response_Actions): InitialState_type => {
    switch (action.type){
        case Response_Types.SET_COMMENT: {
            return {
                ...state,
                responses: action.payload,
            }
        }
        case Response_Types.ADD_COMMENT: {
            return {
                ...state,
                responses: [...state.responses, action.payload],
            }
        }
        case Response_Types.DELETE_COMMENT: {
            const filtered = state.responses.filter(el => el.id_response !== action.payload);
            return {
                ...state,
                responses: filtered,
            }
        }
        case Response_Types.EDIT_COMMENT: {
            const filtered = state.responses.filter(el => el.id_response !== action.payload.id_response);
            return {
                ...state,
                responses: [...filtered, action.payload]
            }
        }
    }
}