import Image from "next/image"
import plusImg1 from "../../public/img/pluses/threePlusesPix-3x-1.png"
import plusImg2 from "../../public/img/pluses/threePlusesPix-3x-2.png"
import plusImg3 from "../../public/img/pluses/threePlusesPix-3x-3.png"
import BG from "../../public/img/pluses/threePluses-3x.png"

import { Philosopher } from "next/font/google"


const PlusesMob = () => {

    return (
        <>
        <div className="flex relative justify-center h-[600px]  lg:h-[920px]">
            <div className="w-screen" >
                <Image 
                src={BG}
                alt="BG"                
                layout="fill"  
                />
            </div>
            <div className="flex absolute gap-5 mx-auto lg:pt-8">
         <Image 
            src={plusImg1}
            alt="plusImg1"           
            layout="contain"
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
         <div className="absolute text-center color-textColor top-[240px] top-[380px]">
            <h1>чистий, безпечний і екологічний</h1>
            </div>

         {/* plusesText */}

            <div className="absolute text-center color-textColor top-[250px] mx-[67px] lg:top-[450px]">
            <p className="text-textColor">
            Наші засоби виготовляються із 100% веганських формул, а упаковка є екологічною, що не шкодитиме навколишньому середовищу.
            </p>
            </div>

         {/* Pluses button */}

            <div className="absolute top-[430px] lg:top-[630px] ">
            <button className="py-3 px-5 bg-bgBtnColor border border-2 border-gray-900 rounded-md text-textColorLight lg:px-10 lg:py-4">ЧИТАТИ БІЛЬШЕ</button>
        </div>
        
        </div>    
        
        </>
    )

}

export default PlusesMob

