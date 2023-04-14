import {SET_DROP_DOWN_MENU} from "../../action-types";

const initialState = {
    dropDownValue: ""
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_DROP_DOWN_MENU: {
            return {
                ...state, dropDownValue: action.payload
            }
        }

        default: {
            return state;
        }

    }
}