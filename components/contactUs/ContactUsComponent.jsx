import Image from "next/image";
import contact from "../../public/img/contactUs/contact.png"

export const ContactUs = () => {
    return (
        <div className="flex flex-row justify-center bg-second-backround py-11">
            <div className="flex flex-row items-center">
         <Image
         src={contact}
         alt={contact}
         width={481}
         height={531}
         className="mr-14"/> 
         <div className="flex flex-col w-[553px] text-start">
            <h2 className="text-7xl font-bold mb-5 text-start"> зв(&apos;)яжися з нами</h2>
            <p className="text-base mb-5 text-start">Ми тут, щоб допомогти вам досягти найздоровішої шкіри! Будь ласка, залиште свої запитання та коментарі нижче, і ми відповімо на них якнайшвидше.</p>
            <p className="text-base mb-5 text-start">Перевірте нашу сторінку з найчастішими запитаннями FAQ для інформації щодо доставки та повернень, продуктів та іншої інформації!</p>
            <p className="text-base text-start">Для всіх запитань щодо обслуговування клієнтів, будь ласка, надсилайте листи на адресу glowoasis@gmail.com</p>
         </div>
        </div>
        </div>
    )
}