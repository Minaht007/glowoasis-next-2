"use client"
import Image from "next/image"
import searchGlass from "../../public/icon/searchGlass.svg"
import Logo from "../../public/img/logo.png"
import regIcon from "../../public/icon/person.svg"
import basket from "../../public/icon/backet.svg"
import burger from "../../public/icon/burger.svg"

import Link from 'next/link';
import styles from "./header.module.scss"

import subMenu from "./subMenu"
import { useState } from "react"

export const  Header =() => {

    const [subMenu, setSubMenu] = useState()

    return (
        <section>
            <div className="bg-[#D0C3BB] h-8 w-full"></div>
             <div className="layout flex bg-[#fff] h-15 justify-between">
               
                    <div className="relative inline-flex">
                        <input type="serch" placeholder="пошук" className="w-[219px] h-[37px] border border-gray-900 text-start pl-9"/>
                        <button className="absolute top-2 left-3">
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
                    <button className="visible  lg:hidden ml-5 pt-4 pb-4">
                            <Image
                            src={burger}
                            width={15}
                            height={10}
                            alt="burger"
                            />
                        </button>
                    </div>

                    {/* контейнер з лого */}
                    <div className="flex ml-auto mr-auto">
                        <Image
                        className="w-[114px] h-5 lg:w-[249px] lg:h-[45px]"
                        src={Logo}                       
                        alt="Logo"
                        />
                    </div>
                     {/* контейнер з іконками */}
                     <div className="flex">
                        <Image
                        className=" hidden sm:hidden md:hidden lg:block lg:mr-3"
                        src={regIcon}
                        width={19}
                        height={21}
                        alt="regIcon"
                         />
                          <Image                          
                        src={basket}
                        width={19}
                        height={24}
                        alt="basket"
                         />
                     </div>
                </div>


         {/* Навігація */}

                <div className={styles.headerNav}>
                        <Link className={`pr-4 ${styles.navLink}`} href="/products">Всі товари</Link>

                        <div className="navLink pr-4">
                            <a href="#">Бестселери</a>
                                <div className={styles.subNav}>
                                     <span>List of links</span>
                                </div>
                        </div>


                        {/* <Link className={`pr-4 ${styles.navLink}`} href="">Бестселери
                            <a  href=""><span className={styles.subNava}> List of links</span></a>
                        </Link> */}


                        <Link className={`pr-4 ${styles.navLink}`} href="">Категорії товаров</Link>
                        <Link className={`pr-4 ${styles.navLink}`} href="">Типи шкіри</Link>
                        <Link className={`pr-4 ${styles.navLink}`} href="">Набори</Link>
                        <Link className={`pr-4 ${styles.navLink}`} href="">Чисті формули</Link>
                        <Link className={`pr-4 ${styles.navLink}`} href="">Історія бренду</Link>
                </div>

        </section>
    )
}