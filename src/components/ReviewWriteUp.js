import CardForm from "./CardForm";

const ReviewWriteUp = () => {
  return (
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
  );
};

export default ReviewWriteUp;
