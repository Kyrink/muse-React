import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GalleryViewInfo = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  return (
    <div className="w-[628px] flex flex-col items-start justify-start gap-[40px] text-left text-36xl text-black font-helvetica-neue">
      <div
        className="flex flex-col items-start justify-start gap-[16px]"
        id="address-review-sect"
      >
        <h1
          className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block w-[628px]"
          id="art-location-header"
        >
          Portland Museum of Art
        </h1>
        <h2
          className="m-0 relative text-9xl [text-decoration:underline] font-medium font-inherit text-darkgray-200 inline-block w-[630px] h-[38px] shrink-0"
          id="address"
        >
          7 Congress Sq, Portland, ME, 04101
        </h2>
      </div>
      <div className="self-stretch h-[351px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-5xl">
        <p
          className="m-0 self-stretch relative leading-[150%] inline-block h-[558px] shrink-0"
          id="art-location-par"
        >
          <span className="block">
            Get ready for a creative splash at the Portland Museum of Art (PMA)
            in scenic Portland, Maine! It's not just the biggest art museum in
            Maine; it's a treasure chest of stories, colors, and ideas with over
            18,000 artworks waiting to be discovered. From the bold strokes of
            Winslow Homer to the dreamy landscapes by Andrew Wyeth, the PMA is
            where Maine's art rocks!
          </span>
          <span className="block">&nbsp;</span>
          <span className="block">
            Dive into American classics, get cozy with European masters, and
            play "I spy" with contemporary coolness. And here's a twist: the
            building itself is a piece of art designed by the legendary I.M.
            Pei. So whether you're a selfie superstar or a wandering art
            whisperer, the PMA is your go-to for an unforgettable art adventure.
            Ready to add some pizzazz to your Portland experience? The PMA says,
            "Come on in!"
          </span>
        </p>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[32px]"
        id="m_buttons"
      >
        <button
          className="cursor-pointer py-3 px-8 bg-[transparent] rounded-10xs box-border h-14 flex flex-row items-center justify-center border-[1px] border-solid border-black"
          id="view-on-map-btn"
          onClick={onButtonClick}
        >
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-[34.7px] h-[34.7px]"
              id="map-icon"
              alt=""
              src="/-icon-map.svg"
            />
            <span className="relative text-lg font-helvetica-neue text-black text-left">
              View on Map
            </span>
          </div>
        </button>
        <button
          className="cursor-pointer py-3 px-8 bg-[transparent] rounded-10xs box-border h-14 flex flex-row items-center justify-center border-[1px] border-solid border-black"
          id="visit-website-btn"
        >
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="relative w-[34.7px] h-[34.7px]"
              id="link-icon"
              alt=""
              src="/-icon-link-2-outline.svg"
            />
            <span className="relative text-lg font-helvetica-neue text-black text-left">
              visit website
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GalleryViewInfo;
