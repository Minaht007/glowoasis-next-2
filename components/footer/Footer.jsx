"use client";
import Image from "next/image";
import Link from "next/link";
import fontstyle from "../fonts/fonts.module.scss";
import FB from "../../public/icon/fb.png";
import Instagram from "../../public/icon/insta.png";
import Line from "../../public/img/advantages/line.png";

import PhoneInput from "../phoneInput/phoneInput";
import phoneInputStyle from "../phoneInput/phoneInput.module.scss";



const Footer = () => {
  return (
    <>
      <div className="layout w-[1271px] h-[640px] justify-center grid grid-cols-4 gap-12 pt-[67px]">
        <div>
        <ul className="">
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              ВСІ ТОВАРИ
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">
              БЕСТСЕЛЕРИ
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">
              технології веганських пробіотиків та ліпосом
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">
              преса
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">
              наші цінності
            </Link>
          </li>
          <li className="text-start">
            <Link className={`text-start ${fontstyle.istokWebTitle}`} href="/">
              здорова шкіра
            </Link>
          </li>
        </ul>
        </div>

        <div>
        <ul className="sm:top-5 right-2 md:w-[320px] md:top-[260px] md:left-5 lg:top-5 lg:left-[22%] lg:w-[280px] ">
          <li className="text-start">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              мій профіль
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/contact-us">
              контакти
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              FAQs
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              обмін і повернення
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              політика конфіденційності
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              оплата і доставка
            </Link>
          </li>
          <li className="text-start pb-3">
            <Link className={` ${fontstyle.istokWebTitle}`} href="/">
              Оптова торгівля
            </Link>
          </li>
        </ul>
        </div>

        <div className="text-start ">
        <span
          className={`${fontstyle.istokWebTitleFooter} top-[300px] left-5 md:w-[350px] md:top-5 md:left-[56%] lg:left-[50%] `}
        >
          Давайте станемо друзями
        </span>
        <div className="flex mt-[10px]">
        <Image
          src={FB}
          alt="fb"
          className="w-3 h-5 top-[326px] left-5 md:top-11 md:left-[56%] lg:left-[50%]"
        />

        <Image
          src={Instagram}
          alt="Instagram"
          className="w-5 h-5 ml-3 top-[326px] left-[52px] md:top-11 md:left-[58%] lg:left-[52%]"
        />
        </div>
        </div>

         <div className="w-[500px]">
        <div className="text-start">
          <p className={` ${fontstyle.istokWebTitleFooter}`}>
            Здорова шкіра чекає
          </p>
          <span className={`${fontstyle.istokWebTextFoter} md:text-justify`}>
            Отримайте ексклюзивний доступ до спеціальних пропозицій, нового
            продукту, презентації, інсайдерські поради щодо догляду за шкірою,
            розіграші та інше!
          </span>
        </div>

        <div className="">
          <p className={`text-start pb-2 ${fontstyle.istokWebTitleFooter}`}>
            Приєднайтеся до нашого списку розсилки, щоб отримати всі новини
            першим
          </p>
          <div className="text-start">
            <input
              className="w-[233px] py-3 border border-1 border-bgBtnColor text-start pl-3 "
              type="mail"
              placeholder="Eлектронна адреса"
            />
            <button
              className={`py-3 pl-5 ${fontstyle.istokWebTitle} underline leading-4 `}
              type="submit"
            >
              надіслати
            </button>
            {/* <Image
              src={Line}
              alt="line"
              className="w-[85px] h=[1px] abdsolute top-[10px] right-[10px]"
            /> */}
          </div>
        </div>

        <p
          className={` top-[590px] left-5 right-5 sm:w-[360px] sm:pr-5 text-start md:top-[310px] md:left-[56%] lg:top-[260px] lg:left-[70%] ${fontstyle.istokWebTitleFooter}`}
        >
          Підпишіться на сповіщення та дізнавайтесь про всі новини на вашому
          смартфоні
        </p>
        {/* phon number area */}
        <div className="flex pb-30">
          <PhoneInput />
          <button
            className="border border-1 border-gray-900 rounded-sm px-3 bg-bgBtnColor text-addBgColor"
            type="submit"
          >
            підписатись
          </button>
        </div>
        {/* Agree text with rules */}
        <div className="text-start pt-4 md:text-justify">
          <span>
            Надсилаючи цю форму та підписуючись на текстові повідомлення, ви
            погоджуєтеся на отримання оповіщень (наприклад, промо, нагадування
            про кошик) від glowoasis на наданий номер, включаючи повідомлення,
            надіслані за допомогою автонабору. Згода не є умовою покупки.
            Частота повідомлень змінюється. Скасуйте підписку в будь-який час,
            відповівши STOP або натиснувши кнопку посилання для скасування
            підписки (якщо є). Політика та умови конфіденційності.
          </span>
        </div>
         </div>
      </div>
    </>
  );
};

export default Footer;
