import React, {useEffect, useState} from 'react';
import styles from "./Cart.module.css";
import {useTypedSelector} from "../../hooks/redux/useTypedSelector";
import {Cloth} from "../../db/clothes-db";
import {useParams} from "react-router-dom";
import {clothesService} from "../../services/ClothesService";
import {useAction} from "../../hooks/redux/useAction";
import CartItem from "./CartItem";
import {WishListElement} from "../../redux/action-types";


type WishListItem_props = {
    id: number,
    element: Cloth,
}

const Cart = () => {

    const {wishList} = useTypedSelector(state => state.wishList);
    const {onDeleteFromWishList} = useAction();
    const ClothesService = clothesService;
    const {userId} = useParams();

    const [wishedProductsList, setWishedProductsList] = useState<WishListItem_props[]>([]);
    const [userWishList, setUserWishList] = useState<WishListElement[]>([]);
    const [sum, setSum] = useState<number>(0);

    useEffect(() => {
        const userWishes = wishList.filter(el => el.id_user === Number(userId));
        setUserWishList(userWishes);
        const wishedProducts = userWishes.map(el => ClothesService.getClothesById(el.id_product)) as Cloth[];
        const wishedItems = [];
        for (let i = 0; i < wishedProducts.length; i++) {
            let item = {
                id: userWishes[i].id_wishList_element,
                element: wishedProducts[i]
            };
            wishedItems.push(item);
        }
        setWishedProductsList(wishedItems);

        let actualSum = 0;
        for(let i = 0; i < wishedProducts.length; i++){
            let oneElement = wishedProducts[i].price * userWishes[i].count;
            actualSum += oneElement;
        }
        setSum(actualSum);
    }, [wishList]);

    const onClearUserWishList = () => {
        if (wishedProductsList.length !== 0) {
            const wishedProductsList = wishList.filter(el => el.id_user === Number(userId));
            for (let i = 0; i < wishedProductsList.length; i++) {
                onDeleteFromWishList(wishedProductsList[i].id_wishList_element);
            }
            setWishedProductsList([]);
        }
    };


    return (
        <div className={styles.main}>
            <div className={styles.contentBlock}>

                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div className={styles.like_caption_bookmark}>КОШИК</div>
                    {
                        wishedProductsList.length ?
                            <div className={styles.like_clean_bookmark} onClick={() => onClearUserWishList()}>
                                Очистити КОШИК
                            </div>
                            :
                            <div className={styles.like_caption_bookmark} style={{fontSize: 18}}>
                                <br/>
                                Немає доданих товарів
                            </div>
                    }
                </div>

                <div className={styles.itemAndSum}>
                    <div>
                        {
                            wishedProductsList.map(el => <CartItem item={el.element} id={el.id} key={el.id}/>)
                        }
                    </div>
                    {
                        wishedProductsList.length ?
                        <div className={styles.productPay}>
                            <div className={styles.sumForPay}>СУМА ДО ОПЛАТИ ЗА ТОВАР</div>
                            <div className={styles.sumForPay} style={{fontSize: 24, color: "black"}}>{sum} грн</div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
};
export default Cart;