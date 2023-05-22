export enum Response_Types {
    SET_RESPONSE = "SET_RESPONSE",
    ADD_RESPONSE = "ADD_RESPONSE",
    DELETE_RESPONSE = "DELETE_RESPONSE",
    EDIT_RESPONSE = "EDIT_RESPONSE",
    SET_LIKES = "SET_LIKES",
    ADD_LIKE = "ADD_LIKES",
    DELETE_LIKE = "DELETE_LIKES",
    SET_PARENT_CHILD_RESPONSE = "SET_PARENT_CHILD_RESPONSE",
    ADD_PARENT_CHILD_RESPONSE = "ADD_PARENT_CHILD_RESPONSE",
    DELETE_PARENT_CHILD_RESPONSE = "DELETE_PARENT_CHILD_RESPONSE",
}

export type Like = {
    id_like: number,
    id_response: number,
    id_user: number,
    date: Date,
};
export type Response = {
    id_response: number,
    id_user: number,
    id_product: number,
    text: string,
    date: Date,
    edited: boolean,
};
export type Parent_Child_response = {
    id_parent_child_response: number
    id_parent_response: number,
    id_child_response: number,
}

export interface SetResponses_Action {
    type: Response_Types.SET_RESPONSE,
    payload: Response[]
}
export interface AddResponse_Action {
    type: Response_Types.ADD_RESPONSE,
    payload: Response
}
export interface DeleteResponse_Action {
    type: Response_Types.DELETE_RESPONSE,
    payload: number
}
export interface EditResponse_Action {
    type: Response_Types.EDIT_RESPONSE,
    payload: Response
}


export interface SetLikes_Action {
    type: Response_Types.SET_LIKES,
    payload: Like[]
}
export interface AddLike_Action {
    type: Response_Types.ADD_LIKE,
    payload: Like
}
export interface DeleteLike_Action {
    type: Response_Types.DELETE_LIKE,
    payload: number
}


export interface SetParentChildResponses_Action {
    type: Response_Types.SET_PARENT_CHILD_RESPONSE,
    payload: Parent_Child_response[]
}
export interface AddParentChildResponse_Action {
    type: Response_Types.ADD_PARENT_CHILD_RESPONSE,
    payload: Parent_Child_response
}
export interface DeleteParentChildResponse_Action {
    type: Response_Types.DELETE_PARENT_CHILD_RESPONSE,
    payload: number
}


export type Response_Actions =
    SetResponses_Action | AddResponse_Action | DeleteResponse_Action | EditResponse_Action |
    SetLikes_Action | AddLike_Action | DeleteLike_Action |
    SetParentChildResponses_Action | AddParentChildResponse_Action | DeleteParentChildResponse_Action;