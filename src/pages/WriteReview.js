import { Link } from "react-router-dom";
import WriteReviewCard from "../components/WriteReviewCard";

const WriteReview = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1024px] overflow-hidden">
      <header
        className="absolute top-[-1px] left-[-1px] box-border w-[1442px] h-[90px] flex flex-row items-center justify-between py-0 px-[60px] text-left text-base text-black font-helvetica-neue border-[1px] border-solid border-darkslategray"
        id="navBar"
      >
        <div className="flex flex-row items-center justify-center gap-[56px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-17xl leading-[100%] font-bold font-helvetica-neue text-black text-left flex items-end w-24 h-7 shrink-0"
            id="logoButton"
          >
            muse
          </button>
          <nav
            className="m-0 flex flex-row items-center justify-center gap-[32px]"
            id="nav options"
          >
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block"
              id="howitworks"
            >
              How it works
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block"
              id="inspireMe"
            >
              Inspire Me
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block"
              id="search"
            >
              Search
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block"
              id="viewMap"
            >
              View Map
            </button>
          </nav>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center">
          <Link
            className="cursor-pointer [text-decoration:none] relative font-medium text-[inherit]"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </header>
      <main className="absolute top-[139px] left-[0px] w-[1356px] overflow-hidden flex flex-col items-end justify-center py-0 pr-2.5 pl-0 box-border">
        <section className="w-[1271px] h-[1041px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.0001220703125px] px-0 pb-0 box-border gap-[60px] text-left text-[50px] text-black font-helvetica-neue">
          <div
            className="flex flex-col items-start justify-start gap-[42px]"
            id="location card"
          >
            <h1
              className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block w-[523px] h-[118px] shrink-0"
              id="hearYou"
            >
              We love to hear about your experience!
            </h1>
            <WriteReviewCard />
          </div>
          <div className="relative box-border w-0.5 h-[787px] border-r-[2px] border-solid border-darkslategray" />
          <main
            className="h-[1041px] overflow-y-auto flex flex-col items-start justify-start gap-[40px] text-left text-16xl text-black font-helvetica-neue"
            id="review_template"
          >
            <div className="w-[611px] h-[103px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <h2
                className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[636px] h-[37px] shrink-0"
                id="q1"
              >
                How would you rate your experience?
              </h2>
              <div className="relative w-[280px] h-[50.5px]" id="stars">
                <img
                  className="absolute h-full w-[18.04%] top-[0%] right-[81.96%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/-icon-star-outline.svg"
                />
                <img
                  className="absolute h-full w-[18.04%] top-[0%] right-[61.46%] bottom-[0%] left-[20.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/-icon-star-outline1.svg"
                />
                <img
                  className="absolute h-full w-[18.04%] top-[0%] right-[40.96%] bottom-[0%] left-[41%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/-icon-star-outline2.svg"
                />
                <img
                  className="absolute h-full w-[18.04%] top-[0%] right-[20.46%] bottom-[0%] left-[61.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/-icon-star-outline3.svg"
                />
                <img
                  className="absolute h-full w-[18.04%] top-[0%] right-[0%] bottom-[0%] left-[81.96%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/-icon-star-outline4.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <h2
                className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[300px] h-[37px] shrink-0"
                id="q2"
              >
                When did you go?
              </h2>
              <select
                className="relative rounded-[60px] w-[298px] h-14"
                required={true}
              >
                <option value="January, 2023">January, 2023</option>
                <option value="February, 2023">February, 2023</option>
                <option value="March,2023">March,2023</option>
                <option value="April, 2023">April, 2023</option>
              </select>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <h2
                className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[300px] h-[37px] shrink-0"
                id="Q3"
              >
                Write your review
              </h2>
              <input
                className="font-medium font-helvetica-neue text-base bg-[transparent] rounded-10xs box-border w-[611px] h-[157px] flex flex-row items-start justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[3px]">
                <h2
                  className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[210px] h-[37px] shrink-0"
                  id="Q4"
                >
                  Add a Photo
                </h2>
                <span className="relative text-[15px] leading-[100%] font-medium text-gray-100 inline-block w-[63px] h-3.5 shrink-0">
                  Optional
                </span>
              </div>
              <input
                className="rounded-10xs bg-gainsboro-100 w-[466px] h-[157px] flex flex-col items-center justify-center py-3 px-4 box-border"
                autoFocus={true}
                type="file"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] text-base">
              <button
                className="cursor-pointer p-0 bg-[transparent] relative rounded-sm box-border w-4 h-4 border-[0.5px] border-solid border-gray-500"
                id="certify"
              />
              <span className="relative inline-block w-[592px] h-[132px] shrink-0">
                I certify that this review is based on my own experience and is
                my genuine opinion of this establishment and that I have no
                personal or business relationship with this establishment, and
                have not been offered any incentive or payment originating from
                the establishment to write this review. I understand that muse
                has a zero-tolerance policy on fake or offensive reviews.
              </span>
            </div>
            <button
              className="cursor-pointer [border:none] py-3 px-8 bg-steelblue-100 rounded-10xs w-[527px] h-12 shrink-0 flex flex-row items-center justify-center box-border"
              id="submit"
            >
              <span className="relative text-base font-medium font-helvetica-neue text-white text-left">
                Select
              </span>
            </button>
          </main>
        </section>
      </main>
    </div>
  );
};

export default WriteReview;
