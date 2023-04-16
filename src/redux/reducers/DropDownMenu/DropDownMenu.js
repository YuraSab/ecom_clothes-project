import {SET_DROP_DOWN_MENU, SET_GENDER} from "../../action-types";

const initialState = {
    dropDownValue: "",
    gender: ""
};

export default (state = initialState, {payload, type}) => {
    switch (type) {

        case SET_DROP_DOWN_MENU: {
            return {
                ...state,
                dropDownValue: payload,
            }
        }
        case SET_GENDER: {
            return {
                ...state,
                gender: payload
            }
        }

        default: {
            return state;
        }

    }
}