import React, {FC} from 'react';
import styles from "./Footer.module.css";
import MasterCard_Visa from "../../assets/pictures/mastercard_visa.png";
import FaceBook_Icon from "../../assets/icons/facebook_black_icon.png";
import Instagram_Icon from "../../assets/icons/instagram_black_icon.png";
import Telegram_Icon from "../../assets/icons/telegram_black_icon.png";
import Youtube_Icon from "../../assets/icons/youtube_black_icon.png";
import GooglePlay from "../../assets/pictures/google_play.svg";
import AppStore from "../../assets/pictures/app_store.svg";
import {useLocation} from "react-router-dom";


const Footer: FC = () => {

    const location = useLocation();

    return (
        <div className={styles.overlay}>

            <div className={styles.mainDiv}>
                {
                    location.pathname.includes('female') ?
                        <div className={`${styles.catalogList} ${styles.catalog}`}>
                            <div>CATALOG{/*КАТАЛОГ*/}</div>
                            <span style={{color: "#EB001C"}}>Discounts{/*ЗНИЖКИ*/}</span>
                            <span style={{color: "#48DD00"}}>Novelty{/*НОВИНКИ*/}</span>
                            <span>CLOTHES{/*ОДЯГ*/}</span>
                            <span>SHOES{/*ВЗУТТЯ*/}</span>
                            <span>ACCESSORIES{/*АКСЕСУАРИ*/}</span>
                        </div>
                        :
                        <div className={`${styles.catalogList} ${styles.catalog}`}>
                            <div>КАТАЛОГ</div>
                            <span style={{color: "#EB001C"}}>Discounts</span>
                            <span style={{color: "#48DD00"}}>Novelty</span>
                            <span>STAFF BASIC</span>
                            <span>STAFF TACTICAL</span>
                            <span>CLOTHES{/*ОДЯГ*/}</span>
                            <span>SHOES{/*ВЗУТТЯ*/}</span>
                            <span>BAGS AND BACKPACKS{/*РЮКЗАКИ ТА СУМКИ*/}</span>
                            <span>ACCESSORIES{/*АКСЕСУАРИ*/}</span>
                        </div>
                }

                <div className={`${styles.catalogList} ${styles.info}`}>
                    <div>INFO{/*ІНФОРМАЦІЯ*/}</div>
                    <span>STORES{/*МАГАЗИНИ*/}</span>
                    <span>ABOUT US{/*ПРО НАС*/}</span>
                    <span>DELIVERY, PAYMENT, RETURN{/*ДОСТАВКА, ОПЛАТА, ПОВЕРНЕННЯ*/}</span>
                    <span>NEWS AND RESPONDS{/*НОВИНИ І ВІДГУКИ*/}</span>
                </div>
                <div className={styles.cooperate_list}>
                    <span>COOPERATION{/*СПІВРОБІТНИЦТВО*/}</span>
                    <span>PUBLIC OFFER AGREEMENT{/*ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ*/}</span>
                    <span>PRIVACY POLICY{/*ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ*/}</span>
                    <img src={MasterCard_Visa} alt={"visa & mastercard"}/>
                </div>
                <div className={styles.catalogList}>
                    <div className={styles.socialMedia}>SOCIAL MEDIAS{/*СОЦІАЛЬНІ МЕРЕЖІ*/}</div>
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
        </div>
    );
};

export default Footer;