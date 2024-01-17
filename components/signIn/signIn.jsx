
import Image from "next/image"
import logo from "../../public/img/logo.png"
import hide from "../../public/icon/visible.png"
 import fonts from "../fonts/fonts.module.scss"

const signIn = () => {
    return (
        <section >
            <div className="flex flex-row item-center justify-center">
                <Image
                    src={logo}
                    alt="logo"
                    width={177}
                    height={32}
                    className="text-center"
                />
            </div>

            <div>
                <h1 className={`${fonts.sugnUpTitle} text-start mt-10 mb-3`}>Вхід</h1>
                <p className={`${fonts.SignUpGoogleBtnDT} text-start`}>Введіть свою електронну адресу та пароль</p>
            </div>

            <form action="">
                <label className="flex flex-col text-start " htmlFor="mail">Електронна адреса
                    <input className=" w-[756px] border border-1 border-gray-900 rounded-md py-4 pl-3 text-start" type="mail" placeholder="prostotext@gmail.com" />
                </label>

                <label className="flex flex-col text-start relative mt-3" htmlFor="">Пароль
                    <input className=" w-[756px] border border-1 border-gray-900 rounded-md py-4 pl-3 text-start" type="password" placeholder="********************" />
                    <Image 
                    src={hide}
                    alt="hide"
                    width={24}
                    height={24}
                    className="absolute top-[50%] right-[15px]"
                    />
                </label>

                <p className={`${fonts.SignUpGoogleBtnDT} mt-3 text-start`}>Забули пароль?</p>

                <button className={`${fonts.signUpBtnDt} px-[350px} py-[12px] bg-[#45372E] w-[756px] rounded-md mt-7` }>увійти</button>
            </form>
        </section>
    )
}

export default signIn