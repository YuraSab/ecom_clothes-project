import React, {FC, useEffect, useState} from 'react';
import {Cloth} from "../../../db/clothes-db";
import styles from "./CategoryItem.module.css";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import Like_thick_white from "../../../assets/icons/like_thick_white.png";
import Like_thick_black from "../../../assets/icons/like_thick_black.png";
import {ActualUser} from "../../../global/user/User";
import {useAction} from "../../../hooks/redux/useAction";

type CategoryItem_propsType = {
    item: Cloth;
}

const CategoryItem: FC<CategoryItem_propsType> = ({item}) => {

    const {gender} = useTypedSelector(state => state.headerState);
    const {productLikes} = useTypedSelector(state => state.productLike);
    const {onAddProductLike, onDeleteProductLike} = useAction();
    const [isLiked, setIsLiked] = useState<boolean>(false);

    useEffect(() => {
        const likesOfProduct = productLikes.filter(el => el.id_product === item.id);
        const didUserLike = likesOfProduct.find(el => el.id_user === ActualUser.id);
        if(didUserLike) {
            setIsLiked(true)
        }
    }, []);


    const handleAddLike = () => {
        const likesOfProduct = productLikes.filter(el => el.id_product === item.id);
        const didUserLike = likesOfProduct.find(el => el.id_user === ActualUser.id);
        if(didUserLike) {
            onDeleteProductLike(didUserLike.id_product_like);
            setIsLiked(false);
        }else {
            onAddProductLike({
                id_product_like: productLikes.length+1,
                id_user: ActualUser.id,
                id_product: item.id,
                date: new Date(),
            });
            setIsLiked(true);
        }
    }

    return (
        <Link to={`/${gender}/${item.id}`} style={{textDecoration: "none", color: "black"}}>
            <div className={styles.main}>


                <div>
                    <img src={item.photo}
                         alt={item.name}
                         width={"100%"}
                    />
                    <div style={{ left: "80%", bottom: "80%", position: "relative", color: "lime", width: 30, zIndex: 10}}>
                        {/*Text or icon*/}
                        <div style={{background: "white",
                            width: 30, height: 30,
                            zIndex: 10,
                            border: "1px #D3D3D3 solid",
                            borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}
                             onClick={(e) => {
                                 e.preventDefault()
                                 e.stopPropagation()
                                 handleAddLike()}
                             }
                        >
                            {
                                isLiked ?
                                    <img src={Like_thick_black} alt={"like"} width={22}/>
                                    :
                                    <img src={Like_thick_white} alt={"like"} width={22}/>
                            }
                        </div>
                    </div>
                </div>



                <div>{item.name}</div>
                <div><b>{item.price} грн.</b></div>
            </div>
        </Link>
    );
};

export default CategoryItem;