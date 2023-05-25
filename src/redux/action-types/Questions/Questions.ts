export enum Question_Types {
  SET_QUESTIONS = "SET_QUESTIONS",
  ADD_QUESTION = "ADD_QUESTION",
  DELETE_QUESTION = "DELETE_QUESTION",
  EDIT_QUESTION = "EDIT_QUESTION",
  SET_RESPONSES_ON_QUESTIONS = "SET_RESPONSES_ON_QUESTIONS",
  ADD_RESPONSE_ON_QUESTION = "ADD_RESPONSE_ON_QUESTION",
  DELETE_RESPONSE_ON_QUESTION = "DELETE_RESPONSE_ON_QUESTION",
  EDIT_RESPONSE_ON_QUESTION = "EDIT_RESPONSE_ON_QUESTION",
}


export type Question = {
  id_question: number;
  id_user: number;
  id_product: number;
  text: string;
  date: Date;
  edited: boolean;
};

export type ResponseOnQuestion = {
  id_response_on_question: number;
  id_question: number;
  id_admin: number;
  text: string;
  date: Date;
  edited: boolean;
}


export interface SetQuestions_Action {
  type: Question_Types.SET_QUESTIONS,
  payload: Question[]
}
export interface AddQuestion_Action {
  type: Question_Types.ADD_QUESTION,
  payload: Question
}
export interface DeleteQuestion_Action {
  type: Question_Types.DELETE_QUESTION,
  payload: number
}
export interface EditQuestion_Action {
  type: Question_Types.EDIT_QUESTION,
  payload: Question
}
export interface SetResponsesOnQuestions_Action {
  type: Question_Types.SET_RESPONSES_ON_QUESTIONS,
  payload: ResponseOnQuestion[]
}
export interface AddResponseOnQuestion_Action {
  type: Question_Types.ADD_RESPONSE_ON_QUESTION,
  payload: ResponseOnQuestion
}
export interface DeleteResponseOnQuestion_Action {
  type: Question_Types.DELETE_RESPONSE_ON_QUESTION,
  payload: number
}
export interface EditResponseOnQuestion_Action {
  type: Question_Types.EDIT_RESPONSE_ON_QUESTION,
  payload: ResponseOnQuestion
}



export type Question_Actions =
    SetQuestions_Action | AddQuestion_Action | DeleteQuestion_Action | EditQuestion_Action |
    SetResponsesOnQuestions_Action | AddResponseOnQuestion_Action | DeleteResponseOnQuestion_Action | EditResponseOnQuestion_Action;