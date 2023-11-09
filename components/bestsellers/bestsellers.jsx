
import BestsellersSlideMob from "./besrsellerSwiperMob"
import BestsellersSwiperDT from "./bestsellerSwiperDT"
import styles from "./bestsellers.module.scss"

const BestSellers = () => {
    return (
        <div className="bg-mainBgColor text-center">
            <div>
                <p>РЕКОМЕНДОВАНІ ТОВАРИ</p>
            </div>
            {/* MobileSwiper */}
            <div className={styles.bsMobSwiper}>
            <BestsellersSlideMob />
            </div>
            
            {/* Desktop Swiper */}
            <div className={styles.bsDtSwiper} required>
                <BestsellersSwiperDT />
            </div>

        </div>
    )
}

export default BestSellers