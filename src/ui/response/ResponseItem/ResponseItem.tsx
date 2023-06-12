import React, {FC, useEffect, useState} from 'react';
import {ResponseLike, Response} from "../../../redux/action-types";
import styles from "./ResponseItem.module.css";
import UserBlack_Icon from "../../../assets/icons/user_black_icon.png";
import Like_Icon from "../../../assets/icons/like_black_icon.png";
import Response_Icon from "../../../assets/icons/response_black_icon.png";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {useAction} from "../../../hooks/redux/useAction";
import AddResponseOnResponse from "../AddResponeOnResponse/AddResponseOnResponse";
import {ActualUser} from "../../../global/user/User";

type ResponseItem_Props = {
    item: Response;
}

const ResponseItem: FC<ResponseItem_Props> = ({item}) => {

    const {response_likes, parent_child_comments, responses} = useTypedSelector(state => state.responseReducer);
    const {onAddResponseLike, onDeleteResponseLike} = useAction();

    const [responseOnResponseActive, setResponseOnResponseActive] = useState<boolean>(false);
    const [actualResponseLikes, setActualResponseLikes] = useState<ResponseLike[]>([]);
    const [actualResponses, setActualResponses] = useState<Response[]>([]);

    useEffect(() => {
        const filtered = response_likes.filter(el => el.id_response === item.id_response);
        setActualResponseLikes(filtered);
    }, [response_likes]);

    useEffect(() => {
        const actualResponsesOnResponse = parent_child_comments.filter(el => el.id_parent_response === item.id_response && el.id_parent_response);
        const filtered: Response[] = actualResponsesOnResponse.map(el => responses.find(item => item.id_response === el.id_parent_response)) as Response[];
        setActualResponses(filtered);
    }, [responses]);

    const handleAddResponseLike = () => {
        const responseLikes = response_likes.filter(el => el.id_response === item.id_response);
        const userLiked = responseLikes.find(el => el.id_user === ActualUser.id);

        if(userLiked) {
            onDeleteResponseLike(userLiked.id_response_like)
        }else{
            onAddResponseLike({
                id_response: item.id_response,
                id_response_like: response_likes.length+1,
                id_user: ActualUser.id,
                date: new Date(),
            })
        }
    };

    return (
        <div style={{display: "flex", padding: "40px 0", borderBottom: "1px solid #d3d3d3"}}>
            <div style={{width: 60}}><img src={UserBlack_Icon} alt={"user-icon"} width={24}/></div>
            <div>
                <div className={styles.date}>{item.date.toLocaleString()}</div>
                {/* todo - I would inject and type username if I had made user-table in db (with authorisation etc) */}
                <div className={styles.userName}>User</div>
                <div className={styles.text}>{item.text}</div>
                <div style={{display: "flex", gap: 20, alignItems: "center"}}>
                    <div onClick={() => handleAddResponseLike()}>
                        <img src={Like_Icon} alt={"like"} width={20}/>
                        <span style={{marginLeft: 4}}>{actualResponseLikes.length}</span></div>
                    <div onClick={() => setResponseOnResponseActive(true)}>
                        <img src={Response_Icon} alt={"response"} width={19}/>
                        <span style={{marginLeft: 4}}>{actualResponses.length}</span>
                    </div>
                </div>
            </div>
            {
                responseOnResponseActive && <AddResponseOnResponse item={item} handleAddResponseLike={handleAddResponseLike} actualResponseLikes={actualResponseLikes} setResponseOnResponseActive={setResponseOnResponseActive}/>
            }
        </div>
    );
};

export default ResponseItem;