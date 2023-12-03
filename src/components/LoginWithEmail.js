import { useState, useCallback } from "react";
import LoginOption from "./LoginOption";
import PortalPopup from "./PortalPopup";
import { Link } from "react-router-dom";

const LoginWithEmail = ({ onClose, onBack }) => {
    const [isLoginOptionPopupOpen, setLoginOptionPopupOpen] = useState(false);

    const openLoginOptionPopup = useCallback(() => {
        setLoginOptionPopupOpen(true);
    }, []);

    const closeLoginOptionPopup = useCallback(() => {
        setLoginOptionPopupOpen(false);
    }, []);

    return (
        <>
            <div
                className="rounded-3xs bg-white w-[605px] h-[830px] overflow-hidden flex flex-row items-start justify-start py-10 px-9 box-border gap-[45px]">
                <button
                    className="cursor-pointer p-0 bg-[transparent] relative rounded-81xl box-border w-6 h-6 border-[1px] border-solid border-black"
                    id="return"
                    onClick={() => {
                        if (onBack) onBack();
                        if (onClose) onClose();
                    }}
                >
                    <img className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_14px)] w-[26px] h-[26px] overflow-hidden"
                        alt="" src="/chevron-left.svg" />
                </button>
                <section
                    className="w-[414px] h-[692px] overflow-hidden shrink-0 flex flex-col items-center justify-end text-left text-17xl text-steelblue-200 font-helvetica-neue"
                    id="login">
                    <div
                        className="w-[414px] h-[617px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[41px]">
                        <div
                            className=" z-5 w-[414px] h-[443px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[21px] px-5">
                            <div
                                className="w-56 h-[120px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[62px]">
                                <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit flex items-end w-24 h-7 shrink-0"
                                    id="logo">
                                    muse
                                </h1>
                                <h2 className="m-0 relative text-11xl leading-[100%] font-bold font-inherit text-black flex items-end w-56"
                                    id="welcome-back">{`Welcome back. `}</h2>
                            </div>
                            <div
                                className="w-[414px] h-[302px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[33px] text-base text-black">
                                <div
                                    className="w-[414px] h-[221px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[26px] zIndex:99999">
                                    <div className="flex flex-col items-start justify-start gap-[9px]">
                                        <label
                                            className="cursor-pointer relative font-medium inline-block w-[120px] h-[19px] shrink-0">
                                            Email Address
                                        </label>
                                        <input
                                            className="[border:none] flex font-medium font-helvetica-neue text-base bg-[transparent] w-[414px] flex-col items-center justify-center"
                                            name="email-address" id="1" placeholder="Enter your email address" type="email" />
                                    </div>
                                    <div className="flex flex-col items-start justify-start gap-[10px]">
                                        <label
                                            className="cursor-pointer relative font-medium inline-block w-[120px] h-[19px] shrink-0">
                                            Password
                                        </label>
                                        <input
                                            className="[border:none] flex font-medium font-helvetica-neue text-base bg-[transparent] w-[414px] flex-col items-center justify-center"
                                            name="password" id="1" placeholder="Enter your password" type="password" />
                                        <Link
                                            className="cursor-pointer [text-decoration:underline] relative font-medium text-[inherit] inline-block w-[140px] h-4 shrink-0"
                                            id="forgot-password" to="/signup-page">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <button
                                    className="cursor-pointer [border:none] p-0 bg-[transparent] w-[311px] overflow-hidden flex flex-col items-center justify-start"
                                    id="submit">
                                    <div
                                        className="self-stretch rounded-11xl bg-darkslategray h-12 flex flex-row items-center justify-center py-3 px-8 box-border">
                                        <span
                                            className="relative text-base font-medium font-helvetica-neue text-white text-left">
                                            Submit
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div
                            className="w-[402px] h-[133px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[33px] text-base text-gray-200">
                            <div
                                className="w-[402px] h-[53px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[17px]">
                                <div className="w-[402px] overflow-hidden flex flex-col items-end justify-center">
                                    <div className="flex flex-row items-center justify-center gap-[10px]">
                                        <div
                                            className="relative box-border w-[126px] h-px border-t-[1px] border-solid border-silver" />
                                        <span className="relative font-medium inline-block w-[121px] h-[17px] shrink-0">
                                            Not a member?
                                        </span>
                                        <div
                                            className="relative box-border w-[126px] h-px border-t-[1px] border-solid border-darkgray-100" />
                                    </div>
                                </div>
                                <span className="w-[354px] overflow-hidden flex flex-col items-end justify-center">
                                    <Link
                                        className="cursor-pointer [text-decoration:none] relative text-[inherit] inline-block w-[293px] h-[19px] shrink-0"
                                        id="join" to="/signup-page">
                                        <b>Join</b>
                                        <span className="font-medium">
                                            {" "}
                                            to unlock your muse colored lens.
                                        </span>
                                    </Link>
                                </span>
                            </div>
                            <span
                                className="w-[390px] overflow-hidden flex flex-col items-end justify-center text-center text-sm text-[inherit]"
                                id="disclaimer">
                                <span className="relative font-medium inline-block w-[365px] h-[47px] shrink-0">
                                    {`By proceeding, you agree to our `}
                                    <a className="text-[inherit]"
                                        href="https://www.tripadvisor.com/pages/terms.html?locale=en-US" target="_blank">
                                        <span className="[text-decoration:underline]">
                                            Terms of Use
                                        </span>
                                    </a>
                                    {` and confirm you have read our `}
                                    <a className="text-[inherit]"
                                        href="https://www.tripadvisor.com/pages/privacy.html?locale=en-US" target="_blank">
                                        <span className="[text-decoration:underline]">
                                            Privacy and Cookie Statement
                                        </span>
                                    </a>
                                    .
                                </span>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            {isLoginOptionPopupOpen && (
                <PortalPopup overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered" onOutsideClick={closeLoginOptionPopup}>
                    <LoginOption onClose={closeLoginOptionPopup} />
                </PortalPopup>
            )}
        </>
    );
};

export default LoginWithEmail;