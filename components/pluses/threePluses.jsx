import Image from "next/image"
import style from "./threePluses.module.scss"
import plusImg1 from "../../public/img/pluses/threePlusesPix-3x-1.png"
import plusImg2 from "../../public/img/pluses/threePlusesPix-3x-2.png"
import plusImg3 from "../../public/img/pluses/threePlusesPix-3x-3.png"
import BG from "../../public/img/pluses/threePluses-3x.png"


const PlusesMob = () => {

    return (
        <>
        <div className="flex relative justify-center">
            <div className="w-screen" >
                <Image 
                src={BG}
                height={600}
                layout="responsive"
                objectFit="cover"            
                />
            </div>
            <div className="flex absolute gap-5 mx-auto">
        <Image 
            src={plusImg1}
            alt="plusImg1"
            width={109}
            height={190}
            
            />
            <Image 
            src={plusImg2}
            alt="plusImg2"
            width={109}
            height={190}
            
            />
            <Image 
            src={plusImg3}
            alt="plusImg3"
            width={109}
            height={190}
           
            />
        </div>
        {/* plusesTitle */}
        <div className="absolute text-center color-textColor top-[240px]">
            <h1>чистий, безпечний і екологічний</h1>
        </div>
        
        </div>
        
        
        </>
    )

}

export default PlusesMob

