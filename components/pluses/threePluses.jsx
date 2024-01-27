import Image from "next/image";
import Link from "next/link";
import plusImg1 from "../../public/img/pluses/threePlusesPix-3x-1.png"
import plusImg2 from "../../public/img/pluses/threePlusesPix-3x-2.png"
import plusImg3 from "../../public/img/pluses/threePlusesPix-3x-3.png"


const PlusesMob = () => {

    return (
        <>
        <div className="w-screen h-[691px] pt-[80px] md:h-[682px] lg:h-[1110px] lg:pt-[75px] bg-cover bg-center bg-no-repeat bg-pluses-bg layout">
            <div className="flex justify-center gap-5 md:mb-[32px] lg:pt-8 mb-[40px]">
         <Image 
            src={plusImg1}
            alt="plusImg1"           
            contain
            className="w-[109px] h-[190px] lg:w-[300px] lg:h-[300px]"
            
            />
            <Image 
            src={plusImg2}
            alt="plusImg2"
            width={109}
            height={190}
            className="w-[109px] h-[190px] lg:w-[300px] lg:h-[300px]"
            
            />
            <Image 
            src={plusImg3}
            alt="plusImg3"
            width={109}
            height={190}
            className="w-[109px] h-[190px] lg:w-[300px] lg:h-[300px]"
           
            />
             </div>
            {/* plusesTitle */}
            <div className="w-[377px] text-center md:w-[423px] lg:w-[520px] ml-auto mr-auto">
                <h1 className="text-3xl md:tracking-tighter font-bold md:text-5xl lg:text-6xl leading-4"> чистий, безпечний і екологічний</h1>
            </div>

         {/* plusesText */}

            <div className="w-[216px] text-center my-5 md:w-[427px] md:my-8 ml-auto mr-auto">
            <p className="">
            Наші засоби виготовляються із 100% веганських формул, а упаковка є екологічною, що не шкодитиме навколишньому середовищу.
            </p>
            </div>

         {/* Pluses button */}

            <div className="top-[430px] lg:top-[530px] ">
            <Link href="/ingredients">
            <button className="py-3 px-5 bg-btn-second-color border-2 border-gray-900 rounded-md text-text-accent-color lg:px-10 lg:py-4">ЧИТАТИ БІЛЬШЕ</button>
            </Link>
        </div>
        </div>    
        </>
    )
}

export default PlusesMob

