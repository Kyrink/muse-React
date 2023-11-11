import { useCallback } from "react";
import NavBar from "../components/NavBar";

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
        className="absolute top-[818px] left-[-4px] w-[1448px] overflow-hidden flex flex-col items-start justify-center"
        id="landingSubPage"
      >
        <section
          className="self-stretch relative h-[4173px] overflow-hidden shrink-0"
          id="ladingSubPage"
        >
          <main className="absolute top-[860px] left-[0px] w-[1441px] overflow-hidden flex flex-col items-center justify-start">
            <main className="relative w-[1441px] h-[891px]" id="testimonial">
              <section className="absolute top-[41px] left-[1px] w-[1440px] h-[787px] overflow-hidden">
                <section className="absolute top-[0px] left-[0px] w-[1440px] h-[787px] overflow-hidden flex flex-col items-center justify-end">
                  <div className="relative bg-whitesmoke-100 w-[1440px] h-[705px]" />
                </section>
                <img
                  className="absolute top-[0px] left-[60px] w-[527px] h-[593px] object-cover"
                  id="reviewImg"
                  alt=""
                  src="/image1@2x.png"
                />
              </section>
              <section
                className="absolute top-[41px] left-[601px] w-[780px] h-[720px] overflow-hidden text-left text-17xl text-black font-helvetica-neue"
                id="testimonial-writeup"
              >
                <div
                  className="absolute top-[0px] left-[140px] w-[640px] h-[535px] overflow-hidden"
                  id="writing"
                >
                  <div className="absolute top-[193px] left-[0px] w-[640px] flex flex-col items-start justify-start gap-[12px]">
                    <div
                      className="flex flex-row items-start justify-start"
                      id="review_stars"
                    >
                      <div
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        id="star"
                      >
                        <img
                          className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                      <div
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        id="star"
                      >
                        <img
                          className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                      <div
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        id="star"
                      >
                        <img
                          className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                      <div
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        id="star"
                      >
                        <img
                          className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector2.svg"
                        />
                        <img
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/star-rate.svg"
                      />
                    </div>
                    <p className="m-0 self-stretch relative leading-[150%] font-light">
                      The Portland Museum of Art introduced me to mesmerizing
                      exhibits, offering a cultural escape right in the heart of
                      the city, especially during the trying times of the
                      pandemic.
                    </p>
                    <span className="self-stretch relative text-base leading-[150%] font-light">
                      — Linda R.
                    </span>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-60 h-[720px] overflow-hidden flex flex-row items-start justify-end">
                  <span className="w-100 h-[720px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                    <button
                      className="cursor-pointer py-3 px-10 bg-[transparent] rounded-10xs box-border h-14 flex flex-row items-center justify-center border-[1px] border-solid border-black"
                      id="start_exploration"
                    >
                      <span className="relative text-lg font-helvetica-neue text-black text-center">
                        Start your Exploration
                      </span>
                    </button>
                  </span>
                  <div
                    className="w-24 h-[593px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-100px]"
                    id="arrow buttons"
                  >
                    <div
                      className="flex flex-row items-start justify-start gap-[16px]"
                      id="arrows2"
                    >
                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-10 h-10 overflow-hidden shrink-0"
                        id="left_arrow"
                      >
                        <img
                          className="absolute h-[56.25%] w-[87.5%] top-[21.75%] right-[6.25%] bottom-[22%] left-[6.25%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector4.svg"
                        />
                      </button>
                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-10 h-10 overflow-hidden shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0]"
                        id="right_arrow"
                      >
                        <img
                          className="absolute h-[56.25%] w-[87.5%] top-[-78.25%] right-[106.25%] bottom-[122%] left-[-93.75%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector5.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <main
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
                  disabled={true}
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
                  <div
                    className="flex-1 h-[676px] flex flex-row items-start justify-end lg:flex-row lg:gap-[3px] lg:items-start lg:justify-end md:flex-row md:gap-[13px] md:items-start md:justify-end sm:flex-row sm:gap-[5px] sm:items-start sm:justify-end sm:flex-[unset] sm:self-stretch"
                    id="block1"
                  >
                    <div
                      className="bg-whitesmoke-200 w-[413px] h-[676px] flex flex-col items-start justify-start"
                      id="block1"
                    >
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        id="galleryImg"
                        alt=""
                        src="/galleryIMG@2x.png"
                      />
                      <div
                        className="self-stretch flex flex-col items-start justify-start p-8 gap-[24px]"
                        id="block detail"
                      >
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                          <h1
                            className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit"
                            id="title"
                          >
                            Portland Museum of Art
                          </h1>
                          <div
                            className="flex flex-row items-start justify-start"
                            id="star_reviews"
                          >
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <div
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              id="star"
                            >
                              <img
                                className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector3.svg"
                              />
                            </div>
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                          </div>
                          <span className="self-stretch relative text-lg leading-[150%] font-light">
                            {" "}
                            Downtown Portland's epicenter of historic and
                            contemporary Maine artistry.
                          </span>
                        </div>
                        <button
                          className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                          id="learnMore"
                        >
                          <span className="relative text-lg font-helvetica-neue text-white text-left">
                            Learn more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      className="w-[30px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-45px]"
                      id="like btn"
                    >
                      <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-[5px] px-1.5">
                        <button
                          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          id="like button"
                        >
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector3.svg"
                          />
                          <img
                            className="absolute h-[76.67%] w-[83.33%] top-[12.78%] right-[8.33%] bottom-[10.56%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex-1 h-[676px] flex flex-row items-start justify-end lg:flex-row lg:gap-[4px] lg:items-start lg:justify-end md:flex-col md:gap-[0px] md:items-start md:justify-end sm:flex-col sm:gap-[-16px] sm:items-start sm:justify-end sm:flex-[unset] sm:self-stretch"
                    id="Block2"
                  >
                    <div className="bg-whitesmoke-200 w-[413px] h-[676px] flex flex-col items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/process-01@2x.png"
                      />
                      <div
                        className="self-stretch flex flex-col items-start justify-start p-8 gap-[24px]"
                        id="block details"
                      >
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-normal font-inherit">
                            Maine College of Art
                          </h1>
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                          </div>
                          <span className="self-stretch relative text-lg leading-[150%]">
                            Portland's nexus of innovative art education and
                            creative expression.
                          </span>
                        </div>
                        <button
                          className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                          id="learnMore"
                        >
                          <span className="relative text-lg font-helvetica-neue text-white text-left">
                            Learn more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-[30px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-46px]">
                      <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-[5px] px-1.5">
                        <button
                          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          id="like"
                        >
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector3.svg"
                          />
                          <img
                            className="absolute h-[76.67%] w-[83.33%] top-[12.78%] right-[8.33%] bottom-[10.56%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[676px] flex flex-row items-start justify-end lg:flex-row lg:gap-[0px] lg:items-start lg:justify-end sm:flex-[unset] sm:self-stretch">
                    <div className="bg-whitesmoke-200 w-[413px] h-[676px] flex flex-col items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/process-011@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start p-8 gap-[24px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit">
                            Fore Street Gallery
                          </h1>
                          <div
                            className="flex flex-row items-start justify-start"
                            id="stars"
                          >
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                          </div>
                          <span className="self-stretch relative text-lg leading-[150%] font-light">
                            An intimate showcase of contemporary brilliance and
                            local talent.
                          </span>
                        </div>
                        <button
                          className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                          id="learnMore"
                        >
                          <span className="relative text-lg font-helvetica-neue text-white text-left">
                            Learn more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-[30px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-47px]">
                      <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-[5px] px-1.5">
                        <button
                          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          id="like"
                        >
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector3.svg"
                          />
                          <img
                            className="absolute h-[76.67%] w-[83.33%] top-[12.78%] right-[8.33%] bottom-[10.56%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="self-stretch flex flex-row items-center justify-center py-0 px-[50px] gap-[45px] text-left text-11xl text-black font-helvetica-neue">
                  <div className="flex-1 h-[676px] flex flex-row items-start justify-end">
                    <div className="bg-whitesmoke-200 w-[413px] h-[676px] flex flex-col items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/galleryIMG@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start p-8 gap-[24px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit">
                            Bomb Diggity Art
                          </h1>
                          <div
                            className="flex flex-row items-start justify-start"
                            id="star"
                          >
                            <div
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              id="star"
                            >
                              <img
                                className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector3.svg"
                              />
                            </div>
                            <div
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              id="star"
                            >
                              <img
                                className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector3.svg"
                              />
                            </div>
                            <div
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              id="star"
                            >
                              <img
                                className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector3.svg"
                              />
                            </div>
                            <div
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              id="star"
                            >
                              <img
                                className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector3.svg"
                              />
                            </div>
                            <div
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              id="star"
                            >
                              <img
                                className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector2.svg"
                              />
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/vector3.svg"
                              />
                            </div>
                          </div>
                          <span className="self-stretch relative text-lg leading-[150%] font-light">
                            {" "}
                            Vibrant fusion of eclectic artistry and community
                            spirit.
                          </span>
                        </div>
                        <button
                          className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                          id="learnMore"
                        >
                          <span className="relative text-lg font-helvetica-neue text-white text-left">
                            Learn more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-[30px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-62px]">
                      <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-[5px] px-1.5">
                        <button
                          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          id="like"
                        >
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector3.svg"
                          />
                          <img
                            className="absolute h-[76.67%] w-[83.33%] top-[12.78%] right-[8.33%] bottom-[10.56%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[676px] flex flex-row items-start justify-end">
                    <div className="bg-whitesmoke-200 w-[413px] h-[676px] flex flex-col items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/process-012@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start p-8 gap-[24px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                          <h1
                            className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit"
                            id="galleryHeader"
                          >
                            Blue
                          </h1>
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                          </div>
                          <span className="self-stretch relative text-lg leading-[150%] font-light">
                            Portland's cozy enclave of live music, artistry, and
                            local flair.
                          </span>
                        </div>
                        <button
                          className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                          id="learnMore"
                        >
                          <span className="relative text-lg font-helvetica-neue text-white text-left">
                            Learn more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-[30px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-62px]">
                      <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-[5px] px-1.5">
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] overflow-hidden shrink-0">
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector3.svg"
                          />
                          <img
                            className="absolute h-[76.67%] w-[83.33%] top-[12.78%] right-[8.33%] bottom-[10.56%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[676px] flex flex-row items-start justify-end">
                    <div className="bg-whitesmoke-200 w-[413px] h-[676px] flex flex-col items-start justify-start">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/process-013@2x.png"
                      />
                      <div className="self-stretch flex flex-col items-start justify-start p-8 gap-[24px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                          <h1
                            className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit"
                            id="gallleryHeader"
                          >
                            Muse Paintbar
                          </h1>
                          <div className="flex flex-row items-start justify-start">
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                            <img
                              className="relative w-6 h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/star-rate.svg"
                            />
                          </div>
                          <span className="self-stretch relative text-lg leading-[150%] font-light">
                            A creative haven in Portland, blending artistry with
                            fun-filled paint sessions.
                          </span>
                        </div>
                        <button
                          className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray rounded-10xs h-14 flex flex-row items-center justify-center box-border"
                          id="learnMore"
                        >
                          <span className="relative text-lg font-helvetica-neue text-white text-left">
                            Learn more
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-[30px] h-[47px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-62px]">
                      <div className="rounded-81xl bg-white flex flex-row items-start justify-start py-[5px] px-1.5">
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[18px] h-[18px] overflow-hidden shrink-0">
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector3.svg"
                          />
                          <img
                            className="absolute h-[76.67%] w-[83.33%] top-[12.78%] right-[8.33%] bottom-[10.56%] left-[8.33%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
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
            </main>
          </main>
          <main className="absolute top-[0px] left-[0px] w-[1444px] overflow-hidden flex flex-col items-center justify-center">
            <main className="self-stretch overflow-hidden flex flex-col items-start justify-end py-0 pr-[3px] pl-0 gap-[2703px] text-left text-[63px] text-white font-helvetica-neue">
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
                      How does it work?
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
                    <div className="flex-1 h-[284px] overflow-hidden flex flex-col items-start justify-start py-2.5 px-5 box-border bg-[url('/public/frame2@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                      <b className="relative leading-[100%]">03</b>
                    </div>
                  </div>
                  <div className="self-stretch h-36 overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[50px] text-lg lg:flex-row lg:gap-[120px] lg:items-start lg:justify-start md:flex-col md:gap-[100px] md:items-start md:justify-start">
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
            </main>
          </main>
        </section>
      </main>
      <main
        className="absolute top-[0px] left-[0px] w-[1440px] h-[764px] overflow-hidden flex flex-row items-start justify-start text-left text-[79px] text-black font-helvetica-neue"
        id="first_page"
      >
        <div className="relative w-[1440px] h-[754px] overflow-hidden shrink-0">
          <NavBar />
          <div className="absolute top-[0px] left-[60px] w-[753px] h-[754px] overflow-hidden flex flex-col items-center justify-end">
            <div className="w-[753px] flex flex-col items-start justify-start gap-[56px]">
              <h1
                className="m-0 self-stretch relative text-inherit leading-[115%] font-medium font-inherit"
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
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[764px] overflow-hidden shrink-0 ml-[-63px]"
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
    </div>
  );
};

export default LandingPage;
