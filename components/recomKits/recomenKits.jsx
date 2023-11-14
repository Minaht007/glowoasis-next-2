import Image from "next/image"
import RecImg from "../../public/img/recKits/regKits-3x.png"
 
const RecomendKits = () => {
    return (
        <>
        <div className="flex w-screen align-center justify-center">
            <h1 >РЕКОМЕНДОВАНІ НАБОРИ</h1>
        </div>

        <div>
            <Image 
            src={RecImg}
            alt="RecImg"
            width={327}
            height={490}
            />
        </div>

        
        </>
        
    )
}

export default RecomendKits