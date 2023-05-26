import {Payload} from "../../../modules/Redux/Redux";
import {
    AddProductLike_Action, DeleteProductLike_Action,
    ProductLike_Types,
    SetProductLikes_Action
} from "../../action-types";
import {Dispatch} from "react";


export const onSetProductLikes = (value: Payload<SetProductLikes_Action>) => {
    return(dispatch: Dispatch<SetProductLikes_Action>) => {
        dispatch({
            type: ProductLike_Types.SET_PRODUCT_LIKES,
            payload: value
        })
    }
}
export const onAddProductLike = (value: Payload<AddProductLike_Action>) => {
    return(dispatch: Dispatch<AddProductLike_Action>) => {
        dispatch({
            type: ProductLike_Types.ADD_PRODUCT_LIKE,
            payload: value
        })
    }
}
export const onDeleteProductLike = (value: Payload<DeleteProductLike_Action>) => {
    return(dispatch: Dispatch<DeleteProductLike_Action>) => {
        dispatch({
            type: ProductLike_Types.DELETE_PRODUCT_LIKE,
            payload: value
        })
    }
}