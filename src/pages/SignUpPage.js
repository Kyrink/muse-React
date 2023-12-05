import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import InputFields from "../components/InputFields";

const SignUpPage = () => {

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative bg-whitesmoke-100 w-full h-[1024px] overflow-hidden text-left text-xs text-black font-helvetica-neue">
      <NavBar />
      <div className="absolute top-[6px] left-[0px] bg-whitesmoke-100 w-[1440px] h-[1024px]" />
      <PageTitle />
      <SignInLink />
      <DecorativeImages />
      <InputFields />
      <TermsCheckbox />
    </div>
  );
};

const PageTitle = () => (
  <>
    <h1
      className="m-0 absolute top-[190px] left-[calc(50%_-_207px)] text-17xl leading-[125%] font-normal font-inherit inline-block w-[414px]"
      id="hi-there"
    >
      Hi there, let's get you Started with muse!
    </h1>
    <h2 className="m-0 absolute top-[312px] left-[calc(50%_-_207px)] text-lg leading-[150%] font-normal font-inherit inline-block w-[414px]">
      Please fill in your information below.
    </h2>
  </>
);

const SignInLink = () => (
  <a className="[text-decoration:none] absolute top-[102px] left-[1073px] flex flex-row items-center justify-start gap-[15px] text-lg text-[inherit]">
    <span className="relative leading-[150%] inline-block w-[213px] h-[17px] shrink-0">
      Already have an account?
    </span>
    <Link
      className="cursor-pointer [text-decoration:none] relative leading-[150%] text-darkslategray inline-block w-[107px] h-[15px] shrink-0"
      to="/LoginOption"
    >
      Sign In
    </Link>
  </a>
);

const DecorativeImages = () => (
  <>
    <img
      className="absolute top-[227px] left-[0px] w-[320px] h-[264px] object-cover"
      id="signup-img1"
      alt="Decorative"
      src="/rectangle-6@2x.png"
    />
    <img
      className="absolute top-[537px] left-[1004px] w-[504px] h-[505px] object-cover"
      id="signup-img3"
      alt=""
      src="/rectangle-5@2x.png"
    />
    <img
      className="absolute top-[180px] left-[1177px] w-[331px] h-[450px] object-cover"
      alt=""
      src="/rectangle-4@2x.png"
    />
  </>
);

const TermsCheckbox = () => (
  <>
    <div className="absolute top-[683px] left-[513px] flex flex-row items-center justify-start gap-[35px] text-base">
      <input
        className="w-5 h-5 flex flex-col items-center justify-start"
        required={true}
        id="chckbox"
        type="checkbox"
      />
      <i className="relative inline-block w-[297px] h-[41px] shrink-0">
        By signing up you agree to the terms of use of this site
      </i>
    </div>
  </>
);
export default SignUpPage;