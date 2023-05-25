import React, {useEffect, useState} from 'react';
import {clothesService} from "../../../services/ClothesService";
import {Cloth} from "../../../db/clothes-db";
import {ClothesDescription} from "../../../db/cloth-descroptions";
import styles from "./ChosenItem.module.css";
import {DropMenuList} from "../../../components/Header/HeaderLinks/ElementList_DropDownMenu";
import Like from "../../../assets/icons/like_icon.png";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/redux/useTypedSelector";
import {Question, Response} from "../../../redux/action-types";
import WhitePlus from "../../../assets/icons/wite_plus.png";
import ResponseItem from "../../../ui/response/ResponseItem/ResponseItem";
import AddResponse from "../../../ui/response/AddResponse/AddResponse";
import AddQuestion from "../../../ui/question/AddQuestion/AddQuestion";
import QuestionItem from "../../../ui/question/QuestionItem/QuestionItem";

type PhotoItem = {
    id: number;
    src: string;
}

const ChosenItem = () => {

    const {id} = useParams();
    const {gender} = useTypedSelector(state => state.headerState);
    const {responses, parent_child_comments} = useTypedSelector(state => state.responseReducer);
    const {questions, responses_on_questions} = useTypedSelector(state => state.questionReducer);

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

    console.log(questions)
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
                        <div>{chosenItemDetails?.describe}</div>
                        <br/>
                        <div>Матеріал: <br/>{chosenItemDetails?.fabric}</div>
                        <br/>
                        <div>Деталі та крій: <br/>{chosenItemDetails?.details_and_cut}</div>
                        <br/>
                        <div>Колір: <br/>{chosenItemDetails?.color}</div>
                        <br/>
                        <div>Догляд: <br/>{chosenItemDetails?.supervision}</div>
                        <br/>
                        <div>На фото: <br/>{chosenItemDetails?.on_the_photo}</div>
                        <br/>
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
                            ВІДГУКИ
                        </div>

                        <div onClick={() => setResponsesOrQuestions("question")}
                             className={styles.responseQuestionButton}
                             style={{borderBottom: responsesOrQuestions === "question" ? "2px black solid" : "none"}}>
                            ПИТАННЯ
                        </div>
                    </div>

                    <div className={styles.responseQuestionBlock} style={{paddingTop: 40}}>
                        <div className={styles.addResponseOrQuestion} onClick={() => setResponseOrQuestionActive(true)}>
                            <img src={WhitePlus}
                                 alt={`Додати ${responsesOrQuestions === "response" ? "відгук" : "питання"}`}/>
                            <div>Додати {responsesOrQuestions === "response" ? "відгук" : "питання"}</div>
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
                </div>
            </div>
        </>
    );
};

export default ChosenItem;