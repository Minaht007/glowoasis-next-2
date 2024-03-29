"use client";

import Image from "next/image";
import searchGlass from "../../public/icon/searchGlass.svg";
import Logo from "../../public/img/logo.png";
import regIcon from "../../public/icon/person.svg";
import basket from "../../public/icon/backet.svg";
import burger from "../../public/icon/burger.svg";

import Link from "next/link";
import styles from "./header.module.scss";

import BurgerMenu from "../burgerMenu/burgerMenu";

import allProdact from "../../app/products/page";
import link from "../../public/json/link.json";
import linksburger from "../../public/json/link.json";

import React, { useState, useContext } from "react";

import SignUpDT from "../signUp/signUpDt";

import {UserContext} from "../context/contextWrapper"



export const Header = () => {
  const [links, setLinks] = useState(link);
  const [linksBurger, setLinksBurger] = useState(linksburger);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {displayName, user} = useContext(UserContext)

  // reg State
  const [showSignUp, setShowSignUp] = useState(false);
  const [previousLinks, setPreviousLinks] = useState(links);
  const [buttonText, setButtonText] = useState("мій профіль");
  const [showIcon, setShowIcon] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
    setShowIcon(!showIcon);
    if (showSignUp) {
      setIsModalOpen(!isModalOpen);
      setPreviousLinks(links);
      setButtonText("Мій профіль");
    } else {
      setPreviousLinks([]);
      setButtonText("Back");
    }
    if (user) {
      login(displayName);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className=" relative index-5">
      <div className="bg-[#D0C3BB] h-8 w-full "></div>
      <div className="flex bg-[#fff] relative w-screen h-15 layout">
        <div className="flex w-screen flex-row justify-between ">
          <div className={` ${styles.headerSearch} relative lg:pt-[14px] `}>
            <input
              type="serch"
              placeholder="пошук"
              className="pl-10 w-[219px] h-[37px] border border-gray-900 text-start"
            />
            <button className="absolute top-6 left-3">
              <Image
                src={searchGlass}
                width={20}
                height={20}
                alt="searchGlass"
              />
            </button>
          </div>

          {/* контейнер з бургер */}
          <div className="visible lg:hidden ml-5 pt-4 pb-4 ">
            <button type="button" onClick={toggleMenu}>
              <Image src={burger} width={15} height={10} alt="burger" />
            </button>
          </div>

          {/* контейнер з лого */}
          <div
            className={`flex ml-auto mr-auto  `}
            //   sm:ml-16 sm:pt-[10px] sm:pb-[10px] lg:ml-[270px]
          >
            <Link href="MainPage">
              <Image
                className="w-[114px] h-5 lg:w-[249px] lg:h-[45px] "
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>
          {/* контейнер з іконками */}
          <div className="flex ml-[148px]">
            {user && user.displayName ? (
              <p>{user.displayName}</p>
            ) : (
              <div onClick={handleSignUpClick}>
                <Image
                  className="hidden lg:block lg:mr-3 xl:visible"
                  src={regIcon}
                  width={19}
                  height={21}
                  alt="regIcon"
                />
              </div>
            )}
            <div>
              <Image src={basket} width={19} height={24} alt="basket" />
            </div>
          </div>
        </div>
      </div>

      {/* Навігація */}

      <div className="flex flex-row lg:items-center lg:justify-center hidden lg:flex layout">
        {links.map((item) => {
          return (
            <div key={item.name} className="flex flex-row">
              <Link className={`px-4 ${styles.navLink}`} href={item.link}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
      <BurgerMenu
        isActive={isMenuOpen}
        setActive={setIsMenuOpen}
        links={linksBurger}
      />
      {showSignUp && <SignUpDT />}
    </section>
  );
};
