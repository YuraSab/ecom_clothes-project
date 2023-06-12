import React, {FC, useEffect, useState} from 'react';
import styles from "./AddQuestion.module.css";
import {useAction} from "../../../hooks/redux/useAction";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {useParams} from "react-router-dom";
import {ActualUser} from "../../../global/user/User";

type AddQuestion_Props = {
    setResponseOrQuestionActive: (value: boolean) => void;
}
const AddQuestion: FC<AddQuestion_Props> = ({setResponseOrQuestionActive}) => {

    const {questions} = useTypedSelector(state => state.questionReducer);
    const {onAddQuestion} = useAction();

    const {id} = useParams();

    const [areaText, setAreaText] = useState<any>("");

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return (() => {
            document.body.style.overflowY = 'auto';
        })
    }, []);

    const handleAddQuestion = () => {
        if (areaText !== "") {
            onAddQuestion({
                id_question: questions.length+1,
                id_product: Number(id),
                id_user: ActualUser.id,
                text: areaText,
                date: new Date(),
                edited: false,
            });
            setResponseOrQuestionActive(false);
        }
    }


    return (
        <div className={styles.overlay} onClick={() => setResponseOrQuestionActive(false)}>
            <div className={styles.mainDiv} onClick={(event) => event.stopPropagation()}>
                <div className={styles.accountOrMediaCaption}>Додайте питання</div>
                <textarea
                    onChange={(e) => setAreaText(e.target.value)}
                    rows={5}
                    cols={8}
                    maxLength={400}
                >
                </textarea>
                <div className={styles.leftResponse}>
                    <div onClick={() => handleAddQuestion()}>
                        Додати питання
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddQuestion;