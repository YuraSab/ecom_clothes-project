import React, {useEffect, useState} from 'react';
import styles from "../Catalog/List/List/CategoryList.module.css";
import CategoryItem from "../Catalog/ListItem/CategoryItem";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/redux/useTypedSelector";
import {clothesService} from "../../services/ClothesService";
import {Cloth} from "../../db/clothes-db";
import {useAction} from "../../hooks/redux/useAction";

const Likes = () => {

    const {productLikes} = useTypedSelector(state => state.productLike);
    const {onDeleteProductLike} = useAction();

    const ClothesService = clothesService;
    const {userId} = useParams();

    const [likedProductsList, setLikedProductList] = useState<Cloth[]>([]);

    useEffect(() => {
        const userLikes = productLikes.filter(el => el.id_user === Number(userId));
        const likedProducts = userLikes.map(el => ClothesService.getClothesById(el.id_product)) as Cloth[];
        setLikedProductList(likedProducts)
    }, [productLikes]);

    const onClearUserLikes = () => {
        if (likedProductsList.length !== 0) {
            const userLikes = productLikes.filter(el => el.id_user === Number(userId));
            for (let i = 0; i < likedProductsList.length; i++) {
                onDeleteProductLike(userLikes[i].id_product_like);
            }
            setLikedProductList([]);
        }
    };


    return (
        <div className={styles.main}>
            <div className={styles.contentBlock}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className={styles.like_caption_bookmark}>
                        {/*Закладки*/}
                        Likes
                    </div>
                    {
                        likedProductsList.length ?
                            <div className={styles.like_clean_bookmark} onClick={() => onClearUserLikes()}>
                                {/*Очистити закладки*/}
                                Clean likes
                            </div>
                            :
                            <div className={styles.like_caption_bookmark} style={{fontSize: 18}}>
                                <br/>
                                {/*Немає доданих товарів*/}
                                No products added
                            </div>
                    }
                </div>
                <div className={styles.list}>
                    {
                        likedProductsList.length > 0 &&
                        likedProductsList.map(el => <CategoryItem key={el.id} item={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Likes;