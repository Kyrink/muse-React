import React, { useState } from 'react';
import ArtCard from './ArtCard';

const InspireMe = () => {
    const [selectedOption, setSelectedOption] = useState('museum');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const getButtonClass = (option) => {
        return `cursor-pointer py-2 px-4 rounded-81xl flex flex-row items-center justify-center ${selectedOption === option ? 'bg-darkslategray text-white' : 'bg-gainsboro-200 text-gray-300'
            }`;
    };

    return (
        <div
            className="relative w-[1440px] h-[1933px] text-center text-[64px] text-black font-helvetica-neue"
            id="inspire me"
        >
            <div className="absolute h-full w-full top-[0px] right-[-3px] bottom-[0px] left-[3px] bg-whitesmoke-100" />
            <h1
                className="m-0 absolute top-[99px] left-[calc(50%_-_156px)] text-inherit leading-[100%] font-medium font-inherit"
                id="InspireMe"
            >
                Inspire Me
            </h1>
            <div className="absolute top-[292px] left-[calc(50%_-_243px)] w-[483px] overflow-x-auto flex flex-row items-center justify-start gap-[40px]" id="btn_filters">
                <button className={getButtonClass('museum')} id="museumToggle" onClick={() => handleOptionClick('museum')}>
                    <span className="relative text-sm leading-[115%] font-dm-sans">Museum</span>
                </button>
                <button className={getButtonClass('galleries')} id="gallerySlider" onClick={() => handleOptionClick('galleries')}>
                    <span className="relative text-sm leading-[115%] font-dm-sans">Galleries</span>
                </button>
                <button className={getButtonClass('activities')} id="activitiesSlider" onClick={() => handleOptionClick('activities')}>
                    <span className="relative text-sm leading-[115%] font-dm-sans">Activities</span>
                </button>
                <button className={getButtonClass('streetArt')} id="streetArtSlider" onClick={() => handleOptionClick('streetArt')}>
                    <span className="relative text-sm leading-[115%] font-dm-sans">Street Art</span>
                </button>
            </div>
            <section
                className="absolute top-[402px] left-[0px] w-[1437px] flex flex-col items-center justify-start gap-[56px] text-left text-11xl text-black font-helvetica-neue"
                id="location blocks"
            >
                {selectedOption === 'museum' && (
                    <div
                        className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] lg:flex-row lg:gap-[35px] lg:items-center lg:justify-center md:flex-row md:gap-[3px] md:items-center md:justify-center sm:flex-col sm:gap-[1px] sm:items-center sm:justify-center"
                        id="location subblock"
                    >
                        <ArtCard
                            title="Portland Museum of Art"
                            imageUrl="/process-016@2x.png"
                            description={"Portland's lively downtown corner for everything artsy"}
                        />

                        <ArtCard
                            title="Portland Museum of Art"
                            imageUrl="/process-016@2x.png"
                            description={"Portland's lively downtown corner for everything artsy"}
                        />
                        <ArtCard
                            title="Portland Museum of Art"
                            imageUrl="/process-016@2x.png"
                            description={"Portland's lively downtown corner for everything artsy"}
                        />
                    </div>
                )}
                {selectedOption === 'galleries' && (
                    <div
                        className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] lg:flex-row lg:gap-[35px] lg:items-center lg:justify-center md:flex-row md:gap-[3px] md:items-center md:justify-center sm:flex-col sm:gap-[1px] sm:items-center sm:justify-center"
                        id="location subblock"
                    >
                        <ArtCard
                            title="Portland Museum of Art"
                            imageUrl="/process-016@2x.png"
                            description={"Portland's lively downtown corner for everything artsy"}
                        />

                        <ArtCard
                            title={""}
                            imageUrl={""}
                            description={""}
                        />
                        <ArtCard
                            title={""}
                            imageUrl={""}
                            description={""}
                        />
                    </div>
                )}
                {selectedOption === 'activities' && (
                    <div
                        className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] lg:flex-row lg:gap-[35px] lg:items-center lg:justify-center md:flex-row md:gap-[3px] md:items-center md:justify-center sm:flex-col sm:gap-[1px] sm:items-center sm:justify-center"
                        id="location subblock"
                    >
                        <ArtCard
                            title="Portland Museum of Art"
                            imageUrl="/process-016@2x.png"
                            description={"Portland's lively downtown corner for everything artsy"}
                        />

                        <ArtCard
                            title={""}
                            imageUrl={""}
                            description={""}
                        />
                        <ArtCard
                            title={""}
                            imageUrl={""}
                            description={""}
                        />
                    </div>
                )}
                {selectedOption === 'streetArt' && (
                    <div
                        className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] lg:flex-row lg:gap-[35px] lg:items-center lg:justify-center md:flex-row md:gap-[3px] md:items-center md:justify-center sm:flex-col sm:gap-[1px] sm:items-center sm:justify-center"
                        id="location subblock"
                    >
                        <ArtCard
                            title="Portland Museum of Art"
                            imageUrl="/process-016@2x.png"
                            description={"Portland's lively downtown corner for everything artsy"}
                        />

                        <ArtCard
                            title={""}
                            imageUrl={""}
                            description={""}
                        />
                        <ArtCard
                            title={""}
                            imageUrl={""}
                            description={""}
                        />
                    </div>
                )}
            </section>
            <div className="absolute top-[189px] left-[467px] w-[493px] h-[77px]">
                <input
                    className="font-medium font-helvetica-neue text-base bg-[transparent] absolute w-full top-[0px] right-[0px] left-[0px] rounded-10xs box-border h-14 flex flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500 lg:flex-row lg:gap-[20px] lg:items-center lg:justify-start md:flex-col md:gap-[16px] md:items-center md:justify-start sm:flex-col sm:gap-[12px] sm:items-center sm:justify-start"
                    name="searchBar"
                    id="1"
                    placeholder="search"
                    type="text"
                />
            </div>
        </div>
    );
};

export default InspireMe;
