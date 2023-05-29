import {Payload} from "../../../modules/Redux/Redux";
import {
    AddProductToWishList_Action,
    DeleteFromWishList_Action,
    SetWishList_Action,
    WishList_Types
} from "../../action-types";
import {Dispatch} from "react";


export const onSetWishList = (value: Payload<SetWishList_Action>) => {
    return(dispatch: Dispatch<SetWishList_Action>) => {
        dispatch({
            type: WishList_Types.SET_WISH_LISTS,
            payload: value
        })
    }
}
export const onAddToWishList = (value: Payload<AddProductToWishList_Action>) => {
    return(dispatch: Dispatch<AddProductToWishList_Action>) => {
        dispatch({
            type: WishList_Types.ADD_PRODUCT_TO_WISHLIST,
            payload: value
        })
    }
}
export const onDeleteFromWishList = (value: Payload<DeleteFromWishList_Action>) => {
    return(dispatch: Dispatch<DeleteFromWishList_Action>) => {
        dispatch({
            type: WishList_Types.DELETE_PRODUCT_FROM_WISHLIST,
            payload: value
        })
    }
}