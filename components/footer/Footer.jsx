"use client"
import Image from "next/image"
import Link from "next/link"
import fontstyle from "../fonts/fonts.module.scss"
import FB from "../../public/icon/fb.png"
import Instagram from "../../public/icon/insta.png"
import Line from "../../public/img/advantages/line.png"

import PhoneInput from "../phoneInput/phoneInput"
import phoneInputStyle from "../phoneInput/phoneInput.module.scss"

import styles from "./footer.module.scss"




const Footer = () => {
    return (
        <>
{/* СПІЛЬНИЙ ДІВ */}

        <div className="md:flex w-screen justify-between md:pr-6">
                 <div className={`flex ${styles.listContainer}`}>
            <ul className="w-[160px] pl-5  mr-14" >
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">ВСІ ТОВАРИ</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">БЕСТСЕЛЕРИ</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">технології веганських пробіотиків та ліпосом</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">преса</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">наші цінності</Link>
                </li>
                <li className="text-start"> 
                    <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">здорова шкіра</Link>
                </li>
            </ul>

            <ul className="pl-5 md:justify-end">
                <li className="text-start">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">мій профіль</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">контакти</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">FAQs</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">обмін і повернення</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">політика конфіденційності</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">оплата і доставка</Link>
                </li>
                <li className="text-start pb-3">
                    <Link className={` ${fontstyle.istokWebTitle}`} href="/">Оптова торгівля</Link>
                </li>
            </ul>
        </div>



        <section className="text-start ml-5 sm:mt-5 md:w-[340px]">
            <span className={`pl-5 ${fontstyle.istokWebTitleFooter} md:pl-0 `}>Давайте станемо друзями</span>
            <div className="flex pt-3 pl-5 md:pl-0">
                <Image
                src={FB}
                alt="fb"
                className="w-3 h-5 "
                />

                <Image
                src={Instagram}
                alt="Instagram"
                className="w-5 h-5 ml-3"
                />
            </div>

        

            <div className="px-5 text-start pt-5 md:pl-0">
                <p className={` ${fontstyle.istokWebTitleFooter}`}>Здорова шкіра чекає</p>
                <span className={fontstyle.istokWebTextFoter}>
                    Отримайте ексклюзивний доступ до спеціальних пропозицій, нового продукту, презентації, інсайдерські поради щодо догляду за шкірою, розіграші та інше!
                </span>
            </div>

            <div className="pb-5">
                <p className="text-start">
                Приєднайтеся до нашого списку розсилки, щоб отримати всі новини першим
                </p>
                <div className="text-start reletive">
                    <input className="w-[233px] py-3 border border-1 border-bgBtnColor text-start pl-3 " type="mail" placeholder="Eлектронна адреса" />
                    <button className={`py-3 pl-5 ${fontstyle.istokWebTitle} underline leading-4 `} type="submit">надіслати</button>
                    <Image
                    src={Line}
                    alt="line"
                    className="w-[85px] h=[1px] abdsolute top-[10px] right-[10px]"
                    />
                </div>
            </div>

            <div className="">
                <p className={`w-[251px] text-start ${fontstyle.istokWebTitle}`}>
                Підпишіться на сповіщення та дізнавайтесь про всі новини на вашому смартфоні
                </p>
            {/* phon number area */}
                <div className="flex w-[350px] pb-30"> 
                    <PhoneInput />
                <button className="border border-1 border-gray-900 rounded-sm px-3 bg-bgBtnColor text-addBgColor" type="submit">підписатись</button>
                </div>
                {/* Agree text with rules */}
                <div className="text-start pt-4">
                    <span>
                    Надсилаючи цю форму та підписуючись на текстові повідомлення, ви погоджуєтеся на отримання оповіщень (наприклад, промо, нагадування про кошик) від glowoasis на наданий номер, включаючи повідомлення, надіслані за допомогою автонабору. Згода не є умовою покупки. Частота повідомлень змінюється. Скасуйте підписку в будь-який час, відповівши STOP або натиснувши кнопку посилання для скасування підписки (якщо є). Політика та умови конфіденційності.
                    </span>

                </div>
                

            </div>
            

        </section>
        </div>
       
        </>
    )

}

export default Footer