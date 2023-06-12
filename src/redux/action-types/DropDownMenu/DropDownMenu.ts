export enum  DropDownMenu_Types {
    SET_DROP_DOWN_MENU = 'SET_DROP_DOWN_MENU',
    SET_GENDER = 'SET_GENDER',
}

export type DropDownValue = "" | "clothes" | "shoes" | "backpacks_and_bags" | "accessories";
export type Gender = "" | "male" | "female";

export interface SetDropDownMenu_Action {
    type: DropDownMenu_Types.SET_DROP_DOWN_MENU,
    payload: DropDownValue
}
export interface SetGender_Action {
    type: DropDownMenu_Types.SET_GENDER,
    payload: Gender
}


export type DropDownMenu_Actions = SetDropDownMenu_Action | SetGender_Action;