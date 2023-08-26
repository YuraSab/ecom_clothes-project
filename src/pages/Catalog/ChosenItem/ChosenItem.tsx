import React, {useEffect, useState} from 'react';
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import {ClothesDescription} from "../../../db/cloth-descroptions";
import styles from "./ChosenItem.module.css";
import {DropMenuList} from "../../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import Like_think_white from "../../../assets/icons/like_thick_white_icom.png";
import Like_think_black from "../../../assets/icons/like_thick_black_icon.png";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {Question, Response, WishListElement} from "../../../redux/action-types";
import WhitePlus from "../../../assets/icons/wite_plus_icon.png";
import ResponseItem from "../../../ui/response/ResponseItem/ResponseItem";
import AddResponse from "../../../ui/response/AddResponse/AddResponse";
import AddQuestion from "../../../ui/question/AddQuestion/AddQuestion";
import QuestionItem from "../../../ui/question/QuestionItem/QuestionItem";
import {ActualUser} from "../../../global/user/User";
import {useAction} from "../../../hooks/redux/useAction";
import OnAddToCart from "../../../ui/cart/OnAddToCart";

type PhotoItem = {
    id: number;
    src: string;
}

const ChosenItem = () => {

    const {id} = useParams();
    const {gender} = useTypedSelector(state => state.headerState);
    const {responses, parent_child_comments} = useTypedSelector(state => state.responseReducer);
    const {questions, responses_on_questions} = useTypedSelector(state => state.questionReducer);
    const {productLikes} = useTypedSelector(state => state.productLike);
    const {wishList} = useTypedSelector(state => state.wishList);

    const {onAddProductLike, onDeleteProductLike} = useAction();
    const {onAddToWishList} = useAction();

    const [chosenItem, setChosenItem] = useState<Cloth | null | undefined>(null);
    const [chosenItemDetails, setChosenItemDetails] = useState<ClothesDescription | null | undefined>(null);
    // here would like to be photos which have been injected from db wit images
    const [chosenItemPhotos, setChosenItemPhotos] = useState<PhotoItem[] | [] | undefined>([]);
    const [chosenItemPhoto, setChosenItemPhoto] = useState<number>(0);

    const [responsesOrQuestions, setResponsesOrQuestions] = useState<"response" | "question">("response");
    const [responseOrQuestionActive, setResponseOrQuestionActive] = useState<boolean>(false);

    const [actualResponses, setActualResponses] = useState<Response[] | []>([]);
    const [actualResponsesParent, setActualResponsesParent] = useState<Response[]>([]);

    const [actualQuestions, setActualQuestions] = useState<Question[]>([]);
    const [actualQuestionsResponses, setActualQuestionsResponses] = useState<Question[]>([]);

    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isAddingToCart, setIsAddingToCart] = useState<"justAdded" | "alreadyAdded" | false>(false);

    const ClothesService = clothesService;


    useEffect(() => {
        let cloth = ClothesService.getClothesById(Number(id));
        let clothDetails = ClothesService.getClothesDetailsById(Number(id));
        if (cloth) {
            setChosenItemPhotos([{id: 0, src: cloth.photo}, {id: 1, src: cloth.photo}, {
                id: 2,
                src: cloth.photo
            }, {id: 3, src: cloth.photo}]);
            setChosenItemPhoto(0);
            setChosenItem(cloth);
        }
        setChosenItemDetails(clothDetails);

        window.scrollTo(0, 0);
    }, [id]);


    useEffect(() => {
        const filtered = responses.filter(el => el.id_product === Number(id));
        setActualResponses(filtered);
    }, [responses]);

    useEffect(() => {
        function isChild() {
            let onlyParentMas = [];
            for (let i = 0; i < actualResponses.length; i++) {
                let ifChild = parent_child_comments.find(el => el.id_child_response === actualResponses[i].id_response);
                if (!ifChild) {
                    onlyParentMas.push(actualResponses[i])
                }
            }
            setActualResponsesParent(onlyParentMas);
        }
        isChild();
    }, [actualResponses]);


    useEffect(() => {
        const filtered = questions.filter(el => el.id_product === Number(id));
        setActualQuestions(filtered);

        function isChild() {
            let onlyParentMas = [];
            for (let i = 0; i < questions.length; i++) {
                let ifChild = responses_on_questions.find(el => el.id_question === filtered[i].id_question);
                if (!ifChild) {
                    onlyParentMas.push(filtered[i])
                }
            }
            setActualQuestionsResponses(onlyParentMas);
        }
        isChild();
    }, [questions]);


    useEffect(() => {
        const likesOfProduct = productLikes.filter(el => el.id_product === chosenItem?.id);
        const didUserLike = likesOfProduct.find(el => el.id_user === ActualUser.id);
        if(didUserLike) {
            setIsLiked(true)
        }
    }, []);


    const handleAddLike = () => {
        const likesOfProduct = productLikes.filter(el => el.id_product === chosenItem?.id);
        const didUserLike = likesOfProduct.find(el => el.id_user === ActualUser.id);
        if(didUserLike) {
            onDeleteProductLike(didUserLike.id_product_like);
            setIsLiked(false);
        }else {
            onAddProductLike({
                id_product_like: productLikes.length+1,
                id_user: ActualUser.id,
                id_product: Number(id),
                date: new Date(),
            });
            setIsLiked(true);
        }
    }

    const handleOnAddProductToWishList = () => {
        const userWishList = wishList.filter(el => el.id_user === ActualUser.id);
        const actualProduct = userWishList.find(el => el.id_product === chosenItem?.id) as WishListElement;
        if(!actualProduct || userWishList.length === 0) {
            onAddToWishList({
                id_wishList_element: wishList.length + 1,
                id_user: ActualUser.id,
                id_product: Number(id),
                count: 1,
                date: new Date(),
            });
            setIsAddingToCart("justAdded");
        } else {
            setIsAddingToCart("alreadyAdded");
        }
    }


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
                                        {/*Магазин*/}
                                        Store
                                        <span style={{padding: 10}}>&mdash;&mdash;</span>
                                    </span>
                                    <span>
                                        {/*{gender === "male" ? "Для хлопців" : "Для дівчат"}*/}
                                        {gender === "male" ? "Male" : "Female"}
                                        <span style={{padding: 10}}>&mdash;&mdash;</span>
                                    </span>
                                    <span style={{textTransform: "capitalize"}}>
                                        {/*{DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.title}*/}
                                        {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.name
                                            .split("_")?.map(el => el.toUpperCase() === "AND" ? "&" : el).join(" ")}
                                        <span style={{padding: 10}}>&mdash;&mdash;</span>
                                    </span>
                                    <span style={{color: "black", textTransform: "capitalize"}}>
                                        {/*{DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.categories?.find(el => el.link === chosenItem?.subcategory)?.name}*/}
                                        {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.categories?.find(el => el.link === chosenItem?.subcategory)?.link
                                            .split("_")?.map(el => el.toUpperCase() === "AND" ? "&" : el).join(" ")}
                                    </span>
                                </div>
                            </div>

                            <div className={styles.title}>
                                <div>
                                    {chosenItem.name}
                                </div>
                                <span>
                                    {
                                        isLiked ?
                                            <img src={Like_think_black} alt={"like"} width={24} height={24} onClick={() => handleAddLike()}/>
                                            :
                                            <img src={Like_think_white} alt={"like"} width={24} height={24} onClick={() => handleAddLike()}/>
                                    }
                                </span>
                            </div>

                            <div className={styles.infoSpans}>
                                <span>
                                    {/*АРТИКУЛ:*/}
                                    ARTICLE: {" "} {chosenItem.id}
                                </span>
                                <span>
                                    {/*КАТЕГОРІЯ: {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.categories?.find(el => el.link === chosenItem?.subcategory)?.name}*/}
                                    CATEGORY: {" "}
                                    {DropMenuList?.find(el => el.gender === gender)?.clothList.find(el => el.name === chosenItem?.category)?.categories?.find(el => el.link === chosenItem?.subcategory)?.link
                                        .split("_")?.map(el => el.toUpperCase() === "AND" ? "&" : el).join(" ")}
                                </span>
                                <span>
                                    {/*БРЕНД:*/}
                                    BRAND: STAFF
                                </span>
                            </div>

                            <div className={styles.price}>
                                {/*грн.*/}
                                {chosenItem.price} UAH
                            </div>


                            <div className={styles.add}>
                                <div style={{background: "rgb(0, 94, 15)", color: "rgb(255, 255, 255)"}}
                                    onClick={() => handleOnAddProductToWishList()}
                                >
                                    {/*Додати в кошик*/}
                                    Add to cart
                                </div>
                                <div style={{background: "rgb(199, 199, 199)", color: "black"}}>
                                    {/*Купити в один клік*/}
                                    Buy in one click
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div className={styles.descriptionOverlay}>
                <div className={styles.descriptionBlock}>
                    <div className={styles.descriptionTitle}>Description{/*Опис*/}</div>
                    <div className={styles.descriptionValue}>
                        <div>{chosenItemDetails?.describe}</div><br/>
                        <div>Material:{/*Матеріал: */}<br/>{chosenItemDetails?.fabric}</div><br/>
                        <div>Details and cut:{/*Деталі та крій: */}<br/>{chosenItemDetails?.details_and_cut}</div><br/>
                        <div>Color:{/*Колір: */}<br/>{chosenItemDetails?.color}</div><br/>
                        <div>Care:{/*Догляд: */}<br/>{chosenItemDetails?.supervision}</div><br/>
                        <div>On the picture:{/*На фото: */}<br/>{chosenItemDetails?.on_the_photo}</div><br/>
                    </div>
                </div>
            </div>

            {/* todo - comments and questions */}
            <div className={styles.descriptionOverlay} style={{paddingBottom: 75}}>
                <div className={styles.descriptionBlock}>

                    <div className={styles.responseQuestionBlock}>
                        <div onClick={() => setResponsesOrQuestions("response")}
                             className={styles.responseQuestionButton}
                             style={{borderBottom: responsesOrQuestions === "response" ? "2px black solid" : "none"}}>
                            {/*ВІДГУКИ*/}
                            RESPONSE
                        </div>

                        <div onClick={() => setResponsesOrQuestions("question")}
                             className={styles.responseQuestionButton}
                             style={{borderBottom: responsesOrQuestions === "question" ? "2px black solid" : "none"}}>
                            {/*ПИТАННЯ*/}
                            QUESTION
                        </div>
                    </div>

                    <div className={styles.responseQuestionBlock} style={{paddingTop: 40}}>
                        <div className={styles.addResponseOrQuestion} onClick={() => setResponseOrQuestionActive(true)}>
                            <img src={WhitePlus}
                                 alt={`Додати ${responsesOrQuestions === "response" ? "відгук" : "питання"}`}/>
                            {/*<div>Додати {responsesOrQuestions === "response" ? "відгук" : "питання"}</div>*/}
                            <div>Add {responsesOrQuestions === "response" ? "response" : "question"}</div>
                        </div>
                    </div>
                    {
                        responsesOrQuestions === "response" ?
                            <div>{actualResponsesParent.map(el => <ResponseItem item={el} key={el.id_response}/>)}</div>
                            :
                            <div>{actualQuestions.map(el => <QuestionItem item={el} key={el.id_question}/>)}</div>
                    }
                    {
                        // todo - below case is for no authorised users
                        responseOrQuestionActive && responsesOrQuestions === "response" &&
                        <AddResponse setResponseOrQuestionActive={setResponseOrQuestionActive}/>
                    }
                    {
                        // todo - below case is for no authorised users
                        responseOrQuestionActive && responsesOrQuestions === "question" &&
                        <AddQuestion setResponseOrQuestionActive={setResponseOrQuestionActive}/>
                    }
                    {
                        isAddingToCart && <OnAddToCart setIsAddingToCart={setIsAddingToCart} isAddingToCart={isAddingToCart}/>
                    }
                </div>
            </div>
        </>
    );
};

export default ChosenItem;