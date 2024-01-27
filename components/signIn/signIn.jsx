"use client"
import Image from "next/image"
import logo from "../../public/img/logo.png"
import hide from "../../public/icon/visible.png"
 import fonts from "../fonts/fonts.module.scss"
 import styles from  "./signIn.module.scss"

 import React from "react"
 import { useState } from "react"

const SignIn = () => {
const [isShowSignIn, setIsShowSignIn] = useState(false)


    return (
			<>
				{/* {!isShowSignIn &&
        <section className={`${styles.overlay}`} >

        <div className={`${styles.signInWindow}`}> */}
				{/* <div className="flex flex-row item-center justify-center">
            <Image
                src={logo}
                alt="logo"
                width={177}
                height={32}
                className="text-center"
            />
        </div> */}

				<div className={styles.signInContainer}>
					<h1 className={`${fonts.sugnUpTitle} text-start mt-10 mb-3`}>Вхід</h1>
					<p className={`${fonts.SignUpGoogleBtnDT} text-start`}>
						Введіть свою електронну адресу та пароль
					</p>
				</div>

				<form action="" className="mx-auto">
					<label className="flex flex-col text-start " htmlFor="mail">
						Електронна адреса
						<input
							className=" w-[756px] border border-1 border-gray-900 rounded-md py-4 pl-3 text-start"
							type="mail"
							placeholder="prostotext@gmail.com"
						/>
					</label>

					<label className={styles.emailInput} htmlFor="">
						Пароль
						<input
							className=" w-[756px] border border-1 border-gray-900 rounded-md py-4 pl-3 text-start" 
							type="password"
							placeholder="********************"
						/>
						<Image
							src={hide}
							alt="hide"
							width={24}
							height={24}
							className="absolute top-[50%] right-[90px]"
						/>
					</label>

					<p className={`${fonts.SignUpGoogleBtnDT} mt-3 text-start`}>Забули пароль?</p>

					<button
						className={`${fonts.signUpBtnDt} px-[350px} py-[12px] bg-[#45372E] w-[756px] rounded-md mt-7 mb-[40px]`}
					>
						увійти
					</button>
				</form>
				{/* </div>
    </section>
        } */}
			</>
		);
}

export default SignIn