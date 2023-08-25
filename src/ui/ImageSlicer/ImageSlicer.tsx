import React from 'react';
import "./ImageSlicer.css";
import {CSSTransition, TransitionGroup} from 'react-transition-group';


const ImageSlicer = (props: any) => {

    const {imageList, currentIndex, direction} = props;

    return (
        <TransitionGroup
            width={"100%"}
            style={{position: "relative"}}
        >
            <CSSTransition
                key={currentIndex}
                timeout={500}
                classNames={direction === "next" ? "slide" : "slide_reverse"}
                exit={false}
            >
                <img
                    src={imageList[currentIndex]}
                    width={"100%"}
                    alt={""}
                    style={{position: "relative"}}
                />
            </CSSTransition>
        </TransitionGroup>
    );
};

export default ImageSlicer;