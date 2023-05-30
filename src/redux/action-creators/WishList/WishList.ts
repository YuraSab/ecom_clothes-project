import {Payload} from "../../../modules/Redux/Redux";
import {
    AddProductToWishList_Action,
    DeleteFromWishList_Action, MinusCountOfProduct_Action, PlusCountOfProduct_Action,
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
export const onPlusCountOfProduct = (value: Payload<PlusCountOfProduct_Action>) => {
    return(dispatch: Dispatch<PlusCountOfProduct_Action>) => {
        dispatch({
            type: WishList_Types.PLUS_COUNT_OF_PRODUCT,
            payload: value
        })
    }
}
export const onMinusCountOfProduct = (value: Payload<MinusCountOfProduct_Action>) => {
    return(dispatch: Dispatch<MinusCountOfProduct_Action>) => {
        dispatch({
            type: WishList_Types.MINUS_COUNT_OF_PRODUCT,
            payload: value
        })
    }
}

