import {
    ResponseLike,
    Parent_Child_response,
    Response,
    Response_Actions,
    Response_Types
} from "../../action-types";

type InitialState_type = {
    responses: Response[],
    response_likes: ResponseLike[],
    parent_child_comments: Parent_Child_response[],
}
const initialState: InitialState_type = {
    responses: [],
    response_likes: [],
    parent_child_comments: [],
};

export default (state = initialState, action: Response_Actions): InitialState_type => {
    switch (action.type){
        // responses
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
            return {
                ...state,
                responses: state.responses.filter(el => el.id_response !== action.payload),
            }
        }
        case Response_Types.EDIT_RESPONSE: {
            const filtered = state.responses.filter(el => el.id_response !== action.payload.id_response);
            return {
                ...state,
                responses: [...filtered, action.payload]
            }
        }

        // likes on responses
        case Response_Types.SET_RESPONSE_LIKES: {
            return {
                ...state,
                response_likes: action.payload
            }
        }
        case Response_Types.ADD_RESPONSE_LIKE: {
            return {
                ...state,
                response_likes: [...state.response_likes, action.payload]
            }
        }
        case Response_Types.DELETE_RESPONSE_LIKE: {
            return {
                ...state,
                response_likes: state.response_likes.filter(el => el.id_response_like !== action.payload)
            }
        }

        // responses on responses
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
            return {
                ...state,
                parent_child_comments: state.parent_child_comments.filter(el => el.id_parent_child_response !== action.payload)
            }
        }

        default: {
            return state;
        }
    }
}