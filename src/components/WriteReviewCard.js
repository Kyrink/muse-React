const WriteReviewCard = () => {
  return (
    <div
      className="rounded-10xs flex flex-col items-start justify-start p-5 gap-[25px] text-left text-11xl text-black font-helvetica-neue border-[3px] border-solid border-darkslategray"
      id="img_and_data"
    >
      <img
        className="relative w-[464px] h-[493.9px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div
        className="flex flex-col items-start justify-start gap-[9px]"
        id="name_and_address"
      >
        <h1
          className="m-0 relative text-inherit leading-[100%] font-medium font-inherit inline-block w-[343px] h-[26px] shrink-0"
          id="locationName"
        >
          Portland Museum of Art
        </h1>
        <h3 className="m-0 relative text-xl font-medium font-inherit text-darkgray-200 inline-block w-[190px] h-[43px] shrink-0">
          <p className="m-0">{`7 Congress Sq, `}</p>
          <p className="m-0">Portland, ME, 04101</p>
        </h3>
      </div>
    </div>
  );
};

export default WriteReviewCard;
