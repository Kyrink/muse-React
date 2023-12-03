
import React from 'react';
import ArtCard from './ArtCard';

const InspireMe = () => {
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
            <div
                className="absolute top-[292px] left-[calc(50%_-_243px)] w-[483px] overflow-x-auto flex flex-row items-center justify-start gap-[40px]"
                id="btn_filters"
            >
                <button
                    className="cursor-pointer [border:none] py-2 px-4 bg-darkslategray rounded-81xl flex flex-row items-center justify-center"
                    id="museumToggle"
                >
                    <span className="relative text-sm leading-[115%] font-dm-sans text-white text-left">
                        Museum
                    </span>
                </button>
                <button
                    className="[border:none] py-2 px-4 bg-gainsboro-200 rounded-81xl flex flex-row items-center justify-center"
                    disabled={false}
                    id="gallerySlider"
                >
                    <span
                        className="relative text-sm leading-[115%] font-dm-sans text-gray-300 text-left"
                        id="galleries"
                    >
                        Galleries
                    </span>
                </button>
                <button
                    className="[border:none] py-2 px-4 bg-gainsboro-200 rounded-81xl flex flex-row items-center justify-center"
                    disabled={true}
                    id="activitiesSlider"
                >
                    <span
                        className="relative text-sm leading-[115%] font-dm-sans text-gray-300 text-left"
                        id="activities"
                    >
                        Activities
                    </span>
                </button>
                <button
                    className="[border:none] py-2 px-4 bg-gainsboro-200 rounded-81xl flex flex-row items-center justify-center"
                    disabled={true}
                    id="streetArtSlider"
                >
                    <span
                        className="relative text-sm leading-[115%] font-dm-sans text-gray-300 text-left"
                        id="street art"
                    >
                        Street Art
                    </span>
                </button>
            </div>
            <section
                className="absolute top-[402px] left-[0px] w-[1437px] flex flex-col items-center justify-start gap-[56px] text-left text-11xl text-black font-helvetica-neue"
                id="location blocks"
            >
                <div
                    className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] lg:flex-row lg:gap-[35px] lg:items-center lg:justify-center md:flex-row md:gap-[3px] md:items-center md:justify-center sm:flex-col sm:gap-[1px] sm:items-center sm:justify-center"
                    id="location subblock"
                >
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                </div>
                <section className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] text-left text-11xl text-black font-helvetica-neue">
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                </section>
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
