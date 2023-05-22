//     SetResponse_Action | AddResponse_Action | DeleteResponse_Action | EditResponse_Action |
//     SetLikes_Action | AddLikes_Action | DeleteLikes_Action |
//     SetParentChildComment_Action | AddParentChildComment_Action | DeleteParentChildComment_Action;

import {Payload} from "../../../modules/Redux/Redux";
import {
    AddLike_Action, AddParentChildResponse_Action,
    AddResponse_Action, DeleteLike_Action, DeleteParentChildResponse_Action,
    DeleteResponse_Action,
    EditResponse_Action,
    Response_Types, SetLikes_Action, SetParentChildResponses_Action,
    SetResponses_Action
} from "../../action-types";
import {Dispatch} from "react";

export const onSetResponses = (value: Payload<SetResponses_Action>) => {
    return(dispatch: Dispatch<SetResponses_Action>) => {
        dispatch({
            type: Response_Types.SET_RESPONSE,
            payload: value
        })
    }
}
export const onAddResponse = (value: Payload<AddResponse_Action>) => {
    console.log(value)
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






export const onSetLikes = (value: Payload<SetLikes_Action>) => {
    return(dispatch: Dispatch<SetLikes_Action>) => {
        dispatch({
            type: Response_Types.SET_LIKES,
            payload: value
        })
    }
}
export const onAddLike = (value: Payload<AddLike_Action>) => {
    return(dispatch: Dispatch<AddLike_Action>) => {
        dispatch({
            type: Response_Types.ADD_LIKE,
            payload: value
        })
    }
}
export const onDeleteLike = (value: Payload<DeleteLike_Action>) => {
    return(dispatch: Dispatch<DeleteLike_Action>) => {
        dispatch({
            type: Response_Types.DELETE_LIKE,
            payload: value
        })
    }
}








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