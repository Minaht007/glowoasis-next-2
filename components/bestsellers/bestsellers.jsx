import Line from "../../public/img/advantages/line.png"
import Image from "next/image"
import BestsellersSwiperDT from "./bestsellerSwiperDT"


const BestSellers = () => {
    return (
        <div className="w-screen h-full bg-second-backround text-center">
            <div className="layout">
                <p className="text-lg font-bold">РЕКОМЕНДОВАНІ ТОВАРИ</p>
            </div>
            {/* Line */}
            <div className="layout flex align-center justify-center py-5 lg:py-8">
                <Image 
                src={Line}
                alt="Line"
                className="w-[350px] h-[1px] md:w-[626px] lg:w-[1250px]"
                />
             </div>
            {/* Desktop Swiper */}
            <div className="">
                <BestsellersSwiperDT />
            </div>
        </div>
    )
}

export default BestSellers