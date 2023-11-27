
import BestsellersSlideMob from "./besrsellerSwiperMob"
import BestsellerSwiperTab from "./bestsellerSwiperTablet"
import BestsellersSwiperDT from "./bestsellerSwiperDT"

import styles from "./bestsellers.module.scss"
import Line from "../../public/img/advantages/line.png"
import Image from "next/image"

const BestSellers = () => {
    return (
        <div className="bg-mainBgColor text-center">
            <div>
                <p>РЕКОМЕНДОВАНІ ТОВАРИ</p>
            </div>
            {/* Line */}
            <div className="flex align-center justify-center py-5 lg:py-8">
                <Image 
                src={Line}
                alt="Line"
                className="sm:w-[350px] h-[1px] md:w-[626px]  lg:w-[1250px]"
                />
            </div>
            {/* MobileSwiper */}
            <div className={styles.bsMobSwiper}>
            <BestsellersSlideMob />
            </div>

            {/* Tablet Swiper */}
            <div className={`${styles.bsTabSwiper} flex align-center justify-center my-auto`}>
                <BestsellerSwiperTab />
            </div>


            {/* Desktop Swiper */}
            <div className={styles.bsDtSwiper} required>
                <BestsellersSwiperDT />
            </div>

        </div>
    )
}

export default BestSellers