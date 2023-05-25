import React, {FC, useEffect, useState} from 'react';
import styles from "./QuestionItem.module.css";
import UserBlack_Icon from "../../../assets/icons/user_black.png";
import Response_Icon from "../../../assets/icons/response_icon.png";
import {Question, ResponseOnQuestion} from "../../../redux/action-types";
import {ActualUser} from "../../../global/user/User";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import AddResponseOnQuestion from "../AddResponseOnQuestion/AddResponseOnQuestion";

type QuestionItem_Props = {
    item: Question,
}

const QuestionItem: FC<QuestionItem_Props> = ({item}) => {

    const {responses_on_questions} = useTypedSelector(state => state.questionReducer);


    const [responsesToQuestion, setResponsesToQuestion] = useState<ResponseOnQuestion[]>([]);
    const [responseToQuestionActive, setResponseToQuestionActive] = useState<boolean>(false);

    useEffect(() => {
        const filteredResponsesOnQuestion = responses_on_questions.filter(el => el.id_question === item.id_question);
        setResponsesToQuestion(filteredResponsesOnQuestion);
    }, [responses_on_questions]);

    return (
        <div style={{display: "flex", padding: "40px 0", borderBottom: "1px solid #d3d3d3"}}>
            <div style={{width: 60}}><img src={UserBlack_Icon} alt={"user-icon"} width={24}/></div>
            <div>
                <div className={styles.date}>{item.date.toLocaleString()}</div>
                {/* todo - I would inject and type username if I had made user-table in db (with authorisation etc) */}
                <div className={styles.userName}>User</div>
                <div className={styles.text}>{item.text}</div>
                <div style={{display: "flex", gap: 20, alignItems: "center"}}>
                    {
                        ActualUser.role === "admin" &&
                        <div onClick={() => setResponseToQuestionActive(true)}>
                            <img src={Response_Icon} alt={"response"} width={19}/>
                            <span style={{marginLeft: 4}}>{responsesToQuestion.length}</span>
                        </div>
                    }


                    <div style={{display: "flex", flexDirection: "column"}}>
                        {
                            responsesToQuestion.map(el =>
                                <div style={{display: "flex", padding: "40px 0", borderBottom: "1px solid #d3d3d3"}}>
                                    <div style={{width: 60}}><img src={UserBlack_Icon} alt={"user-icon"} width={24}/>
                                    </div>
                                    <div>
                                        <div className={styles.date}>{el.date.toLocaleString()}</div>
                                        {/* todo - I would inject and type username if I had made user-table in db (with authorisation etc) */}
                                        <div className={styles.userName}>{ActualUser.name}</div>
                                        <div className={styles.text}>{el.text}</div>
                                        <div style={{display: "flex", gap: 20, alignItems: "center"}}>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    {
                        responseToQuestionActive &&
                        <AddResponseOnQuestion item={item} setResponseToQuestionActive={setResponseToQuestionActive}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;