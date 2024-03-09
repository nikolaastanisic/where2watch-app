import Password from "@components/password.jsx";
import "@scss/SignInPage.scss";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage2() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const getPassword = (pass) => {
   setData({...data, password: pass})
  }

  const registerUser = async (e) => { 
    const { email, password} = data;
    try {
      const { data } = await axios.post("/login", { email, password});
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Log in successful. Welcome!");
        navigate("/account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="idk">
        <img src="./icons/signup.svg" alt="profile" />
        <div className="about-text">
          <hr />
          <h1>Log in</h1>
          <div className="form">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required="@"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            ></input>
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <div className="input">
              <Password getPassword={getPassword}/>
            </div>
            
          </div>
          <div className="buttons">
            <button className="signup" onClick={registerUser}>
              Log in
            </button>
          </div>
          <Link className="go-back" to={".."}>
            Go back to home.
          </Link>
          <hr />
        </div>
        <div className="account-logo">
          <p className="pow">powered by :</p>
          <h1>where2Watch.</h1>
          <div className="slogan">
            the <div className="diff"> right </div> place for your movie search.
          </div>
        </div>
      </div>
    </>
  );
}
