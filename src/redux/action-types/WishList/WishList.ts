export enum WishList_Types {
    SET_WISH_LISTS = "SET_WISH_LISTS",
    ADD_PRODUCT_TO_WISHLIST = "ADD_PRODUCT_TO_WISHLIST",
    DELETE_PRODUCT_FROM_WISHLIST = "DELETE_PRODUCT_FROM_WISHLIST",
}


export type WishListElement = {
    id_wishList_element: number,
    id_product: number,
    id_user: number,
    date: Date,
}

export interface SetWishList_Action {
    type: WishList_Types.SET_WISH_LISTS,
    payload: WishListElement[]
}

export interface AddProductToWishList_Action {
    type: WishList_Types.ADD_PRODUCT_TO_WISHLIST,
    payload: WishListElement
}

export interface DeleteFromWishList_Action {
    type: WishList_Types.DELETE_PRODUCT_FROM_WISHLIST,
    payload: number
}


export type WishList_Actions = SetWishList_Action | AddProductToWishList_Action | DeleteFromWishList_Action;