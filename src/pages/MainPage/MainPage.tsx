import React, {FC, useEffect, useState} from 'react';
import styles from "./MainPage.module.css";
import ImgOneM from "../../assets/pictures/main_page_male_1.jpeg";
import ImgTwoM from "../../assets/pictures/main_page_male_2.jpeg";
import ImgOneF from "../../assets/pictures/main_page_female_1.jpeg";
import Left from "../../assets/icons/left_white_icon.png";
import Right from "../../assets/icons/right_white_icon.png";
import TShirtsM from "../../assets/pictures/MaleMainPage_t-shirts.jpeg";
import SweatShirtsM from "../../assets/pictures/MaleMainPage_sweat-shirts.jpeg";
import PantsM from "../../assets/pictures/MaleMainPage_pants.jpeg";
import SneakersM from "../../assets/pictures/MaleMainPage_sneakers.jpeg";
import PantsF from "../../assets/pictures/FemaleMainPage_pants.jpeg";
import DressesF from "../../assets/pictures/FemaleMainPage_dresses.jpeg";
import TShirtsF from "../../assets/pictures/FemaleMainPage_t-shirts.jpeg";
import ShortsF from "../../assets/pictures/FemaleMainPage_shorts.jpeg";
import {Cloth} from "../../db/clothes-db";
import {clothesService} from "../../services/ClothesService";
import CategoryItem from "../Catalog/ListItem/CategoryItem";
import {Link} from "react-router-dom";

type MaleMainPage_props = {
    propGender: "male" | "female"
}
type genderLinkAndPhoto = {
    img: string,
    link: string,
}

const MaleMainPage: FC<MaleMainPage_props> = ({propGender}) => {

    const ClothesService = clothesService;
    const maleSet: genderLinkAndPhoto[] = [{img: TShirtsM, link: "/male/polo_and_t-shirts"}, {img: SweatShirtsM, link: "/male/sweatshirts"}, {img: PantsM, link: "/male/pants"}, {img: SneakersM, link: "/male/sneakers"}];
    const femaleSet: genderLinkAndPhoto[] = [{img: PantsF, link: "/female/pants"}, {img: DressesF, link: "/female/dresses"}, {img: TShirtsF, link: "/female/tops_and_t-shirts"}, {img:ShortsF, link: "/female/shorts"}];

    const [actualImage, setActualImage] = useState<string>("");
    const [listOfNewest, setListOfNewest] = useState<Cloth[]>([]);
    const [genderLinksAndPhotos, setGenderLinksAndPhotos] = useState<genderLinkAndPhoto[]>([]);

    const handleOnSetImg = () => {
        if (propGender === "male") {
            if (actualImage === ImgOneM) {
                setActualImage(ImgTwoM);
            } else {
                setActualImage(ImgOneM);
            }
        } else {
            setActualImage(ImgOneF);
        }
    }

    useEffect(() => {
        if (propGender === "male") {
            setGenderLinksAndPhotos(maleSet);
        } else {
            setGenderLinksAndPhotos(femaleSet);
        }
        const news = ClothesService.getNewest(propGender);
        setListOfNewest(news);
        handleOnSetImg();
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
                        {
                            genderLinksAndPhotos.map(el =>
                                <Link to={el.link} style={{textDecoration: "none"}} key={el.img}>
                                    <div className={styles.previewImageBlock}>
                                        <img src={el.img} alt={""} width={"100%"}/>
                                        <div className={styles.linkCaption}>Перейти</div>
                                    </div>
                                </Link>
                            )
                        }
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