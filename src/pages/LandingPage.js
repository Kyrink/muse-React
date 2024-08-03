import { useCallback } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from "../components/NavBar";
import InspireMe from "../components/InspireMe";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import ProcessSection from "../components/ProcessSection";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToHowItWorks) {
      const processSectionElement = document.getElementById("process-section");
      if (processSectionElement) {
        processSectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    if (location.state?.scrollToInspireMe) {
      const inspireMeSectionElement = document.getElementById("inspire-me-section");
      if (inspireMeSectionElement) {
        inspireMeSectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const onButtonClick = useCallback(() => {
    const processSectionElement = document.getElementById("process-section");
    if (processSectionElement) {
      processSectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="Absolute bg-white w-full h-[4991px] overflow-hidden">
                <NavBar />

      <main
        className="Absolute colums-2 z-10 top-0 left-0 w-full overflow-hidden flex flex-row items-start justify-start text-left text-[79px] text-black font-helvetica-neue"
        id="first_page"
      >
        <div className="relative w-full h-[754px] overflow-hidden shrink-0">
          <div className="absolute pt-16 pl-24  overflow-hidden flex flex-col items-center justify-end">
            <div className="w-[550px] flex flex-col items-start justify-start gap-[56px]">
              <h1
                className="m-0 self-stretch relative text-inherit leading-[115%] font-weight:500 font-inherit"
                id="slogan"
              >
                Be Inspired. Be Amused. Be in Portland
              </h1>
              <span className="relative text-5xl leading-[150%] font-light inline-block w-[413px]">
                Explore, Discover, Contribute — Portland's art scenes unified.
              </span>
              <button
                className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                id="howItWorks"
                data-scroll-to="button"
                onClick={onButtonClick}
              >
                <span className="relative text-lg font-helvetica-neue text-white text-left">
                  How it Works
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[637px] h-[764px] overflow-hidden shrink-0 flex flex-row items-start justify-end ml-[-697px]">
          <div className="w-[637px] h-[701px] overflow-hidden shrink-0 flex flex-row items-start justify-end">
            <img
              className="relative w-[473px] h-[546px] object-cover"
              id="landingPageImageBig"
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className="w-[385px] h-[701px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-221px]">
              <img
                className="relative w-[385px] h-[331px] object-cover"
                id="landingPageImage2"
                alt=""
                src="/i72dfjrft3k@2x.png"
              />
            </div>
          </div>
        </div>
      </main>
      <main
        className="absolute  w-full overflow-hidden flex flex-col items-start justify-center"
        id="landingSubPage"
      >
        <section
          className="self-stretch relative h-[4173px] overflow-hidden shrink-0"
          id="ladingSubPage"
        >
          <main className="absolute overflow-hidden flex flex-col items-center justify-start">
            <div id="process-section">
              <ProcessSection />
            </div>
            <Testimonial />
            <div id="inspire-me-section">
              <InspireMe />
            </div>
            <Footer />
          </main>
        </section>
      </main>
    </div>
  );
};



export default LandingPage;
