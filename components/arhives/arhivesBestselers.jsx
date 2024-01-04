// "use client";

// import Image from "next/image";
// import searchGlass from "../../public/icon/searchGlass.svg";
// import Logo from "../../public/img/logo.png";
// import regIcon from "../../public/icon/person.svg";
// import basket from "../../public/icon/backet.svg";
// import burger from "../../public/icon/burger.svg";

// import Link from "next/link";
// import styles from "./header.module.scss";

// import BurgerMenu from "../burgerMenu/burgerMenu";

// import allProdact from "../../app/products/page"
// import link from "../../public/json/link.json"

// export const Header = () => {

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

//   return (
//     <section className="layout relative index-5">
//       <div className="bg-[#D0C3BB] h-8 w-full "></div>
//       <div className="flex bg-[#fff] relative w-screen h-15">
//         <div className="flex">
//           <div
//             className={` ${styles.headerSearch} relative lg:pt-[14px] ml-[96px]`}
//           >
//             <input
//               type="serch"
//               placeholder="пошук"
//               className="pl-10 w-[219px] h-[37px] border border-gray-900 text-start"
//             />
//             <button className="absolute top-6 left-3">
//               <Image
//                 src={searchGlass}
//                 width={20}
//                 height={20}
//                 alt="searchGlass"
//               />
//             </button>
//           </div>

{
  /* контейнер з бургер */
}
//   <div className={styles.headerBurgerMenu}>
//     <button  className="visible  lg:hidden ml-5 pt-4 pb-4">
//       <Image onClick={BurgerMenu.tonglMenu} src={burger} width={15} height={10} alt="burger" />
//     </button>
//     <Link className={`pr-4 `} href="products">Всі товари</Link>
//   </div>

{
  /* контейнер з лого */
}
//   <div
//     className={`${styles.headerLogo} sm:ml-16 sm:pt-[10px] sm:pb-[10px] lg:ml-[270px]`}
//   >
//     <Link href="MainPage">
//     <Image
//       className="w-[114px] h-5 lg:w-[249px] lg:h-[45px] "
//       src={Logo}
//       alt="Logo"
//     />
//     </Link>

//   </div>
{
  /* контейнер з іконками */
}
//       <div className="flex ml-[148px] lg:ml-[500px] absolute top-[25%] right-[5%]">
//         <Image
//           className=" hidden sm:hidden md:hidden lg:block lg:mr-3"
//           src={regIcon}
//           width={19}
//           height={21}
//           alt="regIcon"
//         />
//         <Image src={basket} width={19} height={24} alt="basket" />
//       </div>
//     </div>
//   </div>

{
  /* Навігація */
}

//   <div className={`${styles.headerNav} ${isMenuOpen ? styles.open : ""}`}>

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
//       </div>
//     </section>
//   );
// };

// Для реєстрації
// export const authSignUpUser =
//   ({ login, email, password, avatar }) =>
//   async (dispatch) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);

//       const avatarUri = await uploadImage(avatar, "avatar/");

//       const userCurrent = auth.currentUser;
//       await updateProfile(userCurrent, {
//         displayName: login,
//         photoURL: avatarUri,
//       });

//       const updateUserSuccess = auth.currentUser;

//       dispatch(
//         updateUserProfile({
//           id: updateUserSuccess.uid,
//           login: updateUserSuccess.displayName,
//           avatar: updateUserSuccess.photoURL,
//           email: updateUserSuccess.email,
//         })
//       );
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
