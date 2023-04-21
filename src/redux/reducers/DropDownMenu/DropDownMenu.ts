import {DropDownMenu_Actions, DropDownMenu_Types,} from "../../action-types/index.ts";

type initialState_Type = {
    dropDownValue: string,
    gender: string
};

const initialState: initialState_Type = {
    dropDownValue: "",
    gender: ""
};

export default (state = initialState, {payload, type}: DropDownMenu_Actions) => {
    switch (type) {

        case DropDownMenu_Types.SET_DROP_DOWN_MENU: {
            return {
                ...state,
                dropDownValue: payload,
            }
        }
        case DropDownMenu_Types.SET_GENDER: {
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