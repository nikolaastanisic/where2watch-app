import "../movies.jsx";
import "@scss/header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <h1>where2Watch.</h1>
            <div className="slogan">
              the <div className="diff"> right </div> place for your movie
              search.
            </div>
          </div>
          <nav id="nav">
              <NavLink 
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              <NavLink to="/movies" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Movies
              </NavLink>
              <NavLink to="/account" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
               Account
              </NavLink>
              <NavLink to="/about" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
               About
              </NavLink>
          </nav>
          <div className="sign">
            <img src="./icons/account.svg" alt="profile" />
            
              <NavLink to="/signin"className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="sign-button">
               Sign Up
               </div>
              </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
