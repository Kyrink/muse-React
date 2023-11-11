const CardForm = ({ userAvatar, userName }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[20px] text-left text-11xl text-black font-helvetica-neue">
      <img
        className="relative rounded-[50%] w-[81px] h-[81px] object-cover"
        id="usr-img2"
        alt=""
        src={userAvatar}
      />
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <h3
          className="m-0 relative text-inherit font-medium font-inherit inline-block w-[150px] h-[25px] shrink-0"
          id="user-name2"
        >
          {userName}
        </h3>
        <span
          className="relative text-xl inline-block w-[188px] h-7 shrink-0"
          id="date_joined"
        >
          member since 2023
        </span>
      </div>
    </div>
  );
};

export default CardForm;
