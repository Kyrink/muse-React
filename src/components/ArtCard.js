const ArtCard = ({ dimensionCode, imageDimensions }) => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[305.1px] h-[499.4px] flex flex-col items-start justify-start text-left text-[22.16px] text-black font-helvetica-neue">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={dimensionCode}
      />
      <div className="self-stretch flex flex-col items-start justify-start p-[23.641746520996094px] gap-[17.73px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8.87px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-medium font-inherit">
            Bomb Diggity Art
          </h1>
          <div className="flex flex-row items-start justify-start" id="star">
            <img
              className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
              alt=""
              src={imageDimensions}
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
            <img
              className="relative w-[17.7px] h-[17.7px] overflow-hidden shrink-0"
              alt=""
              src="/star-rate5.svg"
            />
          </div>
          <span className="self-stretch relative text-sm-3 leading-[150%] font-light">
            {" "}
            Vibrant fusion of eclectic artistry and community spirit.
          </span>
        </div>
        <button
          className="cursor-pointer [border:none] py-[8.865654945373535px] px-[23.641746520996094px] bg-darkslategray rounded-[2.22px] h-[41.4px] flex flex-row items-center justify-center box-border"
          id="learn-more"
        >
          <div className="relative text-sm-3 font-helvetica-neue text-white text-left">
            Learn more
          </div>
        </button>
      </div>
    </div>
  );
};

export default ArtCard;
