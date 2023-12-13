"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./burgerMenu.module.scss"



const BurgerMenu = ({ links, isActive }) => {  
   
console.log(isActive)
  return (
    <ul className={`${styles.burgerMenu} ${isActive ? styles.active : ''}`}>
        {isActive && links.map((item) => (
        <li key={item.name}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );  
};
export default BurgerMenu;

// return (
//     <ul>
//       {links.map((item) => {
//         <li key={item.name}>
//           <Link href={item.link}>{item.name}</Link>
//         </li>
//       })}
//     </ul>
//   );
