import { useCallback } from "react";
import NavBar from "../components/NavBar";
import InspireMe from "../components/InspireMe";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import ProcessSection from "../components/ProcessSection";

const LandingPage = () => {

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='button']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full h-[4991px] overflow-hidden">
      <main
        className="relative z-10 top-0 left-0 w-[1440px] h-[764px] overflow-hidden flex flex-row items-start justify-start text-left text-[79px] text-black font-helvetica-neue"
        id="first_page"
      >
        <div className="relative w-[1440px] h-[754px] overflow-hidden shrink-0">
          <NavBar />
          <div className="absolute top-[235px] left-[60px] w-[753px] h-[512px] overflow-hidden flex flex-col items-center justify-end">
            <div className="w-[753px] flex flex-col items-start justify-start gap-[56px]">
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
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 ml-[-63px]"
            id="addLocation"
          >
            <div className="absolute top-[714px] left-[0px] rounded-81xl bg-darkslategray w-[50px] h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden">
                <img
                  className="absolute h-[58.33%] w-[58.33%] top-[20.83%] right-[20.83%] bottom-[20.83%] left-[20.83%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector7.svg"
                />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector3.svg"
                />
              </button>
            </div>
          </button>
        </div>
      </main>
      <main
        className="absolute top-[818px] left-[-4px] w-[1448px] overflow-hidden flex flex-col items-start justify-center"
        id="landingSubPage"
      >
        <section
          className="self-stretch relative h-[4173px] overflow-hidden shrink-0"
          id="ladingSubPage"
        >
          <main className="absolute top-[0] left-[0px] w-[1441px] h-[764] overflow-hidden flex flex-col items-center justify-start">
            <ProcessSection />
            <Testimonial />
            <InspireMe />
            <Footer />
          </main>
        </section>
      </main>
    </div>
  );
};



export default LandingPage;
