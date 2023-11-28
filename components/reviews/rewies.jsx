
import RewiesSwiper from "../reviews/reviewsSwiper"
import styles from "./reviews.module.scss"

const Rewies =() => {
    return (
        <>
        <div className="bg-cardColor sm:w-[390px] sm:h-[720px] ">
            <h1 className={`pt-5 text-start pl-6  ${styles.rewiesTitle}`}>РЕАЛЬНИЙ ДОСВІД</h1>
        <div>
            <RewiesSwiper />
        </div>
        </div>
        
           
        </>
    )
}

export default Rewies