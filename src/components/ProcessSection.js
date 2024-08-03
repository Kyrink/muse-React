// ProcessSection.js
import React from 'react';

const ProcessSection = () => {
    return (
        <main className="self-stretch overflow-hidden flex flex-col items-start justify-end pr-[3px] text-left text-[63px] text-white font-helvetica-neue"
        >
            <div
                className="self-stretch bg-darkslategray flex flex-col items-start justify-end pt-[161px] px-[60px] pb-36 gap-[68px]"
                id="process Main"
            >
                <div className="self-stretch flex flex-row items-start justify-start gap-[56px] lg:flex-row lg:gap-[45px] lg:items-start lg:justify-start md:flex-col md:gap-[35px] md:items-start md:justify-start sm:flex-col sm:gap-[16px] sm:items-start sm:justify-start">
                    <h1
                        className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[640px] shrink-0"
                        id="howItWorksHeader"
                    >
                        Effortless exploration, seamless sharing
                    </h1>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] text-5xl md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                        <span className="self-stretch relative leading-[150%]">
                            Use our platform to explore, discover, and contribute to
                            Portland's vibrant art scenes with fellow art enthusiasts
                            and creators.
                        </span>
                        <button
                            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg [text-decoration:underline] font-bold font-helvetica-neue text-white text-left inline-block"
                            id="see reviews"
                        >
                            What does the community say?
                        </button>
                    </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[18px] text-29xl">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[40px] lg:flex-row lg:gap-[35px] lg:items-center lg:justify-start md:flex-col md:gap-[25px] md:items-center md:justify-start sm:flex-col sm:gap-[20px] sm:items-center sm:justify-start">
                        <div className="flex-1 h-[284px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-[13px] box-border bg-[url('/public/frame@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                            <b className="relative leading-[100%]">01</b>
                        </div>
                        <div className="flex-1 h-[284px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border bg-[url('/public/frame1@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                            <b className="relative leading-[100%]">02</b>
                        </div>
                        <div className="flex-1 h-[284px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border bg-[url('/public/image5@2x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                            <b className="relative leading-[100%]">03</b>
                        </div>

                    </div>
                    <div className="self-stretch overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[50px] text-lg lg:flex-row lg:gap-[120px] lg:items-start lg:justify-start md:flex-col md:gap-[100px] md:items-start md:justify-start">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] md:flex-[unset] md:self-stretch">
                            <b className="self-stretch relative leading-[150%]">
                                Explore
                            </b>
                            <span className="self-stretch relative text-sm leading-[150%]">
                                Navigate with Muse's Exploration Guide to receive a
                                curated journey tailored to your art interests,
                                showcasing Portland's unique art installations and
                                scenes.
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] md:flex-[unset] md:self-stretch">
                            <b className="self-stretch relative leading-[150%]">
                                Discover
                            </b>
                            <span className="self-stretch relative text-sm leading-[150%]">
                                Utilize our curated art mapping and access insider tips
                                from Portland's art community to uncover hidden
                                masterpieces. We’ll guide you to the must-see spots and
                                prepare your art journey for unforgettable experiences.
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] md:flex-[unset] md:self-stretch">
                            <b className="self-stretch relative leading-[150%]">
                                Contribute
                            </b>
                            <span className="self-stretch relative text-sm leading-[150%]">
                                We've cultivated a community of passionate art explorers
                                like you. When you find a new art spot, share it with
                                us. Every contribution enriches our map, ensuring others
                                can experience Portland's evolving art landscape.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProcessSection;
