import {SET_DROP_DOWN_MENU, SET_GENDER} from "../../action-types";

export const onSetDropDownMenu = (value) => ({
    type: SET_DROP_DOWN_MENU,
    payload: value
});


export const onSetGender = (value) => ({
    type: SET_GENDER,
    payload: value
});