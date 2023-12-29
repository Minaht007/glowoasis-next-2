import Link from "next/link";
import styles from "./burgerMenu.module.scss";
import fontstyles from "../fonts/fonts.module.scss";
import Image from "next/image";
import signicon from "../../public/icon/person.svg";
import SignUp from "../signUp/signUp";
import React, { useState } from "react";

const BurgerMenu = ({ links, isActive }) => {
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

  return (
    <>
      <ul className={`${styles.burgerMenu} ${isActive ? styles.active : ""}`}>
        {isActive &&
          previousLinks.map((item) => (
            <li
              key={item.name}
              className={`${fontstyles.istokWebTitle} py-4 text-textColor`}
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}

        <li className="flex flex-row relative" onClick={handleSignUpClick}>
          {showSignUp ? (
            <p className="absolute top-[-14px] left-5 text-start">
              <strong>{buttonText}</strong>
            </p>
          ) : (
            <button>
              <Image src={signicon} alt="signicon" width={12} height={14} />
              <p className="absolute top-[-14px] left-5 text-start">
                {buttonText}
              </p>
            </button>
          )}
        </li>

        {showSignUp && <SignUp />}
      </ul>
    </>
  );
};

export default BurgerMenu;
