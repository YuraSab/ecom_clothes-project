export enum Response_Types {
    SET_COMMENT = "SET_COMMENT",
    ADD_COMMENT = "ADD_COMMENT",
    DELETE_COMMENT = "DELETE_COMMENT",
    EDIT_COMMENT = "EDIT_COMMENT",
    SET_LIKES = "SET_LIKES",
    ADD_LIKES = "ADD_LIKES",
    DELETE_LIKES = "DELETE_LIKES",
    EDIT_LIKES = "EDIT_LIKES",
    SET_PARENT_CHILD_COMMENT = "SET_PARENT_CHILD_COMMENT",
    ADD_PARENT_CHILD_COMMENT = "ADD_PARENT_CHILD_COMMENT",
    DELETE_PARENT_CHILD_COMMENT = "DELETE_PARENT_CHILD_COMMENT",
    EDIT_PARENT_CHILD_COMMENT= "EDIT_PARENT_CHILD_COMMENT",
}

export type Like = {
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
export type Parent_Child_comment = {
    id_parent_comment: number,
    id_child_comment: number,
}

export interface SetComment_Action {
    type: Response_Types.SET_COMMENT,
    payload: Response[]
}
export interface AddComment_Action {
    type: Response_Types.ADD_COMMENT,
    payload: Response
}
export interface DeleteComment_Action {
    type: Response_Types.DELETE_COMMENT,
    payload: number
}
export interface EditComment_Action {
    type: Response_Types.EDIT_COMMENT,
    payload: Response
}


export type Response_Actions = SetComment_Action | AddComment_Action | DeleteComment_Action | EditComment_Action;