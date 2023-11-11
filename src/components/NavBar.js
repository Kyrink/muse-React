import { useState, useCallback } from "react";
import LoginOption from "./LoginOption";
import PortalPopup from "./PortalPopup";

const NavBar = () => {
  const [isLoginOptionPopupOpen, setLoginOptionPopupOpen] = useState(false);

  const openLoginOptionPopup = useCallback(() => {
    setLoginOptionPopupOpen(true);
  }, []);

  const closeLoginOptionPopup = useCallback(() => {
    setLoginOptionPopupOpen(false);
  }, []);

  return (
    <>
      <header
        className="absolute top-[-1px] left-[0px] box-border w-full h-[90px] flex flex-row items-center justify-between py-0 px-[-60px] border-[1px] border-solid border-darkslategray"
        id="hero"
      >
        <ul className="m-0 flex flex-row items-center justify-center gap-[56px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-17xl leading-[100%] font-bold font-helvetica-neue text-black text-left flex items-end w-24 h-7 shrink-0">
            muse
          </button>
          <nav
            className="m-0 flex flex-row items-center justify-center gap-[32px]"
            id="nav options"
          >
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block"
              id="how it works"
            >
              How it works
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block"
              id="inspire me"
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
              id="button"
            >
              View Map
            </button>
          </nav>
        </ul>
        <div className="self-stretch flex flex-row items-center justify-center pr-[60px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-medium font-helvetica-neue text-black text-left inline-block"
            id="login"
            onClick={openLoginOptionPopup}
          >
            Log in
          </button>
        </div>
      </header>
      {isLoginOptionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLoginOptionPopup}
        >
          <LoginOption onClose={closeLoginOptionPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default NavBar;
