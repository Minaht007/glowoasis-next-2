import banerMob from "../../public/img/baners/bestsellers/banner-Mob.png"
import banerTab from "../../public/img/baners/bestsellers/banner-Tab.png"
import Image from "next/image"
import styles from "../../components/bestsellers/bestsellers.module.scss"

const Bestsellrs = () => {

    return (
        <>
        {/* For Mobile */}
        <div className="sm:h-[224px] md:h-[158px] w-screen layout">           
            <Image 
            src={banerMob}
            alt="baner"
            layout="responsive"
            height={224}
            className={styles.pagebestsellersbanerMob}
            />
        </div>

        {/* For TABLET */}
        <div className="sm:h-[224px] md:h-[158px] w-screen layout">           
            <Image 
            src={banerTab}
            alt="baner"
            width={768}
            height={158}
            className={styles.pagebestsellersbanerTab}
            />
        </div>


        </>
    )
    
}
export default Bestsellrs