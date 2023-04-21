import React, {FC} from 'react';
import styles from "./Footer.module.css";
import MasterCard_Visa from "../../assets/pictures/mastercard_visa.png";
import FaceBook_Icon from "../../assets/icons/facebook.png";
import Instagram_Icon from "../../assets/icons/instagram.png";
import Telegram_Icon from "../../assets/icons/telegram.png";
import Youtube_Icon from "../../assets/icons/youtube.png";
import GooglePlay from "../../assets/pictures/google-play.svg";
import AppStore from "../../assets/pictures/app-storesvg.svg";
import {useLocation} from "react-router-dom";
import {useLocationType} from "../../modules/global_elements";

const Footer: FC = () => {

    const location = useLocation<useLocationType>();

    return (
        <div className={styles.maidDiv}>
            {
                location.pathname.includes('female') ?
                    <div className={styles.catalogList}>
                        <div>КАТАЛОГ</div>
                        <span style={{color: "#EB001C"}}>ЗНИЖКИ</span>
                        <span style={{color: "#48DD00"}}>НОВИНКИ</span>
                        <span>ОДЯГ</span>
                        <span>ВЗУТТЯ</span>
                        <span>АКСЕСУАРИ</span>
                    </div>
                    :
                    <div className={styles.catalogList}>
                        <div>КАТАЛОГ</div>
                        <span style={{color: "#EB001C"}}>ЗНИЖКИ</span>
                        <span style={{color: "#48DD00"}}>НОВИНКИ</span>
                        <span>STAFF BASIC</span>
                        <span>STAFF TACTICAL</span>
                        <span>ОДЯГ</span>
                        <span>ВЗУТТЯ</span>
                        <span>РЮКЗАКИ ТА СУМКИ</span>
                        <span>АКСЕСУАРИ</span>
                    </div>
            }

            <div className={styles.catalogList}>
                <div>ІНФОРМАЦІЯ</div>
                <span>МАГАЗИНИ</span>
                <span>ПРО НАС</span>
                <span>ДОСТАВКА, ОПЛАТА, ПОВЕРНЕННЯ</span>
                <span>НОВИНИ І ВІДГУКИ</span>
            </div>
            <div className={styles.cooperate_list}>
                <span>СПІВРОБІТНИЦТВО</span>
                <span>ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ</span>
                <span>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</span>
                <img src={MasterCard_Visa} alt={"visa & mastercard"}/>
            </div>
            <div className={styles.catalogList} style={{width: 300}}>
                <div>СОЦІАЛЬНІ МЕРЕЖІ</div>
                <div className={styles.icon_list}>
                    <img src={FaceBook_Icon} alt={"FaceBook"}/>
                    <img src={Instagram_Icon} alt={"Instagram"}/>
                    <img src={Telegram_Icon} alt={"Telegram"}/>
                    <img src={Youtube_Icon} alt={"Youtube"}/>
                </div>
                <div className={styles.download_stores}>
                    <img src={GooglePlay} alt="GooglePlay"/>
                    <img src={AppStore} alt="AppStore"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;