import Image from "next/image";
import animal from "../../public/img/allProductsIcons/animal.png";
import vegan from "../../public/img/allProductsIcons/vegan.png";
import liposome from "../../public/img/allProductsIcons/liposome-technology.png";
import pregnancy from "../../public/img/allProductsIcons/pregnancy-safe.png";
import sustainable from "../../public/img/allProductsIcons/sustainable.png";

export const AllProductIcons = () => {
    return (
        <div className="flex flex-row justify-between w-[890px]">
         <div className="flex flex-col items-center w-[152px]">
            <Image
            src={animal}
            alt={animal}
            width={131}
            height={131}
            className="mb-5"/>
            <p className="text-base">Не тестуються на тваринах</p>
         </div>
         <div>
         <Image
            src={vegan}
            alt={vegan}
            width={131}
            height={131}
            className="mb-5"/>
            <p className="text-base">100% веганські</p>
         </div>
         <div className="w-[152px]">
         <Image
            src={liposome}
            alt={liposome}
            width={131}
            height={131}
            className="mb-5"/>
            <p className="text-base">Підтверджені науковими дослідженнями</p>
         </div>
         <div className="w-[152px]">
         <Image
            src={pregnancy}
            alt={pregnancy}
            width={131}
            height={131}
            className="mb-5"/>
            <p className="text-base">Безпечні для вагітних</p>
         </div>
         <div className="w-[152px]">
         <Image
            src={sustainable}
            alt={sustainable}
            width={131}
            height={131}
            className="mb-5"/>
            <p className="text-base">Екологічне пакування</p>
         </div>
        </div>
    )
}