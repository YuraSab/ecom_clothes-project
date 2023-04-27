import React, {FC, useEffect} from 'react';
import {Gender} from "../../../../redux/action-types";
import {useTypedSelector} from "../../../../hooks/redux/useTypedSelector";
import styles from "./GenderBarMobile.module.css";
import {NavLink} from "react-router-dom";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import {DropMenuList} from "../../BottomHeaderMenu/ElementList_DropDownMenu";
import {onSetDropDownMenu} from "../../../../redux/action-creators/DropDownMenu/DropDownMenu";
import {useAction} from "../../../../hooks/redux/useAction";
import ComebackAlive from "../../../../assets/pictures/comeback_alive.svg";
import GooglePlay from "../../../../assets/pictures/google-play.svg";
import AppStore from "../../../../assets/pictures/app-storesvg.svg";
import FacebookWhite from "../../../../assets/icons/facebook_white.png";
import InstagramWhite from "../../../../assets/icons/instagram_white.png";
import TelegramWhite from "../../../../assets/icons/telegram_white.png";
import YoutubeWhite from "../../../../assets/icons/youtube_white.png";


type GenderBarMobile_PropsTypes = {
    propGender: Gender,
    setBurgerMenuActive: (value: boolean) => void;
}

const GenderBarMobile: FC<GenderBarMobile_PropsTypes> = ({propGender, setBurgerMenuActive}) => {

    const {dropDownValue, gender} = useTypedSelector(state => state.headerState);

    const {onSetDropDownMenu, onSetGender} = useAction();

    const genderMas = DropMenuList.find(el => el.gender === gender);

    useEffect(() => {
        return (() => {
                // todo - save picked categories in localStorage and fetch them when user comeback from desktop to mobile screen
                onSetDropDownMenu("");

                window.addEventListener("resize", (ev) => {
                    if (document.body.clientWidth > 1025) {
                        setBurgerMenuActive(false);
                    }
                })
            }
        )
    }, []);


    return (
        gender && genderMas ?

            <div
                onClick={() => setBurgerMenuActive(false)}
                style={{inset: 0, position: "absolute", width: "100%", height: "125%"}}
            >

                <div className={styles.mainDiv}
                     onClick={event => event.stopPropagation()}
                >

                    <div className={styles.genderBar}>
                        <div className={styles.genderLinks}>
                            <NavLink
                                className={({isActive}) => (isActive ? styles.genderLinkActive : styles.genderLink)}
                                to={'/male'}
                                style={{paddingRight: 60}}
                            >
                                Для хлопців
                            </NavLink>
                            <NavLink
                                className={({isActive}) => (isActive ? styles.genderLinkActive : styles.genderLink)}
                                to={'/female'}
                            >
                                Для дівчат
                            </NavLink>
                        </div>


                        <div>
                            <div className={styles.left_block}>
                                <div className={styles.leftLink} style={{color: "#eb001c"}}>
                                    знижки
                                </div>
                            </div>
                            <div className={styles.left_block}>
                                <div className={styles.leftLink} style={{color: "#48DD00"}}>
                                    новинки
                                </div>
                            </div>
                        </div>


                        {
                            genderMas.gender === 'male' && <>
                                <div className={styles.left_block}>
                                    <div className={styles.leftLink} style={{color: "white"}}>Staff Basic</div>
                                </div>
                                <div className={styles.left_block}>
                                    <div className={styles.leftLink} style={{color: "white"}}>Staff Tactical</div>
                                </div>
                            </>
                        }


                        {
                            genderMas.clothList.map((el, index) => {
                                return (
                                    <div className={styles.left_block}
                                         key={index}
                                         style={{
                                             // background: dropDownValue === el.name ? "white" : "black",
                                             background: dropDownValue === el.name ? "white" : "none",
                                             color: dropDownValue === el.name ? "black" : "white"
                                         }}
                                         onClick={() => onSetDropDownMenu(el.name)}
                                    >
                                        <div className={styles.leftLink}>{el.title}</div>

                                        <div style={{visibility: dropDownValue === el.name ? "visible" : "hidden"}}>
                                            <DropDownMenu/>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                    <div className={styles.FAQBar}
                         style={{height: window.innerHeight - 285}}
                    >
                        <div className={styles.comebackAlive}>
                            <img src={ComebackAlive} alt={""}/>
                        </div>
                        <div className={styles.FAQLink}>НОВИНИ І ВІДГУКИ</div>
                        <div className={styles.FAQLink}>МАГАЗИНИ</div>
                        <div className={styles.FAQLink}>ПРО НАС</div>
                        <div className={styles.FAQLink}>СПІВРОБІТНИЦТВО</div>
                        <div className={styles.FAQLink}>ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ</div>

                        <div className={styles.FAQMedias}>
                            <img src={FacebookWhite} alt={"Facebook"} height={39}/>
                            <img src={InstagramWhite} alt={"Instagram"} height={28}/>
                            <img src={TelegramWhite} alt={"Telegram"} height={35}/>
                            <img src={YoutubeWhite} alt={"Youtube"} height={36}/>

                        </div>

                        <div className={styles.FAQApps}>
                            <img src={GooglePlay} alt="GooglePlay" className={styles.FAQApp}/>
                            <img src={AppStore} alt="AppStore" className={styles.FAQApp}/>
                        </div>
                    </div>
                </div>
            </div>
            : null
    );
};

export default GenderBarMobile;
