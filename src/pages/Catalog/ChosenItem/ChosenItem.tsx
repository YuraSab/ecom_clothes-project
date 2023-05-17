import React, {useEffect, useState} from 'react';
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import {ClothesDescription} from "../../../db/cloth-descroptions";
import styles from "./ChosenItem.module.css";
import {DropMenuList} from "../../../components/Header/BottomHeaderMenu/ElementList_DropDownMenu";
import Like from "../../../assets/icons/like_icon.png";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";

type PhotoItem = {
    id: number;
    src: string
}

const ChosenItem = () => {

    const {id} = useParams();
    const {gender} = useTypedSelector(state => state.headerState);

    const [chosenItem, setChosenItem] = useState<Cloth | null | undefined>(null);
    const [chosenItemDetails, setChosenItemDetails] = useState<ClothesDescription | null | undefined>(null);
    // here would like to be photos which have been injected from db wit images
    const [chosenItemPhotos, setChosenItemPhotos] = useState<PhotoItem[] | [] | undefined>([]);
    const [chosenItemPhoto, setChosenItemPhoto] = useState<number>(0);

    const ClothesService = clothesService;

    useEffect(() => {
        let cloth = ClothesService.getClothesById(Number(id));
        let clothDetails = ClothesService.getClothesDetailsById(Number(id));
        if (cloth) {
            setChosenItemPhotos([{id: 0, src: cloth.photo}, {id: 1, src: cloth.photo}, {id: 2, src: cloth.photo}, {id: 3, src: cloth.photo}]);
            setChosenItemPhoto(0);
            setChosenItem(cloth);
        }
        setChosenItemDetails(clothDetails);

        window.scrollTo(0, 0);
    }, [id]);


    return (
        <>
            <div className={styles.overlay}>
                {
                    chosenItem && chosenItemPhotos &&
                    <div className={styles.main}>
                        <div className={styles.picturesBlock}>
                            <div className={styles.imgList}>
                                {
                                    chosenItemPhotos.map((el) =>
                                        <img src={el.src}
                                             alt={"photo"}
                                             style={{opacity: el.id === chosenItemPhoto || window.innerWidth < 1086 ? 1 : 0.7}}
                                             key={el.id}
                                             onClick={() => setChosenItemPhoto(el.id)}
                                        />
                                    )
                                }
                            </div>
                            <div className={styles.imgChosen}>
                                <img src={chosenItemPhotos[chosenItemPhoto].src} alt={"photo"}/>
                            </div>
                        </div>


                        <div className={styles.info}>

                            <div className={styles.pathBlock}>
                                <div className={styles.pathList}>
                                <span>
                                    Магазин
                            <span style={{padding: 10}}>&mdash;&mdash;</span>
                                </span>
                                    <span>
                                    {gender === "male" ? "Для хлопців" : "Для дівчат"}
                                    <span style={{padding: 10}}>&mdash;&mdash;</span>
                                </span>
                                    <span>
                                    {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.title}
                                        <span style={{padding: 10}}>&mdash;&mdash;</span>
                                </span>
                                    <span style={{color: "black"}}>
                                    {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.categories?.find(el => el.link === chosenItem?.subcategory)?.name}
                                </span>
                                </div>
                            </div>

                            <div className={styles.title}>
                                <div>
                                    {chosenItem.name}
                                </div>
                                <img src={Like} alt={"like"}/>
                            </div>

                            <div className={styles.infoSpans}>
                            <span>
                            АРТИКУЛ: {chosenItem.id}
                            </span>
                                <span>
                            КАТЕГОРІЯ: {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.categories?.find(el => el.link === chosenItem?.subcategory)?.name}
                            </span>
                                <span>
                            БРЕНД: STAFF
                            </span>
                            </div>

                            <div className={styles.price}>
                                {chosenItem.price} грн.
                            </div>


                            <div className={styles.add}>
                                <div style={{background: "rgb(0, 94, 15)", color: "rgb(255, 255, 255)"}}>
                                    Додати в кошик
                                </div>
                                <div style={{background: "rgb(199, 199, 199)", color: "black"}}>
                                    Купити в один клік
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>

            <div className={styles.descriptionOverlay}>
                <div className={styles.descriptionBlock}>
                    <div className={styles.descriptionTitle}>Опис</div>
                    <div className={styles.descriptionValue}>
                        <div>{chosenItemDetails?.describe}</div><br/>
                        <div>Матеріал: <br/>{chosenItemDetails?.fabric}</div><br/>
                        <div>Деталі та крій: <br/>{chosenItemDetails?.details_and_cut}</div><br/>
                        <div>Колір: <br/>{chosenItemDetails?.color}</div><br/>
                        <div>Догляд: <br/>{chosenItemDetails?.supervision}</div><br/>
                        <div>На фото: <br/>{chosenItemDetails?.on_the_photo}</div><br/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChosenItem;