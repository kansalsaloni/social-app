import React, { useState } from "react";
import '../Style/Header.css'
import '../Style/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function Header({ isAuthenticated,toggleRegisterPopup,isRegisterPopupOpen,isLoginPopupOpen,toggleLoginPopup, userName, avatarUrl }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const capitalizeUserName = (name) => {
        return name
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      };

  return (
    <>
    <header className="header">     
      <div className="header-right">
        {!isAuthenticated ? (
          <>
            <button className="btn signup-btn" onClick={()=>toggleRegisterPopup()} disabled={isRegisterPopupOpen}  style={{ pointerEvents: isRegisterPopupOpen ? 'none' : 'auto' }}>Register Now</button>
            <button className="btn signin-btn" onClick={()=>toggleLoginPopup()} disabled={isLoginPopupOpen}  style={{ pointerEvents: isLoginPopupOpen ? 'none' : 'auto' }}>Sign In</button>
            <div className="mobile-hamburger" onClick={toggleMobileMenu}  disabled={isMobileMenuOpen}  style={{ pointerEvents: isMobileMenuOpen ? 'none' : 'auto' }}>
              &#9776;
            </div>
            {isMobileMenuOpen && (
              <div className="mobile-dropdown-menu">
                <div className="close-mobile-dropdown-menu">
                <p  onClick={toggleMobileMenu}>X</p>
                </div>
                <div className="mobile-dropdown-menu-buttons">
            <button className="btn" onClick={()=>toggleLoginPopup()} disabled={isLoginPopupOpen}  style={{ pointerEvents: isLoginPopupOpen ? 'none' : 'auto' }}>Login</button>
              <button className="btn" onClick={()=>toggleRegisterPopup()} disabled={isRegisterPopupOpen}  style={{ pointerEvents: isLoginPopupOpen ? 'none' : 'auto' }}>Register</button>
              </div>
              
              </div>
            )}
          </>
        ) : (
          <>
      
              <div className="auth-header-user-info">
            <button className="btn bookmark-btn">
            <FontAwesomeIcon icon={faBookmark} className="icon" />
                Bookmarks
                </button>
            <button className="btn add-story-btn">Add Story</button>
            <div className="user-info">
              <img className="avatar" src={avatarUrl} alt="User Avatar" />
            </div>          
            </div>
          
             <div className="hamburger" onClick={toggleMenu}>
              &#9776;
            </div>

            {isMenuOpen   && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-user-info">
                
                <div className="user-info">
              <img className="avatar" src={avatarUrl} alt="User Avatar" />
            </div> 
              
                <p className="username">{capitalizeUserName(userName)}</p>
               <p  className='mobile-menu-close-button' onClick={toggleMenu}>X</p>
                </div>
                <button className="btn add-story-btns">Add Story</button>
                <button className="btn your-story-btns">Your Story</button>
                <button className="btn bookmark-btns">
            <FontAwesomeIcon icon={faBookmark} className="icon" />
                Bookmarks
                </button>

                <button className="btn logout-btn">Logout</button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
        </>
  )
}

export default Header
