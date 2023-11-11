import CardForm from "./CardForm";

const ReviewWriteUp = () => {
  return (
    <div className="w-[728px] flex flex-col items-start justify-start gap-[30px] text-left text-11xl text-black font-helvetica-neue">
      <div className="w-[716px] flex flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-start gap-[18px]">
          <CardForm userAvatar="/ellipse-12@2x.png" userName="Emily P." />
          <div
            className="flex flex-row items-start justify-start gap-[7px]"
            id="stars"
          >
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
                className="absolute h-[103.9%] w-[96.25%] top-[0%] right-[-213.75%] bottom-[-3.9%] left-[217.5%] max-w-full overflow-hidden max-h-full opacity-[0]"
                alt=""
                src="/vector3.svg"
              />
              <img
                className="absolute h-[85.19%] w-[85%] top-[8.31%] right-[6.5%] bottom-[6.49%] left-[8.5%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector10.svg"
              />
            </div>
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
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[14px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[35px] h-[35px] overflow-hidden shrink-0"
            id="like"
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
        <span className="overflow-hidden flex flex-col items-start justify-start">
          <p className="m-0 relative inline-block w-[716px]">
            <span className="block">{`The Louvre, without dispute, has one of the most impressive collections in the world. I’ve been a few times, and no debate there. `}</span>
            <span className="block">&nbsp;</span>
            <span className="block">{`The collections of a range of European artists is indisputably astonishing, and the building itself is a work of art to be admired. `}</span>
            <span className="block">&nbsp;</span>
            <span className="block">
              But in 2023, their ability to make it accessible to navigate and
              learn could be so much better. First, any “skip the line” tour is
              a risk riddled proposition. We arrived 20 minutes early and
              entered 20 minutes late, waiting in line with everyone else who
              was pre booked, and of course, it remained crowded.
            </span>
          </p>
        </span>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-end justify-start gap-[3px]"
          id="readmore"
        >
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
  );
};

export default ReviewWriteUp;
