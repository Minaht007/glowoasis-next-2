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
import linksdurger from "../../public/json/link.json";

import React from "react";
import { useState } from "react";

import SignUpDT from "../signUp/signUpDt";

export const Header = () => {
  const [links, setLinks] = useState(link);
  const [linksBurger, setLinksBurger] = useState(linksdurger);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // reg State
  const [showSignUp, setShowSignUp] = useState(false);
  const [previousLinks, setPreviousLinks] = useState(links);
  const [buttonText, setButtonText] = useState("мій профіль");
  const [showIcon, setShowIcon] = useState(true);

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
    setShowIcon(!showIcon);
    if (showSignUp) {
      setPreviousLinks(links);
      setButtonText("Мій профіль");
    } else {
      setPreviousLinks([]);
      setButtonText("Back");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="layout relative index-5">
      <div className="bg-[#D0C3BB] h-8 w-full "></div>
      <div className="flex bg-[#fff] relative w-screen h-15">
        <div className="flex">
          <div
            className={` ${styles.headerSearch} relative lg:pt-[14px] ml-[96px]`}
          >
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
          <div>
            <button
              type="button"
              className="visible lg:hidden ml-5 pt-4 pb-4 "
              onClick={toggleMenu}
            >
              <Image src={burger} width={15} height={10} alt="burger" />
            </button>
          </div>

          {/* контейнер з лого */}
          <div
            className={`${styles.headerLogo} sm:ml-16 sm:pt-[10px] sm:pb-[10px] lg:ml-[270px]`}
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
          <div className="flex ml-[148px] lg:ml-[500px] absolute top-[25%] right-[5%]">
            <Image
              className=" hidden sm:hidden md:hidden lg:block lg:mr-3"
              src={regIcon}
              width={19}
              height={21}
              alt="regIcon"
              onClick={handleSignUpClick}
            />
            <Image src={basket} width={19} height={24} alt="basket" />
          </div>
        </div>
      </div>

      {/* Навігація */}

      <div className="flex flex-row lg:align-center lg:justify-center hidden lg:block">
        {links.map((item) => {
          return (
            <div key={item.name}>
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

// const handleOnClick = (event) => {
//   event.preventDefault();
//   const clickedElement = event.currentTarget;
//   const nextElement = clickedElement.nextElementSibling;

//   if (nextElement.style.maxHeight) {
//     nextElement.style.maxHeight = null;
//   } else {
//     const allSubMenus = document.querySelectorAll(`.${styles.subNavLink}`);
//     allSubMenus.forEach((el) => (el.style.maxHeight = null));
//     nextElement.style.maxHeight = nextElement.scrollHeight + "px";
//   }
// };

{
  /* <div className={styles.navLink}>
                    <Link                 
                        className={`pr-4`}
                        href="products"                      
                    >
                        Всі товари
                    </Link>
                    {/* <ul
                        className={`${styles.subNavLink}`}                        
                    >
                        <li className={styles.subNavLinkItems}>Menu-1</li>
                        <li className={styles.subNavLinkItems}>Menu-2</li>
                        <li className={styles.subNavLinkItems}>Menu-3</li>
                        <li className={styles.subNavLinkItems}>Menu-4</li>
                    </ul> */
}
{
  /* </div> */
}

{
  /* <div className={styles.navLink}>
          <Link className={`pr-4`} href="bestsellers" >
            Бестселери
          </Link> */
}
{
  /* <ul className={styles.subNavLink}>
            <li className={styles.subNavLinkItems}>Submenu-1</li>
            <li className={styles.subNavLinkItems}>Submenu-2</li>
            <li className={styles.subNavLinkItems}>Submenu-3</li>
          </ul> */
}
{
  /* </div>
        <Link className={`pr-4 ${styles.navLink}`} href="">
          Категорії товаров
        </Link>
        <Link className={`pr-4 ${styles.navLink}`} href="">
          Типи шкіри
        </Link>
        <Link className={`pr-4 ${styles.navLink}`} href="">
          Набори
        </Link>
        <Link className={`pr-4 ${styles.navLink}`} href="">
          Чисті формули
        </Link>
        <Link className={`pr-4 ${styles.navLink}`} href="">
          Історія бренду
        </Link>  */
}
