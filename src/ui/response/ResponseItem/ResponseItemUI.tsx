import React, {FC} from 'react';
import UserBlack_Icon from "../../../assets/icons/user_black.png";
import styles from "./ResponseItem.module.css";
import Like_Icon from "../../../assets/icons/like_black_icon.png";
import Response_Icon from "../../../assets/icons/response_icon.png";
import {Like, Response} from "../../../redux/action-types";


type ResponseItemUi_Props = {
    item: Response;
    actualResponses: Response[];
    handleAddLike: () => void;
    actualLikes: Like[];
    setResponseOnResponseActive: (value: boolean) => void;
}

const ResponseItemUI: FC<ResponseItemUi_Props> = ({item, actualResponses, actualLikes, handleAddLike, setResponseOnResponseActive, }) => {
    return (
        <div style={{display: "flex", padding: "40px 0", borderBottom: "1px solid #d3d3d3"}}>
            <div style={{width: 60}}><img src={UserBlack_Icon} alt={"user-icon"} width={24}/></div>
            <div>
                <div className={styles.date}>{item.date.toLocaleString()}</div>
                {/* todo - I would inject and type username if I had made user-table in db (with authorisation etc) */}
                <div className={styles.userName}>User</div>
                <div className={styles.text}>{item.text}</div>
                <div style={{display: "flex", gap: 20, alignItems: "center"}}>
                    <div onClick={() => handleAddLike()}>
                        <img src={Like_Icon} alt={"like"} width={20}/>
                        <span style={{marginLeft: 4}}>{actualLikes.length}</span></div>
                    <div onClick={() => setResponseOnResponseActive(true)}>
                        <img src={Response_Icon} alt={"response"} width={19}/>
                        <span style={{marginLeft: 4}}>{actualResponses.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponseItemUI;