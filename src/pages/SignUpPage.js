import { useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="absolute top-[6px] left-[0px] bg-whitesmoke-100 w-[1440px] h-[1024px]" />
      <button
        className="cursor-pointer [border:none] py-3 px-8 bg-darkslategray absolute top-[759px] left-[calc(50%_-_207px)] rounded-10xs w-[414px] flex flex-row items-center justify-center box-border hover:animate-[2s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1]"
        id="submit"
      >
        <span className="flex-1 relative text-base font-medium font-helvetica-neue text-white text-center">
          Submit
        </span>
      </button>
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
      <a className="[text-decoration:none] absolute top-[102px] left-[1073px] flex flex-row items-center justify-start gap-[15px] text-lg text-[inherit]">
        <span className="relative leading-[150%] inline-block w-[213px] h-[17px] shrink-0">
          Already have an account?
        </span>
        <Link
          className="cursor-pointer [text-decoration:none] relative leading-[150%] text-darkslategray inline-block w-[107px] h-[15px] shrink-0"
          to="/login"
        >
          Sign In
        </Link>
      </a>
      <div className="absolute top-[581px] left-[513px] w-[414px] h-[77px] text-salmon">
        <div className="absolute top-[21px] left-[-148px] w-[562px] h-14">
          <div className="absolute top-[15px] left-[148px] font-light hidden">
            This field is required
          </div>
          <input
            className="flex font-medium font-helvetica-neue text-base bg-[transparent] absolute w-[calc(100%_-_148px)] top-[0px] right-[0px] left-[148px] rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
            name="new-password"
            placeholder="create a password"
            type="password"
          />
          <span className="absolute top-[0px] left-[0px] w-[92px] h-[42px] overflow-hidden flex flex-col items-center justify-end text-xl text-gray-500">
            <label
              className="cursor-pointer relative font-medium"
              htmlFor="sign_up_password"
            >
              Password
            </label>
          </span>
        </div>
      </div>
      <div className="absolute top-[525px] left-[513px] w-[414px] h-14 text-salmon">
        <div className="absolute top-[0px] left-[-148px] w-[562px] h-14">
          <div className="absolute top-[15px] left-[148px] font-light hidden">
            This field is required
          </div>
          <input
            className="flex font-medium font-helvetica-neue text-base bg-[transparent] absolute w-[calc(100%_-_148px)] top-[0px] right-[0px] left-[148px] rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
            name="new-email"
            placeholder="Enter your email address"
            type="email"
          />
          <span className="absolute top-[0px] left-[0px] w-[51px] h-[42px] overflow-hidden flex flex-col items-center justify-end text-xl text-gray-500">
            <label
              className="cursor-pointer relative font-medium"
              htmlFor="sign_up_email"
            >
              Email
            </label>
          </span>
        </div>
      </div>
      <div className="absolute top-[448px] left-[513px] w-[414px] h-14 text-salmon">
        <div className="absolute top-[0px] left-[-148px] w-[562px] h-14">
          <span className="absolute top-[15px] left-[148px] font-light hidden">
            This field is required
          </span>
          <input
            className="flex font-medium font-helvetica-neue text-base bg-[transparent] absolute w-[calc(100%_-_148px)] top-[0px] right-[0px] left-[148px] rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
            name="new-display-name"
            placeholder="Enter the name you wanter everyone to see"
            type="text"
          />
          <div className="absolute top-[0px] left-[0px] w-32 h-[42px] overflow-hidden flex flex-col items-center justify-end text-xl text-gray-500">
            <label
              className="cursor-pointer relative font-medium"
              htmlFor="sign_up_dspn"
            >
              Display Name
            </label>
          </div>
        </div>
      </div>
      <div className="absolute top-[371px] left-[513px] w-[414px] h-14 text-xl text-gray-500">
        <div className="absolute top-[-15px] left-[-148px] w-[562px] h-[71px] flex flex-row items-start justify-start gap-[93px]">
          <label
            className="cursor-pointer font-medium inline-block w-[57px] mt-[33px]"
            htmlFor="sign_up_name"
          >
            Name
          </label>
          <div className="w-[414px] overflow-hidden shrink-0 flex flex-col items-start justify-start text-xs text-salmon">
            <span className="relative font-light">This field is required</span>
            <input
              className="flex font-medium font-helvetica-neue text-base bg-[transparent] self-stretch rounded-10xs box-border h-14 flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-500"
              name="name"
              placeholder="Enter your name"
              type="text"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[227px] left-[0px] w-[562px] h-[264px] object-cover"
        id="signup-img1"
        alt=""
        src="/rectangle-6@2x.png"
      />
      <h2 className="m-0 absolute top-[312px] left-[calc(50%_-_207px)] text-lg leading-[150%] font-normal font-inherit inline-block w-[414px]">
        Please fill in your information below.
      </h2>
      <h1
        className="m-0 absolute top-[190px] left-[calc(50%_-_207px)] text-17xl leading-[125%] font-normal font-inherit inline-block w-[414px]"
        id="hi-there"
      >
        Hi there, let's get you Started with muse!
      </h1>
      <button
        className="cursor-pointer p-0 bg-[transparent] absolute top-[106px] left-[60px] rounded-81xl box-border w-6 h-6 border-[1px] border-solid border-black"
        id="back"
      >
        <img
          className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_14px)] w-[26px] h-[26px] overflow-hidden"
          alt=""
          src="/chevron-left.svg"
        />
      </button>
      <header
        className="absolute top-[-4px] left-[-1px] box-border w-[1442px] h-[90px] flex flex-row items-center justify-between py-0 px-[60px] text-left text-17xl text-black font-helvetica-neue border-[1px] border-solid border-darkslategray"
        id="nav bar"
      >
        <div className="flex flex-row items-center justify-center gap-[56px]">
          <Link
            className="cursor-pointer [text-decoration:none] relative leading-[100%] font-bold text-[inherit] flex items-end w-24 h-7 shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            id="logo"
            to="/"
            data-animate-on-scroll
          >
            muse
          </Link>
          <nav
            className="m-0 flex flex-row items-center justify-center gap-[32px] text-left text-base text-gray-500 font-helvetica-neue"
            id="nav options"
          >
            <div className="relative">How it works</div>
            <div className="relative">Inspire Me</div>
            <div className="relative">Search</div>
            <Link
              className="cursor-pointer [text-decoration:none] relative text-[inherit]"
              to="/map"
            >
              View Map
            </Link>
          </nav>
        </div>
        <span className="self-stretch flex flex-row items-center justify-center text-base">
          <Link
            className="cursor-pointer [text-decoration:none] relative font-medium text-[inherit] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            to="/login"
            data-animate-on-scroll
          >
            Log in
          </Link>
        </span>
      </header>
    </div>
  );
};

export default SignUpPage;
