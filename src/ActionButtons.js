import React from 'react';

const ActionButtons = ({ 
    prevSlide, 
    nextSlide, 
    playSlide, 
    firstSlide, 
    lastSlide, 
    isPlay, 
    activeIndex, 
    dataLength 
}) => {
    const Buttons = [
        {
            name: !isPlay ? "Play" : "Pause",
            id: "play",
            isDisabled: false
        },
        {
            name: "First",
            id: "first",
            isDisabled: isPlay
        },
        {
            name: "Back",
            id: "back",
            isDisabled: isPlay || !activeIndex
        },
        {
            name: "Next",
            id: "next",
            isDisabled: isPlay || activeIndex === dataLength-1
        },
        {
            name: "Last",
            id: "last",
            isDisabled: isPlay
        },
    ];

    const handleAction = (id) => {
        switch (id) {
            case 'play':
                playSlide();
                break;

            case 'first':
                firstSlide();
                break;

            case 'back':
                prevSlide();
                break;

            case 'next':
                nextSlide();
                break;

            case 'last':
                lastSlide();
                break;

            default:
                break;
        }
    }

    return (
        <div>
            {Buttons.map(item => (
                <button 
                    key={item.id} 
                    onClick={() => handleAction(item.id)} 
                    disabled={item.isDisabled}
                >
                    {item.name}
                </button>
            ))}
        </div>
    )
}

export default ActionButtons;