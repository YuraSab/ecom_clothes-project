import {Question, Question_Actions, Question_Types, ResponseOnQuestion} from "../../action-types";

type InitialState_type = {
    questions: Question[],
    responses_on_questions: ResponseOnQuestion[],
}

const initialState: InitialState_type = {
    questions: [],
    responses_on_questions: [],
}

export default (state = initialState, action: Question_Actions): InitialState_type => {
    switch (action.type) {
        // questions
        case Question_Types.SET_QUESTIONS: {
            return {
                ...state,
                questions: action.payload,
            }
        }
        case Question_Types.ADD_QUESTION: {
            return {
                ...state,
                questions: [...state.questions, action.payload]
            }
        }
        case Question_Types.DELETE_QUESTION: {
            const filtered = state.questions.filter(el => el.id_question !== action.payload);
            return {
                ...state,
                questions: filtered,
            }
        }
        case Question_Types.EDIT_QUESTION: {
            let filtered = state.questions.filter(el => el.id_question !== action.payload.id_question);
            filtered = [...filtered, action.payload];
            return {
                ...state,
                questions: filtered,
            }
        }

        // responses on questions
        case Question_Types.SET_RESPONSES_ON_QUESTIONS: {
            return {
                ...state,
                responses_on_questions: action.payload,
            }
        }
        case Question_Types.ADD_RESPONSE_ON_QUESTION: {
            return {
                ...state,
                responses_on_questions: [...state.responses_on_questions, action.payload]
            }
        }
        case Question_Types.DELETE_RESPONSE_ON_QUESTION: {
            const filtered = state.responses_on_questions.filter(el => el.id_response_on_question !== action.payload);
            return {
                ...state,
                responses_on_questions: filtered,
            }
        }
        case Question_Types.EDIT_RESPONSE_ON_QUESTION: {
            let filtered = state.responses_on_questions.filter(el => el.id_response_on_question !== action.payload.id_response_on_question);
            filtered = [...filtered, action.payload];
            return {
                ...state,
                responses_on_questions: filtered,
            }
        }

        default: {
            return state
        }
    }
}