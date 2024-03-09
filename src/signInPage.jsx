import Password from "@components/password.jsx";
import "@scss/SignInPage.scss";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

export default function SignInPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    name: ""
  });

  const getPassword = (pass) => {
   setData({...data, password: pass})
  }

  const registerUser = async (e) => { 
    const { email, password, repeatPassword, username, name } = data;
    try {
      const { data } = await axios.post("/signin", { email, password, repeatPassword, username, name });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Sign up successful. Welcome!");
        navigate("/login");
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
          <h1>Sign up now</h1>
          <div className="form">
          <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required=""
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            ></input>
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required=""
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            ></input>
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
            <label htmlFor="repeatPassword">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="repeatPassword"
              required
              value={data.repeatPassword}
              onChange={(e) => setData({ ...data, repeatPassword: e.target.value })}
            ></input>
          </div>
          <div className="buttons">
            <button className="signup" onClick={registerUser}>
              Sign Up
            </button>
            <div className="signInSecond">
              <Link className="here" to={"/login"}>
                Already have an account? Sign in here.
              </Link>
            </div>
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
