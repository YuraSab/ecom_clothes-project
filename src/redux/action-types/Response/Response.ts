export enum Response_Types {
    SET_RESPONSE = "SET_RESPONSE",
    ADD_RESPONSE = "ADD_RESPONSE",
    DELETE_RESPONSE = "DELETE_RESPONSE",
    EDIT_RESPONSE = "EDIT_RESPONSE",
    SET_RESPONSE_LIKES = "SET_RESPONSE_LIKES",
    ADD_RESPONSE_LIKE = "ADD_RESPONSE_LIKE",
    DELETE_RESPONSE_LIKE = "DELETE_RESPONSE_LIKE",
    SET_PARENT_CHILD_RESPONSE = "SET_PARENT_CHILD_RESPONSE",
    ADD_PARENT_CHILD_RESPONSE = "ADD_PARENT_CHILD_RESPONSE",
    DELETE_PARENT_CHILD_RESPONSE = "DELETE_PARENT_CHILD_RESPONSE",
}

export type ResponseLike = {
    id_response_like: number,
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


export interface SetResponseLikes_Action {
    type: Response_Types.SET_RESPONSE_LIKES,
    payload: ResponseLike[]
}
export interface AddResponseLike_Action {
    type: Response_Types.ADD_RESPONSE_LIKE,
    payload: ResponseLike
}
export interface DeleteResponseLike_Action {
    type: Response_Types.DELETE_RESPONSE_LIKE,
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
    SetResponseLikes_Action | AddResponseLike_Action | DeleteResponseLike_Action |
    SetParentChildResponses_Action | AddParentChildResponse_Action | DeleteParentChildResponse_Action;