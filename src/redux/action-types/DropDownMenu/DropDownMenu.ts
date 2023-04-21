export enum  DropDownMenu_Types {
    SET_DROP_DOWN_MENU = 'SET_DROP_DOWN_MENU',
    SET_GENDER = 'SET_GENDER',
}

export type Gender = "male" | "female";


export interface SetDropDownMenu_Action {
    type: DropDownMenu_Types.SET_DROP_DOWN_MENU,
    payload: string
}
export interface SetGender_Action {
    type: DropDownMenu_Types.SET_GENDER,
    payload: Gender
}




export type DropDownMenu_Actions = SetDropDownMenu_Action | SetGender_Action;