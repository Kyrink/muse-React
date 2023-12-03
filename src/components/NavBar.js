import { useState, useCallback } from "react";
import LoginOption from "./LoginOption";
import LoginWithEmail from "./LoginWithEmail";
import PortalPopup from "./PortalPopup";
import { useNavigate } from 'react-router-dom';

const NavBarButton = ({ children, id, onClick }) => (
  <button
    className="cursor-pointer p-0 bg-transparent text-base font-helvetica-neue text-gray-500"
    id={id}
    onClick={onClick}
  >
    {children}
  </button>
);

const NavBar = () => {
  const [isLoginOptionPopupOpen, setLoginOptionPopupOpen] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [user, setUser] = useState(null); // null when logged out, user object when logged in
  const navigate = useNavigate();

  const toggleLoginOptionPopup = useCallback(() => {
    setLoginOptionPopupOpen((prev) => !prev);
  }, []);

  const navigateToLandingPage = () => {
    navigate('/');
  };

  const openEmailLoginForm = useCallback(() => {
    setShowEmailLogin(true); // Corrected to use setShowEmailLogin
    setLoginOptionPopupOpen(false);
  }, []);

  const closeEmailLoginForm = useCallback(() => {
    setShowEmailLogin(false); // Corrected to use setShowEmailLogin
  }, []);

  const reopenLoginOptionPopup = useCallback(() => {
    setLoginOptionPopupOpen(true);
  }, []);

  const handleLogin = (userData) => {
    // This function would be called with the user data when the login is successful
    setLoginOptionPopupOpen(false);
    setUser(userData); // Set the user data in the state
  };

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);

  const loginOptionProps = {
    onClose: toggleLoginOptionPopup,
    onLogin: handleLogin,
    onEmailLogin: openEmailLoginForm, // Corrected to use openEmailLoginForm
    onBack: reopenLoginOptionPopup
  };

  const emailLoginProps = {
    onClose: closeEmailLoginForm, // Corrected to use closeEmailLoginForm
    onLogin: handleLogin
  };

  return (
    <>
      <header className="absolute bg-white z-20 top-0 left-0 box-border w-full h-[90px] flex flex-row items-center justify-between px-0 border-b border-solid border-darkslategray">
        <ul className="m-0 flex flex-row items-center justify-center gap-[56px]">
          <button
            className="cursor-pointer p-0 bg-transparent relative text-17xl leading-[100%] font-bold font-helvetica-neue text-black w-24 h-30 shrink-0"
            id="brand-name"
            onClick={navigateToLandingPage}
          >
            muse
          </button>
          <nav className="m-0 top-100 flex flex-row items-center justify-center gap-[32px]">
            <NavBarButton id="how-it-works">How it works</NavBarButton>
            <NavBarButton id="inspire-me">Inspire Me</NavBarButton>
            <NavBarButton id="search">Search</NavBarButton>
            <NavBarButton id="view-map">View Map</NavBarButton>
          </nav>
        </ul>
        <div className="flex flex-row items-center justify-end">
          {user ? (
            <button
              className="cursor-pointer p-0 bg-transparent w-11 h-12 flex items-center justify-center"
              id="user-profile-btn"
              onClick={handleLogout} // Or whatever action you want to perform on click
            >
              <img
                className="rounded-full w-[62px] h-[62px] object-cover"
                id="profile-img"
                alt={user.name} // Assuming there's a name field in the user object
                src={user.profileImg} // The path to the user's profile image
              />
            </button>
          ) : (
            <button
              className="cursor-pointer p-0 bg-transparent text-base font-medium font-helvetica-neue text-black mr-10"
              id="login"
              onClick={toggleLoginOptionPopup}
            >
              Log in
            </button>
          )}
        </div>
      </header>
      {isLoginOptionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={toggleLoginOptionPopup}
        >
          <LoginOption
            onClose={toggleLoginOptionPopup}
            onLogin={handleLogin}
            onEmailLogin={openEmailLoginForm} // This opens the email login form
          />
        </PortalPopup>
      )}

      {showEmailLogin && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEmailLoginForm}
        >
          <LoginWithEmail onClose={closeEmailLoginForm} onBack={reopenLoginOptionPopup} />
        </PortalPopup>
      )}
    </>
  );
};
export default NavBar;