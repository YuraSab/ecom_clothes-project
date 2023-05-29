import {WishList_Actions, WishList_Types, WishListElement} from "../../action-types";


type InitialState_type = {
    wishList: WishListElement[]
}

const initialState: InitialState_type = {
    wishList: []
}

export default (state = initialState, action: WishList_Actions): InitialState_type => {
    switch (action.type) {
        case WishList_Types.SET_WISH_LISTS: {
            return {
                ...state,
                wishList: action.payload
            }
        }
        case WishList_Types.ADD_PRODUCT_TO_WISHLIST: {
            return {
                ...state,
                wishList: [...state.wishList, action.payload]
            }
        }
        case WishList_Types.DELETE_PRODUCT_FROM_WISHLIST: {
            const filtered = state.wishList.filter(el => el.id_wishList_element !== action.payload);
            return {
                ...state,
                wishList: filtered
            }
        }
        default: {
            return state
        }
    }
}