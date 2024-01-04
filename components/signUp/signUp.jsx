"use client";
import React, { useState } from "react";
import Image from "next/image";
import googleicon from "../../public/icon/google.png";
import fb from "../../public/icon/fb.png";
import visible from "../../public/icon/visible.png";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
  const [possibleVisible, setPossibleVisible] = useState(false);
  const [possibleVisibleRepite, setPossibleVisibleRepite] = useState(false);
  const [name, setName] = useState("");
  const [sureName, setSureName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contrPassword, setContrPasswort] = useState("");

  const [error, setError] = useState("");

  const handleVisible = () => {
    setPossibleVisible(!possibleVisible);
  };
  const handleVisibleRepite = () => {
    setPossibleVisibleRepite(!possibleVisibleRepite);
  };

  const register = (e) => {
    e.preventDefault();
    if (contrPassword !== password) {
      setError("Password didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setName("");
        setSureName("");
        setEmail("");
        setPassword("");
        setContrPasswort("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="object-contain">
        <div>
          <p>
            <strong>Реєстрація</strong>
          </p>
          <p>Введіть свої дані</p>
        </div>

        <form
          className="flex flex-col align-center justify-center"
          onSubmit={register}
        >
          <div className="flex flex-col align-center justify-center py-2">
            <label className="text-start" htmlFor="">
              Прізвище
            </label>
            <input
              className="border border-2 border-gray-900 rounded-md w-[350px] text-start pl-3 py-3"
              value={sureName}
              onChange={(e) => setSureName(e.target.value)}
              type="text"
              placeholder="Прізвище"
            />
          </div>

          <div className="flex flex-col ">
            <label className="text-start" htmlFor="">
              Ім’я
            </label>
            <input
              className="border border-2 border-gray-900 rounded-md w-[350px] text-start pl-3 py-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Ім’я"
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="text-start" htmlFor="">
              Електронна адреса
            </label>
            <input
              className="border border-2 border-gray-900 rounded-md w-[350px] text-start pl-3 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="mail"
              placeholder="prostotext@gmail.com"
            />
          </div>

          <div className="flex flex-col ">
            <label className="flex flex-col text-start relative" htmlFor="">
              Пароль
              <input
                className="border border-2 border-gray-900 rounded-md w-[350px] text-start pl-3 py-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={possibleVisible ? "text" : "password"}
                placeholder="Пароль"
              />
              <Image
                src={visible}
                alt="visible"
                width={20}
                height={20}
                className="absolute top-[40px] right-[5%]"
                onClick={handleVisible}
              />
            </label>
          </div>

          <div className="flex flex-col pb-5 py-2">
            <label className="flex flex-col text-start relative" htmlFor="">
              Повторіть пароль
              <input
                className="border border-2 border-gray-900 rounded-md w-[350px] text-start pl-3 py-3"
                value={contrPassword}
                onChange={(e) => setContrPasswort(e.target.value)}
                type={possibleVisibleRepite ? "text" : "password"}
                placeholder="Повторіть пароль"
              />
              <Image
                src={visible}
                alt="visible"
                width={20}
                height={20}
                className="absolute top-[40px] right-[5%]"
                onClick={handleVisibleRepite}
              />
            </label>
          </div>

          <div>
            <button
              className="border border-2 border-gray-900 rounded-md w-[350px] py-3 bg-[#45372E] text-[#fff]"
              type="submit"
            >
              зареєструватись
            </button>
          </div>

          <li className="py-5">
            <p>Або зареєструйтесь за допомогою соцмереж</p>
          </li>

          <div className="flex flex-row align-center justify-center">
            <button className="flex flex-row border border-gray-900 rounded-md px-6 py-3 mr-[28px]">
              <Image
                src={googleicon}
                alt="googleicon"
                width={20}
                height={20}
                className="mr-2"
              />
              Google
            </button>
            <button className="flex flex-row border border-gray-900 rounded-md px-6 py-3 ">
              <Image
                src={fb}
                alt="fb"
                width={10}
                height={10}
                className="mr-2"
              />
              Facebook
            </button>
          </div>

          <div className="pt-5">
            <p>Уже маєте акаунт?</p>
            <button className="underline" type="button">
              Увійти
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
