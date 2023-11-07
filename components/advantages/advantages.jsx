import Image from "next/image"
import Line from "../../public/img/advantages/line.png"
import styles from "./advantages.module.scss"

const AdvantagesMain = () => {

    return (
        <>
        <p>НАС ПУБЛІКУЮТЬ</p>  
        {/* Line */}
        <div className={styles.advantageLineContainer}>
        <Image
        className={styles.imgLine}
        src={Line}
        alt="Line"
        />
        </div>       

        </>
    )

}

export default AdvantagesMain