import "../movies.jsx";
import "@scss/header.scss";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function validateAndRedirect(path) {
    setUser(null);
    navigate(path);
  }

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
            <NavLink
              to="/movies"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Account
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </nav>
          <div className="sign">
            <img src="./icons/account.svg" alt="profile" />
            {!user && (
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  validateAndRedirect("/signin");
                }}
                to="/signin"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="sign-button">Sign Up</div>
              </NavLink>
            )}

            {user && (
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  validateAndRedirect("/logout");
                }}
                to="/logout"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <div className="sign-button">Logout</div>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
