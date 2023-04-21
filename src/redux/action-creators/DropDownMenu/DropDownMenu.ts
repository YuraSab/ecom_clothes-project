import {DropDownMenu_Actions, DropDownMenu_Types} from "../../action-types/DropDownMenu/DropDownMenu.ts";
import {Dispatch} from "react";

export const onSetDropDownMenu = (value) => {
    return (dispatch: Dispatch<DropDownMenu_Actions>) => {
        dispatch({
            type: DropDownMenu_Types.SET_DROP_DOWN_MENU,
            payload: value
        })
    }
};

export const onSetGender = (value) => {
    return (dispatch: Dispatch<DropDownMenu_Actions>) => {
        dispatch({
            type: DropDownMenu_Types.SET_GENDER,
            payload: value
        })
    }
};