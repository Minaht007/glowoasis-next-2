import Image from "next/image"
import Line from "../../public/img/advantages/line.png"
import DTSwiper from "../advantages/advantageSwiperDT"

const AdvantagesMain = () => {

    return (
        <>
        <div className="w-screen h-[344px] bg-[#F1E8E3] items-center pr-[60px] pl-[60px] pt-[72px] layout">
            <div className="layout">
            <p className="text-center text-lg font-bold">НАС ПУБЛІКУЮТЬ</p>  
        <Image
         className="w-full pt-[42px]"
        src={Line}
        alt="Line"
        />
        <div className="flex pt-[58px] items-center">
        <DTSwiper />
        </div >
        </div>
        </div>    
        </>
    )
}

export default AdvantagesMain