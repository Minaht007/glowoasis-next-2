"use client";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import hide from "../../public/icon/visible.png";

import styles from "./signUp.module.scss";
import fonts from "../fonts/fonts.module.scss";
import React, { useState } from "react";

const SingnUpDT = () => {
  const [visible, setVisible] = useState(false);
  const [cntrVisible, setCntrVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [cntrPassword, setCntrPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sureName, setSureName] = useState("");

  const handleVisible = () => {
    setVisible(!visible);
  };
  const cntrHandleVisible = () => {
    setCntrVisible(!cntrVisible);
  };
  return (
    <>
      <div className={styles.signUpWindow}>
        <Image
          src={logo}
          alt="logo"
          width={177}
          height={33}
          className="py-[40px] mx-auto"
        />
        <h1 className={`${fonts.sugnUpTitle} ${styles.signUpTitle}`}>
          Реєстрація
        </h1>
        <p className={`${fonts.istokWebTitleFooter} ${styles.signUpTitleP}`}>
          Введіть свої дані
        </p>
        <form className={styles.signUpForm} action="">
          <label
            className={`flex flex-col justify-around mx-auto  ${fonts.istokWebTitleFooter}`}
            htmlFor="name"
          >
            Прізвище та Ім’я
            <div className="flex flex-row gap-[20px] pt-[12px]">
              <input
                className={`w-[370px] h-[56px] border border-gray-900 rounded-md text-start p-[12px]`}
                type="text"
                placeholder="Ім’я"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={`w-[370px] h-[56px] border border-gray-900 rounded-md text-start p-[12px]`}
                type="text"
                placeholder="Прізвище"
                id="name"
                onChange={(e) => setSureName(e.target.value)}
              />
            </div>
          </label>

          <label
            htmlFor="email"
            className={`${fonts.istokWebTitleFooter} ${styles.emailLable}`}
          >
            Електронна адреса
            <div className="pt-[8px]">
              <input
                className={`${styles.emailArea} border border-gray-900 rounded-md text-start p-[12px]`}
                type="text"
                placeholder="prostotext@gmail.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>

          <label
            htmlFor=""
            className={`${fonts.istokWebTitleFooter} ${styles.emailLable}`}
          >
            Пароль
            <div className="pt-[8px] relative">
              <input
                className={`${styles.emailArea} border border-gray-900 rounded-md text-start p-[12px]`}
                value={password}
                type={visible ? "text" : "password"}
                placeholder="password"
                id=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <Image
                src={hide}
                alt="hide"
                width={24}
                height={24}
                className="absolute top-[35%] right-[20px]"
                onClick={handleVisible}
              />
            </div>
          </label>

          <label
            htmlFor=""
            className={`${fonts.istokWebTitleFooter} ${styles.emailLable}`}
          >
            Повторіть пароль
            <div className="pt-[8px] relative">
              <input
                className={`${styles.emailArea} border border-gray-900 rounded-md text-start p-[12px]`}
                value={cntrPassword}
                type={cntrVisible ? "text" : "password"}
                placeholder="repeat password"
                id=""
                onChange={(e) => setCntrPassword(e.target.value)}
              />
              <Image
                src={hide}
                alt="hide"
                width={24}
                height={24}
                className="absolute top-[35%] right-[20px]"
                onClick={cntrHandleVisible}
              />
            </div>
          </label>

          <button className={`${fonts.signUpBtnDt} ${styles.signUpBtnDt}`}>
            зареєструватись
          </button>
        </form>
      </div>
    </>
  );
};
export default SingnUpDT;
