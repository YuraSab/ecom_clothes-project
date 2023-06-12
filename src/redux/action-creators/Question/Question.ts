import {Payload} from "../../../modules/Redux/Redux";
import {
    AddQuestion_Action, AddResponseOnQuestion_Action, DeleteQuestion_Action, DeleteResponseOnQuestion_Action,
    EditQuestion_Action, EditResponseOnQuestion_Action,
    Question_Types,
    SetQuestions_Action, SetResponsesOnQuestions_Action
} from "../../action-types";
import {Dispatch} from "react";

// questions

export const onSetQuestions = (value: Payload<SetQuestions_Action>) => {
    return(dispatch: Dispatch<SetQuestions_Action>) => {
        dispatch({
            type: Question_Types.SET_QUESTIONS,
            payload: value
        })
    }
}
export const onAddQuestion = (value: Payload<AddQuestion_Action>) => {
    return(dispatch: Dispatch<AddQuestion_Action>) => {
        dispatch({
            type: Question_Types.ADD_QUESTION,
            payload: value
        })
    }
}
export const onDeleteQuestion = (value: Payload<DeleteQuestion_Action>) => {
    return(dispatch: Dispatch<DeleteQuestion_Action>) => {
        dispatch({
            type: Question_Types.DELETE_QUESTION,
            payload: value
        })
    }
}
export const onEditQuestion = (value: Payload<EditQuestion_Action>) => {
    return(dispatch: Dispatch<EditQuestion_Action>) => {
        dispatch({
            type: Question_Types.EDIT_QUESTION,
            payload: value
        })
    }
}

// responses on questions

export const onSetResponsesOnQuestions = (value: Payload<SetResponsesOnQuestions_Action>) => {
    return(dispatch: Dispatch<SetResponsesOnQuestions_Action>) => {
        dispatch({
            type: Question_Types.SET_RESPONSES_ON_QUESTIONS,
            payload: value
        })
    }
}
export const onAddResponseOnQuestion = (value: Payload<AddResponseOnQuestion_Action>) => {
    return(dispatch: Dispatch<AddResponseOnQuestion_Action>) => {
        dispatch({
            type: Question_Types.ADD_RESPONSE_ON_QUESTION,
            payload: value
        })
    }
}
export const onDeleteResponseOnQuestion = (value: Payload<DeleteResponseOnQuestion_Action>) => {
    return(dispatch: Dispatch<DeleteResponseOnQuestion_Action>) => {
        dispatch({
            type: Question_Types.DELETE_RESPONSE_ON_QUESTION,
            payload: value
        })
    }
}
export const onEditResponseOnQuestion = (value: Payload<EditResponseOnQuestion_Action>) => {
    return(dispatch: Dispatch<EditResponseOnQuestion_Action>) => {
        dispatch({
            type: Question_Types.EDIT_RESPONSE_ON_QUESTION,
            payload: value
        })
    }
}