import React, { useState } from 'react';
import WriteReviewCard from "../components/WriteReviewCard";
import NavBar from "../components/NavBar";

const WriteReview = () => {
  // State to store the rating
  const [rating, setRating] = useState(0);

  // Function to handle rating
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1024px] overflow-hidden">
      <NavBar />
      <main className="absolute top-[139px] left-0 w-[1356px] overflow-hidden flex flex-col items-end justify-center py-0 pr-2.5 pl-0">
        {/* Main content */}
        <section className="w-[1271px] h-[1041px] overflow-hidden flex flex-row items-start gap-[60px]">

          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[40px] font-bold w-[523px] font-helvetica-neue">We love to hear about your experience!</h1>
            <WriteReviewCard />
          </div>

          {/* Divider */}
          <div className="w-0.5 h-[787px] border-r-[20px] border-darkslategray" />

          {/* Review form */}
          <main
            className="h-[1041px] overflow-y-scroll flex flex-col items-start justify-start gap-[40px] text-left text-16xl text-black font-helvetica-neue"
            id="review_template"
          >
            <div className="w-[611px] h-[103px] shrink-0 flex flex-col items-start justify-start gap-[20px]">
              <h2
                className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[636px] h-[37px] shrink-0"
                id="q1"
              >
                How would you rate your experience?
              </h2>
              <div className="flex bg-transparent">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`w-12 h-14 bg-transparent ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </button>
                ))}
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
              <textarea
                className="font-medium font-helvetica-neue text-base bg-[transparent] rounded-10xs box-border w-[611px] h-[157px] py-3 px-4 border-[0.5px] border-solid border-gray-500"
                rows="5"
              ></textarea>
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
                Submi
              </span>
            </button>
          </main>
        </section>
      </main>
    </div>
  );
};

export default WriteReview;
