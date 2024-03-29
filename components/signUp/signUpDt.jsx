"use client"
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import SignIn from "../signIn/signIn";
import hide from "../../public/icon/visible.png";
import logo from "../../public/img/logo.png";
import googleIcon from "../../public/icon/google.png";
import fbIcon from "../../public/icon/fb.png";
import styles from "./signUp.module.scss";
import fonts from "../fonts/fonts.module.scss";


const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [cntrVisible, setCntrVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [cntrPassword, setCntrPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sureName, setSureName] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  const modalRef = useRef(null);

//  const router = useRouter()

const registerUser = async (email, password, name, sureName) => {
    try {
     
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );       
        const userId = userCredential.user.uid;        
        const userDataCollection = collection(db, "users");     
        await addDoc(userDataCollection, {
            userId: userId,
            displayName: name,      
			sureName: sureName,      
        });        
        console.log("Registration successful");
        console.log(userDataCollection); 
    } catch (error) {
        console.error("Error:", error.message);
    }
};

  const handleVisible = () => {
    setVisible(!visible);
  };

  const cntrHandleVisible = () => {
    setCntrVisible(!cntrVisible);
  };

  const handleClickOutside = (event) => {
    event.stopPropagation();
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowSignUp(!showSignUp);
    }
  };

  const handleEsc = (event) => {
    if (event.keyCode === 27) {
      setShowSignUp(!showSignUp);
    }
  };

  useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEsc);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEsc);
		};
	}, []);

  const handlerBtnClick = async (name, sureName) => {
    const docRef = doc(db, "tasks", "task1");
    const docSnap = await getDoc(docRef);
    await setDoc(doc(db, "tasks", "task1"), {
      task1: {
        name: { name },
        time: "12:00",
      },
    });
  };
  
  

  return (
		<>
			{!showSignUp && (
				<div className={`${styles.overlay}`} onClick={(e) => handleClickOutside(e)}>
					<div className={styles.signUpWindow} ref={modalRef}>
						<div className="mt-[40px]">
							<Image src={logo} alt="logo" width={177} height={33} className=" mx-auto" />
						</div>

						{isSignIn ? (
							<div>
								<SignIn />
							</div>
						) : (
							<div>
								<h1 className={`${fonts.sugnUpTitle} ${styles.signUpTitle}`}>Реєстрація</h1>
								<p className={`${fonts.istokWebTitleFooter} ${styles.signUpTitleP}`}>
									Введіть свої дані
								</p>
								<form
									className={styles.signUpForm}
									action=""
									onSubmit={(e) => {
										e.preventDefault();
										registerUser(email, password, name, sureName);
									}}
									onClick={handlerBtnClick}
								>
									<label
										className={`flex flex-col justify-around mx-auto  ${fonts.istokWebTitleFooter}`}
										htmlFor=""
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
												id="sureName"
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

									<label htmlFor="" className={`${fonts.istokWebTitleFooter} ${styles.emailLable}`}>
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

									<label htmlFor="" className={`${fonts.istokWebTitleFooter} ${styles.emailLable}`}>
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

									<button
										className={`${fonts.signUpBtnDt} ${styles.signUpBtnDt}`}
										onClick={handlerBtnClick}
									>
										зареєструватись
									</button>

									<p className={`${fonts.istokWebTextFoter}`}>
										Або зареєструйтесь за допомогою соцмереж
									</p>
									<div className="flex flex-row mt-[16px] mb-[40px]">
										<button
											className={`${styles.signUpGoogleBtn} ${fonts.SignUpGoogleBtnDT} mr-[28px] flex flex-row relative`}
										>
											<Image
												src={googleIcon}
												alt="googleIcon"
												width={24}
												height={24}
												className="mr-[8px]"
											/>
											<span className="flex align-center">Google</span>
										</button>
										<button
											className={`${styles.signUpGoogleBtn} ${fonts.SignUpGoogleBtnDT} flex flex-row `}
										>
											<Image
												src={fbIcon}
												alt="fbIcon"
												width={14}
												height={24}
												className="mr-[8px]"
											/>
											<span className="flex align-center">Facebook</span>
										</button>
									</div>						
								</form>
							</div>
						)}
						<div >
							<p className={`pb-[6px] ${fonts.SignUpGoogleBtnDT}`}>Уже маєте акаунт?</p>
							<button
								type="button"
								className={`pb-[108px] ${fonts.SignUpGoogleBtnDT} `}
								onClick={() => setIsSignIn(!isSignIn)}
							>
								<span className={`${styles.singUpLink} text-`}>
									{isSignIn ? "Зареєструватись" : "Увійти"}
								</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SignUp;
