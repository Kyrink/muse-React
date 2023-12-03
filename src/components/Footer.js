// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer
            className="self-stretch bg-darkslategray flex flex-row items-start justify-start py-[101px] px-[50px] gap-[30px] text-left text-[60px] text-white font-helvetica-neue lg:flex-row lg:gap-[25px] lg:items-start lg:justify-start md:flex-col md:gap-[10px] md:items-start md:justify-start sm:flex-col sm:gap-[2px] sm:items-start sm:justify-start"
            id="contactMeFooter"
        >
            <div className="w-[528px] h-[316px] flex flex-col items-start justify-start gap-[50px]">
                <h1
                    className="m-0 self-stretch relative text-inherit leading-[100%] font-medium font-inherit"
                    id="contactQuote"
                >
                    You’re welcome to reach out with questions
                </h1>
                <button
                    className="cursor-pointer [border:none] py-3 px-8 bg-white rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                    id="cantactButton"
                >
                    <span className="relative text-lg font-helvetica-neue text-darkslategray text-left">
                        Schedule a call
                    </span>
                </button>
            </div>
            <div className="flex-1 h-[264px] overflow-hidden flex flex-col items-center justify-center text-[96px] text-gray-400 md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                <a
                    className="[text-decoration:none] self-stretch relative leading-[100%] font-thin text-[inherit]"
                    href="mailto:hello@muse.com"
                >
                    hello@muse.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
