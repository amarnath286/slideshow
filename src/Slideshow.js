import React, { useEffect, useState } from "react";
import { data } from './data';
import ActionButtons from "./ActionButtons";

const Slideshow = () => {
    const slideTimeout = 2000;
    let [activeIndex, setActiveIndex] = useState(0);
    const [isPlay, setPlay] = useState(false);
    const dataLength = data.length;

    useEffect(() => {
        if (isPlay) {
            let timeout;
            if (activeIndex < dataLength - 1) {
                timeout = setTimeout(() => setActiveIndex(activeIndex + 1), slideTimeout);
            }

            if (activeIndex === dataLength - 1) {
                timeout = setTimeout(() => setActiveIndex(0), slideTimeout);
            }
        }
    }, [isPlay, activeIndex])

    const prevSlide = () => {
        if (dataLength > activeIndex) {
            setActiveIndex(activeIndex-1);
        }
    }

    const nextSlide = () => {
        if (activeIndex < dataLength) {
            setActiveIndex(activeIndex+1);
        }
    }

    const playSlide = () => {
        setPlay(!isPlay);
    }

    const firstSlide = () => {
        setActiveIndex(0);
    }

    const lastSlide = () => {
        setActiveIndex(dataLength-1);
    }

    return (
        <>
            <div className="container">
                <img src={`${data[activeIndex]['src']}`} alt={`image${activeIndex}`} width="500" height="500" />
                <div className='centered'>{data[activeIndex] && data[activeIndex].title}</div>
            </div>
            <ActionButtons
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                playSlide={playSlide}
                firstSlide={firstSlide}
                lastSlide={lastSlide}
                isPlay={isPlay}
                activeIndex={activeIndex}
                dataLength={dataLength}
            />
        </>
    )
};

export default Slideshow;