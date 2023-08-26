import React, {FC, useEffect} from 'react';
import {Link} from "react-router-dom";
import {ActualUser} from "../../global/user/User";
import SuccessImg from "../../assets/icons/success_green_icon.png";
import styles from "./OnAddToCart.module.css";
import BackArrow from "../../assets/icons/arrow_left_black_icon.png";
import ErrorImg from "../../assets/icons/error_red_icon.png";

type OnAddToCart_props = {
    isAddingToCart: "justAdded" | "alreadyAdded" | false;
    setIsAddingToCart: (value: "justAdded" | "alreadyAdded" | false) => void;
}

const OnAddToCart: FC<OnAddToCart_props> = ({isAddingToCart, setIsAddingToCart}) => {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return (() => {
            document.body.style.overflowY = 'auto';
        })
    }, []);

    return (
        <div className={styles.overlay} onClick={() => setIsAddingToCart(false)}>
            {
                isAddingToCart === "justAdded" ?
                    <div style={{background: "white"}} onClick={event => event.stopPropagation()}>
                        <div className={styles.topItems}>
                            <img src={SuccessImg} alt={"successfully added"} width={30}/>
                            <div className={styles.done}>
                                Done{/*Виконано*/}
                            </div>
                            <div className={styles.purchaseAdded}>
                                {/*ТОВАР УСПІШНО ДОДАНО У КОШИК*/}
                                PRODUCT SUCCESSFULLY ADDED TO CART
                            </div>
                        </div>
                        <div className={styles.bottomItems}>
                            <div onClick={() => setIsAddingToCart(false)} className={styles.bottomItem}
                                 style={{backgroundColor: "#eee", color: "black"}}
                            >
                                <img src={BackArrow} alt={"back"} width={20}/>
                                Continue shopping {/*Продовжити покупки*/}
                            </div>
                            <Link to={`/user/${ActualUser.id}/cart`} className={styles.bottomItem}
                                  style={{backgroundColor: "black", color: "white"}}
                            >
                                Go to cart{/*Перейти до кошика*/}
                            </Link>
                        </div>
                    </div>
                    :
                    <div style={{background: "white"}} onClick={event => event.stopPropagation()}>
                        <div className={styles.topItemsError}>
                            <img src={ErrorImg} alt={"error"} width={38}/>
                            <div className={styles.error}>
                                Error{/*Помилка*/}
                            </div>
                            <div className={styles.alreadyAdded}>
                                {/*Товар уже додано у кошик*/}
                                The product has already been added to the cart
                            </div>
                        </div>
                        <div className={styles.bottomItems}>
                            <div onClick={() => setIsAddingToCart(false)} className={styles.bottomItem}>
                                Continue{/*Продовжити*/}
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default OnAddToCart;