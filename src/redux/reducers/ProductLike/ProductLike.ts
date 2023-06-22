import {ProductLike, ProductLike_Actions, ProductLike_Types} from "../../action-types";

type InitialState_type = {
    productLikes: ProductLike[]
}

const initialState: InitialState_type = {
    productLikes: []
}

export default (state = initialState, action: ProductLike_Actions): InitialState_type => {
    switch (action.type) {
        case ProductLike_Types.SET_PRODUCT_LIKES: {
            return {
                ...state,
                productLikes: action.payload
            }
        }
        case ProductLike_Types.ADD_PRODUCT_LIKE: {
            return {
                ...state,
                productLikes: [...state.productLikes, action.payload]
            }
        }
        case ProductLike_Types.DELETE_PRODUCT_LIKE: {
            return {
                ...state,
                productLikes: state.productLikes.filter(el => el.id_product_like !== action.payload)
            }
        }
        default: {
            return state
        }
    }
};