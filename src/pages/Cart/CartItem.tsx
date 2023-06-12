import React, {FC, useEffect, useState} from 'react';
import {Cloth} from "../../db/clothes-db";
import styles from "./Cart.module.css";
import TrashIcon from "../../assets/icons/trash_black_icon.png";
import {useAction} from "../../hooks/redux/useAction";
import {useTypedSelector} from "../../hooks/redux/useTypedSelector";
import {Link} from "react-router-dom";

type CartItem_props = {
    item: Cloth,
    id: number
}

const CartItem: FC<CartItem_props> = ({item, id}) => {

    const {wishList} = useTypedSelector(state => state.wishList);
    const {onDeleteFromWishList, onPlusCountOfProduct, onMinusCountOfProduct} = useAction();

    const [count, setCount] = useState<number | undefined>(0);

    useEffect(() => {
        const actualCount = wishList.find(el => el.id_wishList_element === id)?.count;
        setCount(actualCount);
    }, [wishList]);

    const onPlusMinus = (value: "plus" | "minus") => {
        if (value === "plus") {
            if (count !== undefined && count < 10) {
                onPlusCountOfProduct(id);
            }
        } else if (value === "minus") {
            if (count !== undefined && count > 0) {
                onMinusCountOfProduct(id);
            }
        }
    };


    return (
        <div className={styles.itemMain}>
            <div className={styles.productData}>
                <img src={item.photo} alt={"product photo"}/>
                <Link to={`/${item.gender}/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                    <div>{item.name}</div>
                </Link>
            </div>

            <div className={styles.productOrder}>
                <div className={styles.plusMinusValue}>
                    <div onClick={() => onPlusMinus("minus")}>-</div>
                    <div>{count}</div>
                    <div onClick={() => onPlusMinus("plus")}>+</div>
                </div>
                <div className={styles.price}>
                    {item.price} грн
                </div>
                <img src={TrashIcon} alt={"delete"} width={20} onClick={() => onDeleteFromWishList(id)}/>
            </div>
        </div>
    );
};

export default CartItem;