import {DropDownMenu_Actions, DropDownMenu_Types, DropDownValue, Gender} from "../../action-types";

type HeaderState = {
    dropDownValue: DropDownValue,
    gender: Gender
};

const initialState: HeaderState = {
    dropDownValue: "",
    gender: "male"
};

export default (state = initialState, action: DropDownMenu_Actions): HeaderState => {
    switch (action.type) {

        case DropDownMenu_Types.SET_DROP_DOWN_MENU: {
            return {
                ...state,
                dropDownValue: action.payload,
            }
        }
        case DropDownMenu_Types.SET_GENDER: {
            return {
                ...state,
                gender: action.payload
            }
        }

        default: {
            return state;
        }

    }
}