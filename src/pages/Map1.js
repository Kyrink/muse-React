import { Link } from "react-router-dom";

const Map1 = () => {
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1024px] overflow-hidden">
      <main
        className="absolute top-[159px] left-[108px] rounded-3xs w-[1226px] h-[756px] overflow-hidden"
        id="map-main"
      >
        <img
          className="absolute top-[-6390px] left-[3079px] w-4 h-5 overflow-hidden"
          alt=""
          src="/default-marker-component.svg"
        />
        <main
          className="absolute top-[0px] left-[-27px] w-[1280px] h-[941px] overflow-hidden flex flex-col items-center justify-end"
          id="map"
        >
          <section
            className="self-stretch overflow-hidden flex flex-col items-end justify-start py-[506px] px-[456.54681396484375px] bg-[url('/public/frame3@3x.png')] bg-cover bg-no-repeat bg-[top]"
            id="map-section"
          >
            <address
              className="self-stretch rounded-[8.37px] flex flex-col items-center justify-start relative gap-[4.19px] text-left text-[11.72px] text-black font-helvetica-neue"
              id="address-popup"
            >
              <img
                className="relative w-[302.7px] h-[257.6px] z-[0]"
                alt=""
                src="/union.svg"
              />
              <img
                className="absolute my-0 mx-[!important] top-[7.5px] left-[calc(50%_-_141.75px)] rounded-[8.37px] w-[283.1px] h-[154.1px] object-cover z-[1]"
                id="map-popup-img"
                alt=""
                src="/rectangle-3@2x.png"
              />
              <div className="my-0 mx-[!important] absolute top-[170px] left-[calc(50%_-_133.75px)] flex flex-col items-start justify-start gap-[2.51px] z-[2]">
                <h1 className="m-0 relative text-[14.66px] font-medium font-inherit inline-block w-[266.7px] h-[16.3px] shrink-0">
                  Portland Museum of Art
                </h1>
                <h2 className="m-0 relative text-inherit font-medium font-inherit text-darkgray-200 inline-block w-[263.8px] h-[15.9px] shrink-0">
                  7 Congress Sq, Portland, ME, 04101
                </h2>
                <span className="relative text-silver inline-block w-[133.2px] h-[12.1px] shrink-0">
                  1.2 miles away
                </span>
              </div>
            </address>
          </section>
        </main>
      </main>
      <header
        className="absolute top-[-1px] left-[-1px] box-border w-[1442px] h-[90px] flex flex-row items-center justify-between py-0 px-[60px] text-left text-17xl text-black font-helvetica-neue border-[1px] border-solid border-darkslategray"
        id="nav bar"
      >
        <div className="flex flex-row items-center justify-center gap-[56px]">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[100%] font-bold text-[inherit] flex items-end w-24 h-7 shrink-0"
            to="/"
          >
            muse
          </Link>
          <nav
            className="m-0 flex flex-row items-center justify-center gap-[32px] text-left text-base text-gray-500 font-helvetica-neue"
            id="nav options"
          >
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block">
              How it works
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block">
              Inspire Me
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-helvetica-neue text-gray-500 text-left inline-block">
              Search
            </button>
            <a className="[text-decoration:none] relative text-[inherit]">
              View Map
            </a>
          </nav>
        </div>
        <div
          className="self-stretch flex flex-row items-center justify-center text-base"
          id="right_nav"
        >
          <Link
            className="cursor-pointer [text-decoration:none] relative font-medium text-[inherit]"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Map1;
