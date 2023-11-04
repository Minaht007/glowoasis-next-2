import Image from "next/image"
import HeroMob from "../../public/img/hero/heroMob-1x.png"
import HeroDT from "../../public/img/hero/heroDT-3x.jpg"

const Hero = () => {
    return (
        <div className=" visible md:hidden ld:hedden sm:w-full h-[521px]">
            <Image 
            src={HeroMob}
            alt="HeroMob"
            />
        </div>
    )
}
export default Hero