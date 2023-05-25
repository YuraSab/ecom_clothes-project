import React, {FC, useEffect, useState} from 'react';
import {Question} from "../../../redux/action-types";
import styles from "./AddResponseOnQuestion.module.css";
import UserBlack_Icon from "../../../assets/icons/user_black.png";
import {ActualUser} from "../../../global/user/User";
import {useAction} from "../../../hooks/redux/useAction";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";

type QuestionItem_Props = {
    item: Question,
    setResponseToQuestionActive: (value: boolean) => void;
}
const AddResponseOnQuestion: FC<QuestionItem_Props> = ({item, setResponseToQuestionActive}) => {

    const {responses_on_questions} = useTypedSelector(state => state.questionReducer);
    const {onAddResponseOnQuestion} = useAction();

    const [areaText, setAreaText] = useState<any>("");


    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return (() => {
            document.body.style.overflowY = 'auto';
        })
    }, [])


    const handleResponseOnQuestion = () => {
        if(areaText !== "" && ActualUser.role === "admin") {
            onAddResponseOnQuestion({
               id_response_on_question: responses_on_questions.length+1,
               id_question: item.id_question,
               id_admin: ActualUser.id,
               text: areaText,
               date: new Date(),
               edited: false,
            });
            setResponseToQuestionActive(false)
        }
    }

    console.log(`responses_on_questions`,responses_on_questions)
    return (
        <div className={styles.overlay} onClick={() => setResponseToQuestionActive(false)}>
            <div className={styles.mainDiv} onClick={(event) => event.stopPropagation()}>

                <div className={styles.accountOrMediaCaption} style={{paddingTop: 40}}>Питання:</div>

                <div style={{display: "flex", padding: "40px 0", borderBottom: "1px solid #d3d3d3"}}>
                    <div style={{width: 60}}><img src={UserBlack_Icon} alt={"user-icon"} width={24}/></div>
                    <div>
                        <div className={styles.date}>{item.date.toLocaleString()}</div>
                        {/* todo - I would inject and type username if I had made user-table in db (with authorisation etc) */}
                        <div className={styles.userName}>{ActualUser.name}</div>
                        <div className={styles.text}>{item.text}</div>
                        <div style={{display: "flex", gap: 20, alignItems: "center"}}>
                        </div>
                    </div>
                </div>

                <div className={styles.accountOrMediaCaption} style={{paddingTop: 40}}>Дайте відповідь:</div>

                <textarea
                    onChange={(e) => setAreaText(e.target.value)}
                    rows={5}
                    cols={8}
                    maxLength={400}
                    style={{width: "100%"}}
                >
                </textarea>


                <div className={styles.leftResponse} onClick={() => handleResponseOnQuestion()}>
                    Залишити відповідь
                </div>
            </div>
        </div>
    );
};

export default AddResponseOnQuestion;