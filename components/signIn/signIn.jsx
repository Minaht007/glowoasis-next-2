"use client";
import Image from "next/image";
import logo from "../../public/img/logo.png";

import hide from "../../public/icon/visible.png";
import google from "../../public/icon/google.png";
import fb from "../../public/icon/fb.png";

import fonts from "../fonts/fonts.module.scss";
import styles from "./signIn.module.scss";

import React from "react";
import { useState, useContext } from "react";

import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



import { UserContext } from "../context/contextWrapper";



const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  const {updateUser} = useContext(UserContext)

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: user.displayName });
        console.log("User logged in:", user.uid);
		
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Log in failed:", errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className={styles.signInContainer}>
        <h1 className={`${fonts.sugnUpTitle} text-start mt-10 mb-3`}>Вхід</h1>
        <p className={`${fonts.SignUpGoogleBtnDT} text-start`}>
          Введіть свою електронну адресу та пароль
        </p>
      </div>

      <form action="" className="mx-auto">
        <label className="flex flex-col text-start ml-[40px]" htmlFor="mail">
          Електронна адреса
          <input
            className=" w-[756px] border border-1 border-gray-900 rounded-md py-4 pl-3 text-start"
            type="mail"
            value={email}
            placeholder="prostotext@gmail.com"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </label>

        <label className={styles.emailInput} htmlFor="password">
          Пароль
          <input
            id="password"
            className="w-[756px] border border-1 border-gray-900 rounded-md py-4 pl-3 text-start"
            type={isVisible ? "text" : "password"}
            placeholder="********************"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <Image
            src={hide}
            alt="hide"
            width={24}
            height={24}
            className="absolute top-[50%] right-[90px] cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          />
        </label>

        <div className="mr-[40px]">
          <p className={`${fonts.SignUpGoogleBtnDT} mt-3 mr-[40px] text-start`}>
            Забули пароль?
          </p>
        </div>

        <button
          className={`${fonts.signUpBtnDt} px-[350px} py-[12px] bg-[#45372E] w-[756px] rounded-md mt-7 mb-[40px]`}
        >
          увійти
        </button>

        <p>Або увійдіть за допомогою соцмереж</p>

        <div className={`${styles.btmContainer}`}>
          <button className="flex flex-row h-[44px] border-[1px] border-[#45372E] mr-[20px] px-[20px] pt-[8px]">
            <Image src={google} alt="google" width={24} height={24} /><span className="flex align-center">Google</span> 
          </button>
          <button className="flex flex-row border-[1px] border-[#45372E]">
            <Image src={fb} alt="fb" width={14} height={24} />
            Facebook
          </button>
        </div>
      </form>   
    </>
  );
};

export default SignIn;
