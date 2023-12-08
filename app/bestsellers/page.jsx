import banerMob from "../../public/img/baners/bestsellers/banner-Mob.png"
import Image from "next/image"

const Bestsellrs = () => {

    return (
        <>
        <div>           
            <Image 
            src={banerMob}
            alt="baner"
            width={390}
            height={158}
            />
        </div>
        </>
    )
    
}
export default Bestsellrs