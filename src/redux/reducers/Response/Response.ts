import {
    Like,
    Parent_Child_response,
    Response,
    Response_Actions,
    Response_Types
} from "../../action-types";

type InitialState_type = {
    responses: Response[],
    likes: Like[],
    parent_child_comments: Parent_Child_response[],
}
const initialState: InitialState_type = {
    responses: [],
    likes: [],
    parent_child_comments: [],
};


export default (state = initialState, action: Response_Actions): InitialState_type => {
    switch (action.type){
        case Response_Types.SET_RESPONSE: {
            return {
                ...state,
                responses: action.payload,
            }
        }
        case Response_Types.ADD_RESPONSE: {
            return {
                ...state,
                responses: [...state.responses, action.payload],
            }
        }
        case Response_Types.DELETE_RESPONSE: {
            const filtered = state.responses.filter(el => el.id_response !== action.payload);
            return {
                ...state,
                responses: filtered,
            }
        }
        case Response_Types.EDIT_RESPONSE: {
            const filtered = state.responses.filter(el => el.id_response !== action.payload.id_response);
            return {
                ...state,
                responses: [...filtered, action.payload]
            }
        }


        case Response_Types.SET_LIKES: {
            return {
                ...state,
                likes: action.payload
            }
        }
        case Response_Types.ADD_LIKE: {
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }
        }
        case Response_Types.DELETE_LIKE: {
            const filtered = state.likes.filter(el => el.id_like !== action.payload);
            return {
                ...state,
                likes: filtered
            }
        }


        case Response_Types.SET_PARENT_CHILD_RESPONSE: {
            return {
                ...state,
                parent_child_comments: action.payload
            }
        }
        case Response_Types.ADD_PARENT_CHILD_RESPONSE: {
            return {
                ...state,
                parent_child_comments: [...state.parent_child_comments, action.payload]
            }
        }
        case Response_Types.DELETE_PARENT_CHILD_RESPONSE: {
            const filtered = state.parent_child_comments.filter(el => el.id_parent_child_response !== action.payload);
            return {
                ...state,
                parent_child_comments: filtered
            }
        }

        default: {
            return state;
        }
    }
}