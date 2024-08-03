import React from 'react';

const StarRating = () => {
    return (
        <div className="flex flex-row items-start justify-start" id="review_stars">
            {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="relative w-6 h-6 overflow-hidden shrink-0" id="star">
                    <img
                        className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                        alt={`Star ${index}`}
                        src="/vector2.svg"
                    />
                </div>
            ))}
        </div>
    );
};

const TestimonialText = () => {
    return (
        <div className="absolute top-[100px] left-0 flex flex-col items-start justify-start gap-[12px]">
            <StarRating />
            <p className="m-0 self-stretch relative leading-[150%] font-light">
                The Portland Museum of Art introduced me to mesmerizing exhibits, offering a cultural escape right in the heart of the city, especially during the trying times of the pandemic.
            </p>
            <span className="self-stretch relative text-base leading-[150%] font-light">
                — Linda R.
            </span>
        </div>
    );
};

const NavigationArrows = () => {
    return (
        <div className="flex flex-row items-start justify-start gap-[16px]" id="arrows2">
            {/* Left Arrow */}
            <button className="cursor-pointer p-0 bg-transparent relative w-10 h-10 overflow-hidden shrink-0" id="left_arrow">
                <img
                    className="absolute h-[56.25%] w-[87.5%] top-[21.75%] right-[6.25%] bottom-[22%] left-[6.25%] max-w-full overflow-hidden max-h-full"
                    alt="Previous"
                    src="/vector4.svg"
                />
            </button>
            {/* Right Arrow */}
            <button className="cursor-pointer p-0 bg-transparent relative w-10 h-10 overflow-hidden shrink-0 transform rotate-180" id="right_arrow">
                <img
                    className="absolute h-[56.25%] w-[87.5%] top-[-78.25%] right-[106.25%] bottom-[122%] left-[-93.75%] max-w-full overflow-hidden max-h-full"
                    alt="Next"
                    src="/vector5.svg"
                />
            </button>
        </div>
    );
};

const TestimonialSection = () => {
    return (
        <main className="relative w-full h-[705px]" id="testimonial">
            {/* Background and Image */}
            <section className="absolute w-full overflow-hidden">
                <div className="relative bg-whitesmoke-100 h-[740px]" />
                <img
                    className="absolute top-0 left-[60px] w-[527px] h-[593px] object-cover"
                    id="reviewImg"
                    alt="Museum"
                    src="/image1@2x.png"
                />
            </section>
            {/* Testimonial Write-up */}
            <section
                className="absolute top-[41px] left-[701px] w-[780px] h-[500px] overflow-hidden text-left text-17xl text-black font-helvetica-neue"
                id="testimonial-writeup"
            >
                <TestimonialText />
                {/* Navigation Arrows and Inspire Me Button */}

            </section>
            <section className="absolute top-[630px] left-[701px] w-[780px] h-[500px] overflow-hidden text-left text-17xl text-black font-helvetica-neue"
                id="Buttons">
                <div className="w-30 overflow-hidden flex flex-col items-start justify-start">
                    <button
                        className="cursor-pointer py-3 px-10 bg-transparent rounded-10xs box-border h-14 flex flex-row items-center justify-center border border-solid border-black"
                        id="start_exploration"
                    >
                        <span className="relative text-lg font-helvetica-neue text-black text-center">
                            Inspire Me
                        </span>
                    </button>
                </div>
                <div className="w-24 h-[593px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-100px]" id="arrow buttons">
                    <NavigationArrows />
                </div>
            </section>
        </main>
    );
};

export default TestimonialSection;

