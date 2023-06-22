import React, {FC, useEffect, useState} from 'react';
import styles from "./AddResponse.module.css";
import {useAction} from "../../../hooks/redux/useAction";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {useParams} from "react-router-dom";
import {ActualUser} from "../../../global/user/User";

type AddResponse_Props = {
    setResponseOrQuestionActive: (value: boolean) => void;
}
const AddResponse: FC<AddResponse_Props> = ({setResponseOrQuestionActive}) => {

    const {responses} = useTypedSelector(state => state.responseReducer);
    const {onAddResponse} = useAction();

    const {id} = useParams();

    const [areaText, setAreaText] = useState<any>("");

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return (() => {
            document.body.style.overflowY = 'auto';
        })
    }, [])

    const handleAddResponse = () => {
        if (areaText !== "") {
            onAddResponse({
                id_response: responses.length + 1,
                id_user: ActualUser.id,
                id_product: Number(id),
                text: areaText,
                date: new Date(),
                edited: false,
            });
            setResponseOrQuestionActive(false);
        }
    };


    return (
        <div className={styles.overlay} onClick={() => setResponseOrQuestionActive(false)}>
            <div className={styles.mainDiv} onClick={(event) => event.stopPropagation()} style={{padding: 25}}>
                <div className={styles.accountOrMediaCaption}>Додайте відгук</div>
                <textarea
                    onChange={(e) => setAreaText(e.target.value)}
                    rows={5}
                    cols={8}
                    maxLength={400}
                >
                </textarea>
                <div className={styles.leftResponse}>
                    <div onClick={() => handleAddResponse()}>
                        Залишити відгук
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddResponse;