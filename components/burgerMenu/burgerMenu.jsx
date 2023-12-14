"use client";
import Link from "next/link";
import styles from "./burgerMenu.module.scss"
import fontstyles from "../fonts/fonts.module.scss"



const BurgerMenu = ({ links, isActive }) => {     

  return (
    <ul className={`${styles.burgerMenu} ${isActive ? styles.active : ''}`}>
        {isActive && links.map((item) => (
        <li key={item.name} className={`${fontstyles.istokWebTitle } py-4 text-textColor`}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
      <li>
        <span>profile</span>
      </li>
    </ul>
  );  
};
export default BurgerMenu;


