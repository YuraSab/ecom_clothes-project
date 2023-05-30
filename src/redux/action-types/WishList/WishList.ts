export enum WishList_Types {
    SET_WISH_LISTS = "SET_WISH_LISTS",
    ADD_PRODUCT_TO_WISHLIST = "ADD_PRODUCT_TO_WISHLIST",
    DELETE_PRODUCT_FROM_WISHLIST = "DELETE_PRODUCT_FROM_WISHLIST",
    PLUS_COUNT_OF_PRODUCT = "PLUS_COUNT_OF_PRODUCT",
    MINUS_COUNT_OF_PRODUCT = "MINUS_COUNT_OF_PRODUCT",
}


export type WishListElement = {
    id_wishList_element: number,
    id_product: number,
    id_user: number,
    count: number,
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
export interface PlusCountOfProduct_Action {
    type: WishList_Types.PLUS_COUNT_OF_PRODUCT,
    payload: number
}
export interface MinusCountOfProduct_Action {
    type: WishList_Types.MINUS_COUNT_OF_PRODUCT,
    payload: number
}


export type WishList_Actions = SetWishList_Action | AddProductToWishList_Action | DeleteFromWishList_Action | PlusCountOfProduct_Action | MinusCountOfProduct_Action;