import React, {useEffect, useState} from 'react';
import styles from "./MainPage.module.css";
import ImgOne from "../../assets/pictures/main_page_male_1.jpeg";
import ImgTwo from "../../assets/pictures/main_page_male_2.jpeg";
import Left from "../../assets/icons/left.png";
import Right from "../../assets/icons/right.png";
import TShirts from "../../assets/pictures/MaleMainPage_t-shirts.jpeg";
import SweatShirts from "../../assets/pictures/MaleMainPage_sweat-shirts.jpeg";
import Pants from "../../assets/pictures/MaleMainPage_pants.jpeg";
import Sneakers from "../../assets/pictures/MaleMainPage_sneakers.jpeg";
import {Cloth} from "../../db/clothes-db";
import {clothesService} from "../../services/ClothesService";
import CategoryItem from "../Catalog/ListItem/CategoryItem";
import {Link} from "react-router-dom";

const MaleMainPage = () => {

    const ClothesService = clothesService;

    const [actualImage, setActualImage] = useState<string>(ImgOne);
    const [listOfNewest, setListOfNewest] = useState<Cloth[]>([]);

    const handleOnSetImg = () => {
        if (actualImage === ImgOne) {
            setActualImage(ImgTwo);
        } else {
            setActualImage(ImgOne);
        }
    }

    useEffect(() => {
        const news = ClothesService.getNewest("male");
        setListOfNewest(news);
    }, []);

    return (
        <div>

            <div className={styles.previewImageBlock}>
                <img src={actualImage} width={"100%"} alt={""} style={{position: "relative"}}/>
                <div className={styles.sideArrows}>
                    <div className={styles.sideArrow} onClick={() => handleOnSetImg()}><img src={Left} alt={""}/></div>
                    <div className={styles.sideArrow} onClick={() => handleOnSetImg()}><img src={Right} alt={""}/></div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.contentBlock}>


                    <div className={styles.imgSet}>
                        <Link to={"/male/polo_and_t-shirts"} style={{textDecoration: "none"}}>
                            <div className={styles.previewImageBlock}>
                                <img src={TShirts} alt={""} width={"100%"}/>
                                <div className={styles.linkCaption}>Перейти</div>
                            </div>
                        </Link>
                        <Link to={"/male/sweatshirts"} style={{textDecoration: "none"}}>
                            <div className={styles.previewImageBlock}>
                                <img src={SweatShirts} alt={""} width={"100%"}/>
                                <div className={styles.linkCaption}>Перейти</div>
                            </div>
                        </Link>
                        <Link to={"/male/pants"} style={{textDecoration: "none"}}>
                            <div className={styles.previewImageBlock}>
                                <img src={Pants} alt={""} width={"100%"}/>
                                <div className={styles.linkCaption}>Перейти</div>
                            </div>
                        </Link>
                        <Link to={"/male/sneakers"} style={{textDecoration: "none"}}>
                            <div className={styles.previewImageBlock}>
                                <img src={Sneakers} alt={""} width={"100%"}/>
                                <div className={styles.linkCaption}>Перейти</div>
                            </div>
                        </Link>
                    </div>

                    <div style={{padding: "75px 0 40px 0"}}>
                        <span className={styles.titleOfList}>Новинки</span>
                        <div className={styles.list}>
                            {
                                listOfNewest.length > 0 &&
                                listOfNewest.map(el => <CategoryItem key={el.id} item={el}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MaleMainPage;