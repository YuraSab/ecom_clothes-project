import {DropDownMenu_Types, SetDropDownMenu_Action, SetGender_Action} from "../../action-types";
import {Dispatch} from "react";
import {Payload} from "../../../modules/Redux/Redux";


export const onSetDropDownMenu = (value: Payload<SetDropDownMenu_Action>) => {
    return (dispatch: Dispatch<SetDropDownMenu_Action>) => {
        dispatch({
            type: DropDownMenu_Types.SET_DROP_DOWN_MENU,
            payload: value
        })
    }
};

export const onSetGender = (value: Payload<SetGender_Action>) => {
    return (dispatch: Dispatch<SetGender_Action>) => {
        dispatch({
            type: DropDownMenu_Types.SET_GENDER,
            payload: value
        })
    }
};