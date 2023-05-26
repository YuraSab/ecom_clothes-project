export enum ProductLike_Types {
    SET_PRODUCT_LIKES = "SET_PRODUCT_LIKES",
    ADD_PRODUCT_LIKE = "ADD_PRODUCT_LIKE",
    DELETE_PRODUCT_LIKE = "DELETE_PRODUCT_LIKE",
}


export type ProductLike = {
    id_product_like: number,
    id_product: number,
    id_user: number,
    date: Date,
}

export interface SetProductLikes_Action {
    type: ProductLike_Types.SET_PRODUCT_LIKES,
    payload: ProductLike[]
}

export interface AddProductLike_Action {
    type: ProductLike_Types.ADD_PRODUCT_LIKE,
    payload: ProductLike
}

export interface DeleteProductLike_Action {
    type: ProductLike_Types.DELETE_PRODUCT_LIKE,
    payload: number
}



export type ProductLike_Actions = SetProductLikes_Action | AddProductLike_Action | DeleteProductLike_Action;