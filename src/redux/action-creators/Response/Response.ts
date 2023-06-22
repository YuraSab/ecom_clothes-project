import {Payload} from "../../../modules/Redux/Redux";
import {
    AddResponseLike_Action, AddParentChildResponse_Action,
    AddResponse_Action, DeleteResponseLike_Action, DeleteParentChildResponse_Action,
    DeleteResponse_Action,
    EditResponse_Action,
    Response_Types, SetResponseLikes_Action, SetParentChildResponses_Action,
    SetResponses_Action
} from "../../action-types";
import {Dispatch} from "react";


// responses

export const onSetResponses = (value: Payload<SetResponses_Action>) => {
    return(dispatch: Dispatch<SetResponses_Action>) => {
        dispatch({
            type: Response_Types.SET_RESPONSE,
            payload: value
        })
    }
}
export const onAddResponse = (value: Payload<AddResponse_Action>) => {
    return(dispatch: Dispatch<AddResponse_Action>) => {
        dispatch({
            type: Response_Types.ADD_RESPONSE,
            payload: value
        })
    }
}
export const onDeleteResponse = (value: Payload<DeleteResponse_Action>) => {
    return(dispatch: Dispatch<DeleteResponse_Action>) => {
        dispatch({
            type: Response_Types.DELETE_RESPONSE,
            payload: value
        })
    }
}
export const onEditResponse = (value: Payload<EditResponse_Action>) => {
    return(dispatch: Dispatch<EditResponse_Action>) => {
        dispatch({
            type: Response_Types.EDIT_RESPONSE,
            payload: value
        })
    }
}

// likes

export const onSetResponseLikes = (value: Payload<SetResponseLikes_Action>) => {
    return(dispatch: Dispatch<SetResponseLikes_Action>) => {
        dispatch({
            type: Response_Types.SET_RESPONSE_LIKES,
            payload: value
        })
    }
}
export const onAddResponseLike = (value: Payload<AddResponseLike_Action>) => {
    return(dispatch: Dispatch<AddResponseLike_Action>) => {
        dispatch({
            type: Response_Types.ADD_RESPONSE_LIKE,
            payload: value
        })
    }
}
export const onDeleteResponseLike = (value: Payload<DeleteResponseLike_Action>) => {
    return(dispatch: Dispatch<DeleteResponseLike_Action>) => {
        dispatch({
            type: Response_Types.DELETE_RESPONSE_LIKE,
            payload: value
        })
    }
}

// response on response

export const onSetParentChildResponse = (value: Payload<SetParentChildResponses_Action>) => {
    return(dispatch: Dispatch<SetParentChildResponses_Action>) => {
        dispatch({
            type: Response_Types.SET_PARENT_CHILD_RESPONSE,
            payload: value
        })
    }
}
export const onAddParentChildResponse = (value: Payload<AddParentChildResponse_Action>) => {
    return(dispatch: Dispatch<AddParentChildResponse_Action>) => {
        dispatch({
            type: Response_Types.ADD_PARENT_CHILD_RESPONSE,
            payload: value
        })
    }
}
export const onDeleteParentChildResponse = (value: Payload<DeleteParentChildResponse_Action>) => {
    return(dispatch: Dispatch<DeleteParentChildResponse_Action>) => {
        dispatch({
            type: Response_Types.DELETE_PARENT_CHILD_RESPONSE,
            payload: value
        })
    }
}