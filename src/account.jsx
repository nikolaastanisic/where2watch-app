import React, { useContext } from "react";
import Header from "@components/header.jsx";
import "@scss/account.scss";
import { UserContext } from "./context/userContext";
import { NavLink } from "react-router-dom";

const Account = () => {
 const { user, logout } = useContext(UserContext);

 return (
    <>
      <Header key={self.crypto.randomUUID()} />
      <div className="account-main">
        <img src="./icons/account.svg" alt="profile" />
        <h1>Your Account</h1>
        <div className="info">
          <div>Username :{!!user && <h2>{user.username}</h2>}</div>
          <div>Name :{!!user && <h2>{user.name}</h2>}</div>
          <div>Email :{!!user && <h2>{user.email}</h2>}</div>
        </div>
        <hr />
        </div>
      <div className="account-logo">
        <p className="pow">powered by :</p>
        <h1>where2Watch.</h1>
        <div className="slogan">
          the <div className="diff"> right </div> place for your movie search.
        </div>
      </div>
    </>
 );
};

export default Account;
