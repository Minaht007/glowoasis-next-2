import Image from "next/image"
import RecGoodsSwiperMob from "./recomKitsSwiper"
import RecomGoodsSwiperTab from "./recomKitsSwiperTab"


import Kit1 from "../../public/img/recKits/recKits-3x.png";
import EarCream from "../../public/img/allGoods/eye-cream-3x.png";
import Kit3 from "../../public/img/allGoods/kit-3-3x.png";

const RecomendKits = () => {
    return (
        <>
        <div className=" w-screen align-center text-center pb-[60px] pt-[60px] bg-main-background">
            <h1 className="text-istokWeb text-lg font-bold mb-[68px]" >РЕКОМЕНДОВАНІ НАБОРИ</h1>
        <div className="layout flex align-center justify-center">

            {/* goods #1 */}
            <div className="w-[327px] ">
                <Image
                src={Kit1}
                alt="Kit1"
                width={327}
                height={490}
                />

                <h3 className="font-bold">відлущуй ніжним дотиком</h3>
                <p>
                Зробіть свої подорожі яскравішими з ексфоліантом тревел-розміру
                </p>
                <button className="border w-full h-[50px] bg-btn-bg-primery-color">купити</button>
            </div>
            {/* goods #2 */}
            <div className="w-[327px] mx-[62px]">
            <h3 className="font-bold">результати, які ви можете побачити</h3>
                <p>
                Додайте зміцнення, освітлення та зволоження вашій делікатній зоні навколо очей
                </p>
                <button className="border w-full h-[50px] bg-btn-bg-primery-color">купити</button>
            <Image
                src={EarCream}
                alt="EarCream"
                width={327}
                height={490}
                />
            </div>
            {/* goods #3 */}
            <div className="w-[327px] ">  
            
                <Image
                src={Kit3}
                alt="Kit3"
                width={327}
                height={490}
                />
                <h3 className="font-bold">відчуваєш чутливість?</h3>
                <p>
                Заспокойте, зволожте та збалансуйте втомлену шкіру.
                </p>
                <button className="border w-full h-[50px] bg-btn-bg-primery-color">купити</button>
            </div>
        </div>
        </div>   
        </>
    )
}

export default RecomendKits