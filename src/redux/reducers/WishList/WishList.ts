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
            return {
                ...state,
                wishList: state.wishList.filter(el => el.id_wishList_element !== action.payload)
            }
        }
        case WishList_Types.PLUS_COUNT_OF_PRODUCT: {
            let filtered = state.wishList.filter(el => el.id_wishList_element !== action.payload);
            const found = state.wishList.find(el => el.id_wishList_element === action.payload);
            if (found != undefined) {
                const newValue = {
                    id_wishList_element: found.id_wishList_element,
                    id_product: found.id_product,
                    id_user: found.id_user,
                    count: found.count + 1,
                    date: found.date,
                }

                filtered = [...filtered, newValue];
                filtered = filtered.sort( (a, b) => a.id_wishList_element - b.id_wishList_element);
            }

            return {
                ...state,
                wishList: filtered
            }
        }
        case WishList_Types.MINUS_COUNT_OF_PRODUCT: {
            let filtered = state.wishList.filter(el => el.id_wishList_element !== action.payload);
            const found = state.wishList.find(el => el.id_wishList_element === action.payload);
            const newValue = {
                // @ts-ignore
                id_wishList_element: found.id_wishList_element,
                // @ts-ignore
                id_product: found.id_product,
                // @ts-ignore
                id_user: found.id_user,
                // @ts-ignore
                count: found.count - 1,
                // @ts-ignore
                date: found.date,
            }

            filtered = [...filtered, newValue];
            filtered = filtered.sort((a, b) => a.id_wishList_element - b.id_wishList_element);

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