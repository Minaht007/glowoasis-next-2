import Image from "next/image"
import HeroMob from "../../public/img/hero/heroMob-3x.png"
import HeroDT from "../../public/img/hero/heroDT-3x.jpg"

const Hero = () => {
    return (
        <>
             {/* // logo for mobile */}
        <div className=" visible md:hidden lg:hidden w-screen h-[521px]">
            <Image 
            src={HeroMob}
            alt="HeroMob"
            />
        </div>

        {/* // logo for DeskTop */}
        <div className="hidden lg:block w-screen h-[525px] ">
        <Image 
            src={HeroDT}
            alt="HeroMob"
            />
        </div>        
        </>
   


    )
}
export default Hero