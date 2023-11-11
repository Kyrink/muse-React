import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import GalleryViewInfo from "../components/GalleryViewInfo";
import ReviewWriteUp from "../components/ReviewWriteUp";
import CardForm from "../components/CardForm";
import ArtCard from "../components/ArtCard";

const LocationView = () => {
  const navigate = useNavigate();

  const onReviewBtnClick = useCallback(() => {
    navigate("/write-review");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-100 w-full overflow-hidden flex flex-col items-center justify-start">
      <header
        className="self-stretch box-border h-[90px] flex flex-row items-center justify-between py-0 px-[60px] text-left text-17xl text-black font-helvetica-neue border-[1px] border-solid border-darkslategray"
        id="nav bar"
      >
        <div
          className="flex flex-row items-center justify-center gap-[56px]"
          id="left_navBar"
        >
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[100%] font-bold text-[inherit] flex items-end w-24 h-7 shrink-0"
            id="logo"
            to="/"
          >
            muse
          </Link>
          <nav
            className="m-0 flex flex-row items-center justify-center gap-[32px] text-left text-base text-gray-500 font-helvetica-neue"
            id="nav options"
          >
            <span className="relative" id="ui_howItWorks">
              How it works
            </span>
            <span className="relative" id="ui_inspireMe">
              Inspire Me
            </span>
            <span className="relative" id="ui_search">
              Search
            </span>
            <span className="relative" id="ui_viewMap">
              View Map
            </span>
          </nav>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-11 h-12 flex flex-row items-center justify-center"
          id="user-profile-btn"
        >
          <img
            className="relative rounded-[50%] w-[62px] h-[62px] object-cover"
            id="profile-img"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </button>
      </header>
      <section
        className="self-stretch relative h-[904px] overflow-hidden shrink-0"
        id="art-spot-main"
      >
        <div
          className="absolute top-[168px] left-[761px] w-[628px] h-[609px] overflow-hidden flex flex-col items-center justify-end"
          id="location_overview"
        >
          <GalleryViewInfo />
        </div>
        <section
          className="absolute top-[-528px] left-[60px] w-[640px] overflow-hidden flex flex-row items-start justify-start gap-[40px]"
          id="gallery_slider"
        >
          <div
            className="flex-1 flex flex-col items-start justify-start gap-[48px]"
            id="left_galleryImg"
          >
            <img
              className="relative w-[300px] h-52 object-cover"
              alt=""
              src="/image2@2x.png"
            />
            <img
              className="relative w-[300px] h-[483px] object-cover"
              alt=""
              src="/image3@2x.png"
            />
            <img
              className="relative w-[300px] h-[203px] object-cover"
              id="Location-view-img2"
              alt=""
              src="/image4@2x.png"
            />
            <img
              className="relative w-[300px] h-[444px] object-cover"
              id="Location-view-img4"
              alt=""
              src="/image5@2x.png"
            />
            <img
              className="relative w-[300px] h-[414px] object-cover"
              id="Location-view-img6"
              alt=""
              src="/image6@2x.png"
            />
          </div>
          <div
            className="flex-1 flex flex-col items-start justify-start gap-[48px]"
            id="right_galleryImg"
          >
            <img
              className="relative w-[300px] h-[434px] object-cover"
              id="gallery-img"
              alt=""
              src="/image7@2x.png"
            />
            <img
              className="relative w-[300px] h-[214px] object-cover"
              id="Location-view-img"
              alt=""
              src="/image8@2x.png"
            />
            <img
              className="relative w-[300px] h-[385px] object-cover"
              id="Location-view-img3"
              alt=""
              src="/image9@2x.png"
            />
            <img
              className="relative w-[300px] h-[255px] object-cover"
              id="Location-view-img5"
              alt=""
              src="/image10@2x.png"
            />
            <img
              className="relative w-[300px] h-[429px] object-cover"
              id="Location-view-img7"
              alt=""
              src="/image11@2x.png"
            />
            <img
              className="relative w-[300px] h-52 object-cover"
              id="Location-view-img8"
              alt=""
              src="/image12@2x.png"
            />
          </div>
        </section>
      </section>
      <section
        className="self-stretch relative h-[1080px] overflow-hidden shrink-0 text-left text-23xl text-black font-helvetica-neue"
        id="review-section"
      >
        <section
          className="absolute top-[52px] left-[633px] w-[728px] flex flex-col items-start justify-center gap-[20px] text-left text-11xl text-black font-helvetica-neue"
          id="review_section"
        >
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[31px]"
            id="review-span"
          >
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[30px]"
              id="review_writeup"
            >
              <div
                className="w-[716px] flex flex-row items-start justify-between"
                id="reviewer_header"
              >
                <div
                  className="flex flex-col items-start justify-start gap-[18px]"
                  id="reviewer_details"
                >
                  <div
                    className="flex flex-row items-center justify-start gap-[20px]"
                    id="reviewer_stuff"
                  >
                    <img
                      className="relative rounded-[50%] w-[81px] h-[81px] object-cover"
                      id="reviewer_img"
                      alt=""
                      src="/ellipse-11@2x.png"
                    />
                    <div
                      className="flex flex-col items-start justify-start gap-[12px]"
                      id="datials_reviewer"
                    >
                      <h3
                        className="m-0 relative text-inherit font-medium font-inherit inline-block w-[150px] h-[25px] shrink-0"
                        id="user-name"
                      >
                        kyrin K.
                      </h3>
                      <span
                        className="relative text-xl inline-block w-[188px] h-7 shrink-0"
                        id="member_date"
                      >
                        member since 2023
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start gap-[7px]"
                    id="stars"
                  >
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star1.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star1.svg"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-row items-center justify-start gap-[14px]"
                  id="likeAndReport"
                >
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[35px] h-[35px] overflow-hidden shrink-0"
                    id="like-btn"
                  >
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <img
                      className="absolute h-[76.57%] w-[83.43%] top-[12.57%] right-[8.29%] bottom-[10.86%] left-[8.29%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector8.svg"
                    />
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[40.3px] h-[8.8px]"
                    id="report_reviewButton"
                  >
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector9.svg"
                    />
                  </button>
                </div>
              </div>
              <section
                className="w-[716px] flex flex-col items-start justify-start gap-[15px] text-left text-xl text-black font-helvetica-neue"
                id="review_writing"
              >
                <span
                  className="h-[187px] overflow-hidden shrink-0 flex flex-col items-start justify-start"
                  id="write_up"
                >
                  <p
                    className="m-0 relative inline-block w-[716px]"
                    id="review_explaination"
                  >
                    <span className="block">{`The Louvre, without dispute, has one of the most impressive collections in the world. I’ve been a few times, and no debate there. `}</span>
                    <span className="block">&nbsp;</span>
                    <span className="block">{`The collections of a range of European artists is indisputably astonishing, and the building itself is a work of art to be admired. `}</span>
                    <span className="block">&nbsp;</span>
                    <span className="block">
                      But in 2023, their ability to make it accessible to
                      navigate and learn could be so much better. First, any
                      “skip the line” tour is a risk riddled proposition. We
                      arrived 20 minutes early and entered 20 minutes late,
                      waiting in line with everyone else who was pre booked, and
                      of course, it remained crowded.
                    </span>
                  </p>
                </span>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start gap-[3px]"
                  id="extend_readMore"
                >
                  <span
                    className="relative text-xl [text-decoration:underline] font-medium font-helvetica-neue text-black text-left inline-block w-[104px] h-[25px] shrink-0"
                    id="rm"
                  >
                    Read More
                  </span>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/arrow@2x.png"
                  />
                </button>
              </section>
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[11px] text-base text-gray-100"
              id="date_disclaimer"
            >
              <span
                className="relative inline-block w-[252px] h-[19px] shrink-0"
                id="date_wtritten"
              >
                written November 6, 2023
              </span>
              <p
                className="m-0 relative text-[inherit] inline-block w-[728px]"
                id="disclaimer"
              >
                {`This review is the subjective opinion of a muse member and not of muse LLC. muse performs checks on reviews as part of our industry-leading trust & safety standards. Read our `}
                <a
                  className="text-[inherit]"
                  href="https://www.tripadvisor.com/TransparencyReport2023"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    transparency report
                  </span>
                </a>{" "}
                to learn more.
              </p>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-darkslategray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-base text-gray-100">
            <ReviewWriteUp />
            <div className="flex flex-col items-start justify-start gap-[11px]">
              <span className="relative inline-block w-[252px] h-[19px] shrink-0">
                written November 6, 2023
              </span>
              <p className="m-0 relative text-[inherit] inline-block w-[728px]">
                {`This review is the subjective opinion of a muse member and not of muse LLC. muse performs checks on reviews as part of our industry-leading trust & safety standards. Read our `}
                <a
                  className="text-[inherit]"
                  href="https://www.tripadvisor.com/TransparencyReport2023"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    transparency report
                  </span>
                </a>{" "}
                to learn more.
              </p>
            </div>
            <div className="relative box-border w-[728px] h-px border-t-[1px] border-solid border-darkslategray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-xl">
            <div className="w-[728px] flex flex-col items-start justify-start gap-[30px]">
              <div className="w-[716px] flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <CardForm
                    userAvatar="/ellipse-13@2x.png"
                    userName="Dereck S."
                  />
                  <div className="flex flex-row items-start justify-start gap-[7px]">
                    <div className="relative w-10 h-[38.5px]" id="star">
                      <img
                        className="absolute h-[103.9%] w-[96.25%] top-[0%] right-[-96.25%] bottom-[-3.9%] left-[100%] max-w-full overflow-hidden max-h-full opacity-[0]"
                        alt=""
                        src="/vector3.svg"
                      />
                      <img
                        className="absolute h-[85.19%] w-[85%] top-[8.31%] right-[6.5%] bottom-[6.49%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector10.svg"
                      />
                    </div>
                    <div className="relative w-10 h-[38.5px]" id="star">
                      <img
                        className="absolute h-[103.9%] w-[96.25%] top-[0%] right-[-96.25%] bottom-[-3.9%] left-[100%] max-w-full overflow-hidden max-h-full opacity-[0]"
                        alt=""
                        src="/vector3.svg"
                      />
                      <img
                        className="absolute h-[85.19%] w-[85%] top-[8.31%] right-[6.5%] bottom-[6.49%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector10.svg"
                      />
                    </div>
                    <div className="relative w-10 h-[38.5px]" id="star">
                      <img
                        className="absolute h-[103.9%] w-[96.25%] top-[0%] right-[-96.25%] bottom-[-3.9%] left-[100%] max-w-full overflow-hidden max-h-full opacity-[0]"
                        alt=""
                        src="/vector3.svg"
                      />
                      <img
                        className="absolute h-[85.19%] w-[85%] top-[8.31%] right-[6.5%] bottom-[6.49%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector10.svg"
                      />
                    </div>
                    <div className="relative w-10 h-[38.5px]" id="star">
                      <img
                        className="absolute h-[103.9%] w-[96.25%] top-[0%] right-[-96.25%] bottom-[-3.9%] left-[100%] max-w-full overflow-hidden max-h-full opacity-[0]"
                        alt=""
                        src="/vector3.svg"
                      />
                      <img
                        className="absolute h-[85.19%] w-[85%] top-[8.31%] right-[6.5%] bottom-[6.49%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                    <div className="relative w-10 h-[38.5px]" id="star">
                      <img
                        className="absolute h-[103.9%] w-[96.25%] top-[0%] right-[-96.25%] bottom-[-3.9%] left-[100%] max-w-full overflow-hidden max-h-full opacity-[0]"
                        alt=""
                        src="/vector3.svg"
                      />
                      <img
                        className="absolute h-[85.19%] w-[85%] top-[8.31%] right-[6.5%] bottom-[6.49%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[14px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[35px] h-[35px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <img
                      className="absolute h-[76.57%] w-[83.43%] top-[12.57%] right-[8.29%] bottom-[10.86%] left-[8.29%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector8.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[40.3px] h-[8.8px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector9.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[716px] flex flex-col items-start justify-start gap-[15px]">
                <span className="h-[187px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                  <p className="m-0 relative inline-block w-[716px]">
                    <span className="block">{`The Louvre, without dispute, has one of the most impressive collections in the world. I’ve been a few times, and no debate there. `}</span>
                    <span className="block">&nbsp;</span>
                    <span className="block">{`The collections of a range of European artists is indisputably astonishing, and the building itself is a work of art to be admired. `}</span>
                    <span className="block">&nbsp;</span>
                    <span className="block">
                      But in 2023, their ability to make it accessible to
                      navigate and learn could be so much better. First, any
                      “skip the line” tour is a risk riddled proposition. We
                      arrived 20 minutes early and entered 20 minutes late,
                      waiting in line with everyone else who was pre booked, and
                      of course, it remained crowded.
                    </span>
                  </p>
                </span>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start gap-[3px]">
                  <span className="relative text-xl [text-decoration:underline] font-medium font-helvetica-neue text-black text-left inline-block w-[104px] h-[25px] shrink-0">
                    Read More
                  </span>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/arrow1.svg"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[11px] text-base text-gray-100">
              <span className="relative inline-block w-[252px] h-[19px] shrink-0">
                written November 6, 2023
              </span>
              <p
                className="m-0 relative text-[inherit] inline-block w-[728px]"
                id="disclaimer"
              >
                {`This review is the subjective opinion of a muse member and not of muse LLC. muse performs checks on reviews as part of our industry-leading trust & safety standards. Read our `}
                <a
                  className="text-[inherit]"
                  href="https://www.tripadvisor.com/TransparencyReport2023"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    transparency report
                  </span>
                </a>{" "}
                to learn more.
              </p>
            </div>
            <div className="relative box-border w-[728px] h-px border-t-[1px] border-solid border-darkslategray" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
            <div className="w-[728px] flex flex-col items-start justify-start gap-[30px]">
              <div className="w-[716px] flex flex-row items-start justify-between">
                <div className="flex flex-col items-start justify-start gap-[18px]">
                  <div className="flex flex-row items-center justify-start gap-[20px]">
                    <img
                      className="relative rounded-[50%] w-[81px] h-[81px] object-cover"
                      alt=""
                      src="/ellipse-14@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <h3
                        className="m-0 relative text-inherit font-medium font-inherit inline-block w-[150px] h-[25px] shrink-0"
                        id="user-name"
                      >
                        kyrin K.
                      </h3>
                      <span className="relative text-xl inline-block w-[188px] h-7 shrink-0">
                        member since 2023
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-start justify-start gap-[7px]"
                    id="star"
                  >
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star1.svg"
                    />
                    <img
                      className="relative w-10 h-[38.5px]"
                      alt=""
                      src="/-icon-star1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[14px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[35px] h-[35px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector3.svg"
                    />
                    <img
                      className="absolute h-[76.57%] w-[83.43%] top-[12.57%] right-[8.29%] bottom-[10.86%] left-[8.29%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector8.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[40.3px] h-[8.8px]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector9.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[716px] flex flex-col items-start justify-start gap-[15px] text-xl">
                <span className="h-[187px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                  <p className="m-0 relative inline-block w-[716px]">
                    <span className="block">{`The Louvre, without dispute, has one of the most impressive collections in the world. I’ve been a few times, and no debate there. `}</span>
                    <span className="block">&nbsp;</span>
                    <span className="block">{`The collections of a range of European artists is indisputably astonishing, and the building itself is a work of art to be admired. `}</span>
                    <span className="block">&nbsp;</span>
                    <span className="block">
                      But in 2023, their ability to make it accessible to
                      navigate and learn could be so much better. First, any
                      “skip the line” tour is a risk riddled proposition. We
                      arrived 20 minutes early and entered 20 minutes late,
                      waiting in line with everyone else who was pre booked, and
                      of course, it remained crowded.
                    </span>
                  </p>
                </span>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start gap-[3px]">
                  <span className="relative text-xl [text-decoration:underline] font-medium font-helvetica-neue text-black text-left inline-block w-[104px] h-[25px] shrink-0">
                    Read More
                  </span>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/arrow1.svg"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[11px] text-base text-gray-100">
              <span className="relative inline-block w-[252px] h-[19px] shrink-0">
                written November 6, 2023
              </span>
              <p className="m-0 relative text-[inherit] inline-block w-[728px]">
                {`This review is the subjective opinion of a muse member and not of muse LLC. muse performs checks on reviews as part of our industry-leading trust & safety standards. Read our `}
                <a
                  className="text-[inherit]"
                  href="https://www.tripadvisor.com/TransparencyReport2023"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    transparency report
                  </span>
                </a>{" "}
                to learn more.
              </p>
            </div>
            <div className="relative box-border w-[728px] h-px border-t-[1px] border-solid border-darkslategray" />
          </div>
        </section>
        <div className="absolute top-[52px] left-[99px] w-[424px] h-[519.8px] overflow-hidden">
          <div className="absolute top-[211px] left-[0px] flex flex-col items-start justify-start gap-[45px]">
            <div className="flex flex-col items-end justify-start gap-[23px]">
              <h2
                className="m-0 relative text-inherit font-medium font-inherit inline-block w-[170px] h-[42px] shrink-0"
                id="review-subrev"
              >
                Reviews
              </h2>
              <div className="relative box-border w-[175px] h-[3px] border-t-[3px] border-solid border-black" />
            </div>
            <div className="w-[424px] flex flex-col items-start justify-start gap-[35px] text-[28.99px]">
              <div className="flex flex-row items-start justify-start gap-[18.52px]">
                <b className="relative inline-block w-[41.9px] h-[31px] shrink-0">
                  4.7
                </b>
                <div className="flex flex-row items-start justify-start gap-[5.64px]">
                  <img
                    className="relative w-[32.2px] h-[31px]"
                    alt=""
                    src="/-icon-star2.svg"
                  />
                  <img
                    className="relative w-[32.2px] h-[31px]"
                    alt=""
                    src="/-icon-star3.svg"
                  />
                  <img
                    className="relative w-[32.2px] h-[31px]"
                    alt=""
                    src="/-icon-star4.svg"
                  />
                  <img
                    className="relative w-[32.2px] h-[31px]"
                    alt=""
                    src="/-icon-star5.svg"
                  />
                  <img
                    className="relative w-[32.2px] h-[31px]"
                    alt=""
                    src="/-icon-star6.svg"
                  />
                </div>
                <span className="relative inline-block w-[94px] h-[22px] shrink-0">
                  4,052
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-[6px] text-[19.96px]">
                <div className="flex flex-row items-start justify-start gap-[81px]">
                  <label
                    className="cursor-pointer relative inline-block w-[117.2px] h-[18.3px] shrink-0"
                    htmlFor="filters_detail_checkbox_rating__1"
                  >
                    Masterpiece
                  </label>
                  <div className="flex flex-row items-end justify-start py-3 px-0 relative text-lg">
                    <div className="relative w-[155.5px] h-0 z-[0]">
                      <img
                        className="absolute top-[-7.5px] left-[-7.5px] w-[170.5px] h-[15px]"
                        alt=""
                        src="/line-4.svg"
                      />
                    </div>
                    <span className="absolute my-0 mx-[!important] top-[0px] left-[181px] inline-block w-[66.5px] h-[18.3px] shrink-0 z-[1]">
                      2,213
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[94px]">
                  <label
                    className="cursor-pointer relative inline-block w-[105.6px] h-[18.3px] shrink-0"
                    htmlFor="filters_detail_checkbox_rating__2"
                  >
                    Impressive
                  </label>
                  <div className="flex flex-col items-center justify-center py-3 px-0 relative gap-[10px] text-lg">
                    <div className="relative w-[108.9px] h-0 z-[0]">
                      <img
                        className="absolute top-[-7.5px] left-[-7.5px] w-[123.9px] h-[15px]"
                        alt=""
                        src="/line-41.svg"
                      />
                    </div>
                    <span className="absolute my-0 mx-[!important] top-[0px] left-[129px] inline-block w-[66.5px] h-[18.3px] shrink-0 z-[1]">
                      <p className="m-0">1,329</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[23px]">
                  <label className="cursor-pointer relative inline-block w-[176.3px] h-[18.3px] shrink-0">
                    Thought-Provoking
                  </label>
                  <div className="flex flex-col items-start justify-start py-3 px-0 relative gap-[10px] text-lg">
                    <div className="relative w-[58.4px] h-[0.2px] z-[0]">
                      <img
                        className="absolute top-[-7.5px] left-[-7.5px] w-[73.4px] h-[15.1px]"
                        alt=""
                        src="/line-42.svg"
                      />
                    </div>
                    <span className="absolute my-0 mx-[!important] top-[0px] left-[78.4px] inline-block w-[66.5px] h-[18.3px] shrink-0 z-[1]">
                      452
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[40px]">
                  <label
                    className="cursor-pointer relative inline-block w-[159.6px] h-[18.3px] shrink-0"
                    htmlFor="filters_detail_checkbox_rating__3"
                  >
                    Abstract Attempt
                  </label>
                  <div className="flex flex-row items-center justify-start gap-[16px] text-lg">
                    <div className="relative w-[14.6px] h-0">
                      <img
                        className="absolute top-[-7.5px] left-[-7.5px] w-[29.6px] h-[15px]"
                        alt=""
                        src="/line-43.svg"
                      />
                    </div>
                    <span className="relative inline-block w-[66.5px] h-[18.3px] shrink-0">
                      36
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[33px]">
                  <label className="cursor-pointer relative inline-block w-[167.1px] h-[18.3px] shrink-0">
                    Unfinished Sketch
                  </label>
                  <div className="flex flex-row items-center justify-start gap-[25px] text-lg">
                    <div className="relative w-[6.3px] h-0">
                      <img
                        className="absolute top-[-7.5px] left-[-7.5px] w-[21.2px] h-[15px]"
                        alt=""
                        src="/line-44.svg"
                      />
                    </div>
                    <span className="relative inline-block w-[66.5px] h-[18.3px] shrink-0">
                      22
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[2px] flex flex-col items-start justify-start gap-[45px]">
            <div className="flex flex-col items-end justify-start gap-[23px]">
              <h2
                className="m-0 relative text-inherit font-medium font-inherit inline-block w-[210px] h-[42px] shrink-0"
                id="contribute"
              >
                Contribute
              </h2>
              <div className="relative box-border w-[213px] h-[3px] border-t-[3px] border-solid border-black" />
            </div>
            <button
              className="cursor-pointer py-3 px-8 bg-[transparent] rounded-10xs box-border h-14 flex flex-row items-center justify-center border-[1px] border-solid border-black"
              onClick={onReviewBtnClick}
            >
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="relative w-[34.7px] h-[34.7px]"
                  alt=""
                  src="/vector12.svg"
                />
                <div className="flex flex-row items-center justify-center">
                  <span className="relative text-lg font-helvetica-neue text-black text-left">
                    Reviews
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section
        className="self-stretch h-[727px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-12 px-[60px] box-border gap-[56px] text-left text-23xl text-black font-helvetica-neue"
        id="similar places"
      >
        <div className="flex flex-col items-end justify-start gap-[23px]">
          <h1
            className="m-0 relative text-inherit font-medium font-inherit inline-block w-[343px] h-[42px] shrink-0"
            id="similar-location-header"
          >
            Similar Locations
          </h1>
          <div className="relative box-border w-[346px] h-[3px] border-t-[3px] border-solid border-black" />
        </div>
        <section
          className="w-[1320px] flex flex-row items-center justify-center py-0 px-[36.94023132324219px] box-border gap-[33.25px] text-left text-[22.16px] text-black font-helvetica-neue"
          id="similar-locations"
        >
          <div className="relative w-[305.1px] h-[499.4px]">
            <ArtCard
              dimensionCode="/process-014@2x.png"
              imageDimensions="/star-rate1.svg"
            />
            <div className="absolute top-[0px] left-[259.3px] w-[22.2px] h-[34.7px] overflow-hidden flex flex-col items-center justify-end py-[0.0000019073486328125px] px-0 box-border">
              <button className="cursor-pointer [border:none] py-[3.6940228939056396px] px-[4.432827472686768px] bg-white rounded-[73.88px] flex flex-row items-start justify-start">
                <img
                  className="relative w-[13.3px] h-[13.3px] overflow-hidden shrink-0"
                  alt=""
                  src="/favorite-border.svg"
                />
              </button>
            </div>
          </div>
          <a className="[text-decoration:none] relative w-[305.1px] h-[499.4px]">
            <ArtCard
              dimensionCode="/process-015@2x.png"
              imageDimensions="/star-rate6.svg"
            />
            <div className="absolute top-[0px] left-[259.3px] w-[22.2px] h-[34.7px] overflow-hidden flex flex-col items-center justify-end py-[0.0000019073486328125px] px-0 box-border">
              <button className="cursor-pointer [border:none] py-[3.6940228939056396px] px-[4.432827472686768px] bg-white rounded-[73.88px] flex flex-row items-start justify-start">
                <img
                  className="relative w-[13.3px] h-[13.3px] overflow-hidden shrink-0"
                  alt=""
                  src="/favorite-border.svg"
                />
              </button>
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[305.1px] h-[499.4px] text-[inherit]">
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[305.1px] h-[499.4px] flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/process-016@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start p-[23.641746520996094px] gap-[17.73px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.87px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit">
                    Blue
                  </h1>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate1.svg"
                    />
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate2.svg"
                    />
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate3.svg"
                    />
                  </div>
                  <p className="m-0 self-stretch relative text-sm-3 leading-[150%] font-light">
                    Portland's cozy enclave of live music, artistry, and local
                    flair.
                  </p>
                </div>
                <button
                  className="cursor-pointer [border:none] py-[8.865654945373535px] px-[23.641746520996094px] bg-darkslategray rounded-[2.22px] h-[41.4px] flex flex-row items-center justify-center box-border"
                  id="learn-More"
                >
                  <span className="relative text-sm-3 font-helvetica-neue text-white text-left">
                    Learn more
                  </span>
                </button>
              </div>
            </div>
            <div className="absolute top-[0px] left-[259.3px] w-[22.2px] h-[34.7px] overflow-hidden flex flex-col items-center justify-end py-[0.0000019073486328125px] px-0 box-border">
              <button
                className="cursor-pointer [border:none] py-[3.6940228939056396px] px-[4.432827472686768px] bg-white rounded-[73.88px] flex flex-row items-start justify-start"
                id="like"
              >
                <img
                  className="relative w-[13.3px] h-[13.3px] overflow-hidden shrink-0"
                  alt=""
                  src="/favorite-border.svg"
                />
              </button>
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[305.1px] h-[499.4px] text-[inherit]">
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[305.1px] h-[499.4px] flex flex-col items-start justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/process-017@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start p-[23.641746520996094px] gap-[17.73px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.87px]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit">
                    Muse Paintbar
                  </h1>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate6.svg"
                    />
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate2.svg"
                    />
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate3.svg"
                    />
                    <img
                      className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
                      alt=""
                      src="/star-rate4.svg"
                    />
                  </div>
                  <p className="m-0 self-stretch relative text-sm-3 leading-[150%] font-light">
                    A creative haven in Portland, blending artistry with
                    fun-filled paint sessions.
                  </p>
                </div>
                <button
                  className="cursor-pointer [border:none] py-[8.865654945373535px] px-[23.641746520996094px] bg-darkslategray rounded-[2.22px] h-[41.4px] flex flex-row items-center justify-center box-border"
                  id="learn-More"
                >
                  <span className="relative text-sm-3 font-helvetica-neue text-white text-left">
                    Learn more
                  </span>
                </button>
              </div>
            </div>
            <div className="absolute top-[0px] left-[259.3px] w-[22.2px] h-[34.7px] overflow-hidden flex flex-col items-center justify-end py-[0.0000019073486328125px] px-0 box-border">
              <button
                className="cursor-pointer [border:none] py-[3.6940228939056396px] px-[4.432827472686768px] bg-white rounded-[73.88px] flex flex-row items-start justify-start"
                id="like"
              >
                <img
                  className="relative w-[13.3px] h-[13.3px] overflow-hidden shrink-0"
                  alt=""
                  src="/favorite-border.svg"
                />
              </button>
            </div>
          </a>
        </section>
      </section>
    </div>
  );
};

export default LocationView;
