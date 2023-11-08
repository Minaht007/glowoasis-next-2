import Image from "next/image"
import Line from "../../public/img/advantages/line.png"
import styles from "./advantages.module.scss"

import MobSwiper from "../advantages/advantageSwiperMob"
import DTSwiper from "../advantages/advantageSwiperDT"

const AdvantagesMain = () => {

    return (
        <>
        <div className="bg-[#F1E8E3] pb-[60px]">
            <p className="text-center pt-10">НАС ПУБЛІКУЮТЬ</p>  
        {/* Line */}
            <div className={styles.advantageLineContainer}>
        <Image
        className={styles.imgLine}
        src={Line}
        alt="Line"
        />
            </div> 
        {/* MobileSwiper */}
            <div className="pb-10 visible md:hidden lg:hidden">
        <MobSwiper />
            </div>
        {/* Desk Top Swiper */}
        <div className="pt-10 hidden sm:hidden lg:block">
        <DTSwiper />
        </div >
            
        </div>
              

        </>
    )

}

export default AdvantagesMain