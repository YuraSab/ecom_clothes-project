import React, {FC, useEffect} from 'react';
import styles from "./AddResponse.module.css";
import CrossIcon from "../../../assets/icons/cross_black_icon.svg";
import FacebookIcon from "../../../assets/icons/facebook_black_icon.png";
import GoogleIcon from "../../../assets/icons/google_black_icon.png";
import ArrowLeft from "../../../assets/icons/arrow_left_black_icon.png";

type AddResponse_Props = {
    setResponseOrQuestionActive: (value: boolean) => void;
}

const AddResponse_NonAuthorised: FC<AddResponse_Props> = ({setResponseOrQuestionActive}) => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return (() => {
            document.body.style.overflowY = 'auto';
        })
    }, [])

    return (
        <div className={styles.overlay} onClick={() => setResponseOrQuestionActive(false)}>
            <div className={styles.mainDiv} onClick={(event) => event.stopPropagation()}>

                <div className={styles.chooseData}>
                    <div className={styles.login}>
                        <div>Вхід</div>
                        <img src={CrossIcon} alt={"close"} width={20}/>
                    </div>
                    <div className={styles.accountOrMedia}>
                        <div>
                            <div className={styles.accountOrMediaCaption}>
                                Через акаунт
                            </div>
                            <label>
                                Номер телефону
                            </label>
                            <input/>
                            <br/><br/>
                            <label>
                                Пароль
                            </label><br/>
                            <input/>
                        </div>
                        <div>
                            <div className={styles.accountOrMediaCaption}>
                                Через <br/>соцмережу
                            </div>
                            <div style={{display: "flex", alignItems: "center", gap: 20}}>
                                <img src={FacebookIcon} alt={"facebook"}/>
                                <img src={GoogleIcon} alt={"google account"} width={44}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.restore_access}>
                    Відновлення доступу
                </div>

                <div className={styles.log_sign_in}>
                    {/* todo - only if used not authorised, show this (no authorising at now) */}
                    <div style={{color: "black", background: "#eee"}}><img src={ArrowLeft} alt={"sign-in"} height={30}/> Реєстрація</div>
                    <div style={{color: "white", background: "black"}}>Вхід</div>
                </div>

            </div>
        </div>
    );
};

export default AddResponse_NonAuthorised;