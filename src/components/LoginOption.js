const LoginOption = ({ onClose, onLogin, onEmailLogin }) => {
  return (
    <div className="rounded-3xs bg-white w-[550px] h-[650px] overflow-hidden flex flex-row items-start justify-end py-[30px] px-[42px] box-border gap-[27px] max-w-full max-h-full">
      <section
        className="w-[365px] h-[493px] overflow-hidden shrink-0 flex flex-col items-center justify-end text-left text-17xl text-steelblue-200 font-helvetica-neue"
        id="signInSection"
      >
        <div className="flex flex-col items-start justify-start gap-[58px]">
          <h1
            className="m-0 relative text-inherit leading-[100%] font-bold font-inherit flex items-end w-24 h-7 shrink-0"
            id="logo"
          >
            muse
          </h1>
          <div className="h-[351px] flex flex-col items-start justify-start gap-[48px] text-11xl text-black">
            <h2
              className="m-0 relative text-inherit leading-[100%] font-bold font-inherit flex items-end w-[365px]"
              id="signIn"
            >
              sign in, a world of art awaits you!
            </h2>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <button
                className="cursor-pointer py-3 pr-[60px] pl-4 bg-[transparent] self-stretch rounded-11xl box-border h-14 flex flex-row items-center justify-center gap-[50px] border-[2px] border-solid border-black"
                id="sign-in-with-google"
              >
                <img
                  className="relative w-[30px] h-[30px]"
                  id="icon-google"
                  alt=""
                  src="/-icon-google.svg"
                />
                <span className="relative text-xl font-medium font-helvetica-neue text-black text-left">
                  Continue with google
                </span>
              </button>
              <button
                className="cursor-pointer py-3 pr-[60px] pl-4 bg-[transparent] self-stretch rounded-11xl box-border h-14 flex flex-row items-center justify-center gap-[50px] border-[2px] border-solid border-black"
                id="continue-with-email"
                onClick={onEmailLogin}
              >
                <img
                  className="relative w-[30px] h-[30px]"
                  id="icon-email"
                  alt=""
                  src="/-icon-email.svg"
                />
                <span className="relative text-xl font-medium font-helvetica-neue text-black text-left">
                  Continue with email
                </span>
              </button>
            </div>
            <span className="relative text-sm font-medium text-[inherit] text-center inline-block w-[365px] h-[47px] shrink-0">
              {`By proceeding, you agree to our `}
              <a
                className="text-[inherit]"
                href="https://www.tripadvisor.com/pages/terms.html?locale=en-US"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Terms of Use
                </span>
              </a>
              {` and confirm you have read our `}
              <a
                className="text-[inherit]"
                href="https://www.tripadvisor.com/pages/privacy.html?locale=en-US"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Privacy and Cookie Statement
                </span>
              </a>
              .
            </span>
          </div>
        </div>
      </section>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6"
        id="xButton"
        onClick={onClose}
      >
        <img
          className="absolute h-[108.33%] w-[108.33%] top-[-4.17%] right-[-4.17%] bottom-[-4.17%] left-[-4.17%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[108.33%] w-[108.33%] top-[-4.17%] right-[-4.17%] bottom-[-4.17%] left-[-4.17%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </button>
    </div>
  );
};

export default LoginOption;