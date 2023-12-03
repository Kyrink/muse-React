import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import GalleryViewInfo from "../components/GalleryViewInfo";
import ReviewWriteUp from "../components/ReviewWriteUp";
import CardForm from "../components/CardForm";
import ArtCard from "../components/ArtCard";
import NavBar from "../components/NavBar";

const LocationView = () => {
  const navigate = useNavigate();

  const onReviewBtnClick = useCallback(() => {
    navigate("/write-review");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-100 w-full overflow-hidden flex flex-col items-center justify-start">
      <NavBar />
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
            className="flex-1 flex flex-col items-start justify-start gap-[48px] animate-slideUp"
            id="left_galleryImg"
            style={{ animationDuration: '10s', animationIterationCount: 'infinite' }}
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
            className="flex-1 flex flex-col items-start justify-start gap-[48px] animate-slideDown"
            id="right_galleryImg"
            style={{ animationDuration: '10s', animationIterationCount: 'infinite' }}
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
          <ReviewWriteUp />
          <ReviewWriteUp />
          <ReviewWriteUp />
          <ReviewWriteUp />
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
        </section>
      </section>
    </div>
  );
};

export default LocationView;
