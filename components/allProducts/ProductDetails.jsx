import Image from "next/image";
import { getOneProduct } from "@/api/products/data";
import { ProductBtnTotalPrice } from "./ProductBtnTotalPrice";
import section from "../../public/img/allProducts/section.png";
import { ProductImg } from "./ProductImg";
import { DropdownList } from "../utils/DropdownList";
import  BestsellersSwiperDT  from "../bestsellers/bestsellerSwiperDT";

export const ProductDetails = async ({id}) => {
  const products = await getOneProduct(id);
  const oneProduct =  products.find((item) => item.id === id)

  if (!oneProduct) {
      return <div className="layout flex items-center justify-center w-[600px] h-[400px] text-2xl">Ой.. А тут поки що нічого немає. Та вже невдовзі ви побачите деталі про цей продукт</div>;
  }

  return (
    <>
    <div className="w-screen bg-main-background">
      <div className="layout w-[1100px] mt-[32px] mb-[92px]">
        <div className="flex items-center">
          <div key={oneProduct.id} className="flex w-[1100px] h-[734px]">
            <ProductImg oneProduct={oneProduct}/>
            <div className="w-[448px] ml-[23px] pt-[45px]">
              <h2 className="text-5xl font-bold text-start mb-[20px]">{oneProduct.title}</h2>
              <p className="text-start text-base mb-[16px]">{oneProduct.text}</p> 
              <ProductBtnTotalPrice price={oneProduct.price}/>
            </div>
          </div>
        </div>
        <div className="w-[1100px] mt-[35px] items-center ml-auto mr-auto mb-[68px]">
          <Image
            src={section}
            alt=""
            width={489}
            height={734}
            className="w-screen items-center"
          />
        </div>
      </div>
      <div className="border-b relative flex w-[1271px] ml-auto mr-auto">
      <Image
            src={oneProduct.ingredients.img}
            alt=""
            width={615}
            height={615}
            className="mb-[168px]"
          />
        <div>
          <h2 className="absolute text-6xl font-bold text-start w-[500px] ml-[-100px]">{oneProduct.ingredients.title}</h2>
     
          <div className="w-[615px] mt-[315px] ml-[31px]" >
      <DropdownList 
      title={oneProduct.ingredients.titleList} 
      subTitle={oneProduct.ingredients.subTitle} 
      text={oneProduct.ingredients.text}
      title1={oneProduct.ingredients.titleList1} 
      subTitle1={oneProduct.ingredients.subTitle1} 
      text1={oneProduct.ingredients.text1}
      subTitle2={oneProduct.ingredients.subTitle2} 
      text2={oneProduct.ingredients.text2}
      subTitle3={oneProduct.ingredients.subTitle3} 
      text3={oneProduct.ingredients.text3} 
      />
      </div>
      </div>
      </div>
      <div className="flex relative w-[1271px] ml-auto mr-auto mt-[39px] mb-[178px]">
        <div className=" text-start mr-[133px]">
        <h2 className="w-[609px] text-6xl font-bold text-start mb-[28px]">{oneProduct.benefits.title}</h2>
        <div className="w-[520px] text-start">
        <p className="text-start text-base font-bold">{oneProduct.benefits.subTitle}</p>
        <p className="text-start text-base mb-[28px]">{oneProduct.benefits.description}</p>
        <p className="text-start text-base font-bold">{oneProduct.benefits.subTitle1}</p>
        <p className="text-start text-base mb-[28px]">{oneProduct.benefits.description1}</p>
        <div className="flex text-start">
        <p className="text-start text-base mr-[20px]">{oneProduct.benefits.text}</p>
        <p className="text-start text-base">{oneProduct.benefits.text1}</p>
        </div>
        </div>
        </div>
      <div className="relative flex items-end mt-[102px]">
      <Image
            src={oneProduct.benefits.img}
            alt=""
            width={546}
            height={546}
            className=" "
            />
          </div>
          <Image
            src={oneProduct.benefits.img1}
            alt=""
            width={338}
            height={249}
            className="absolute mt-[440px] ml-[600px]"
          />
      </div>
      <div className="w-[860px] ml-auto mr-auto mb-[80px]">
      <Image
            src={oneProduct.preview.img}
            alt=""
            width={860}
            height={856}
            className="mb-[52px]"
            />
            <div>
              <h2 className="text-6xl font-bold mb-[28px]">{oneProduct.usage.title}</h2>
              <ul className="text-start mb-[28px]">
                <li className="text-start text-base">{oneProduct.usage.step1}</li>
                <li className="text-start text-base">{oneProduct.usage.step2}</li>
                <li className="text-start text-base">{oneProduct.usage.step3}</li>
              </ul>
              <p className="text-start text-base font-bold">{oneProduct.usage.subTitle}</p>
              <p className="text-start text-base mb-[28px]">{oneProduct.usage.text}</p>
              <p className="text-start text-base font-bold">{oneProduct.usage.subTitle1}</p>
              <p className="text-start text-base">{oneProduct.usage.text1}</p>
            </div>
          </div>
          <div className="h-[824px] bg-second-backround py-16">
            <h3 className="mb-[32px]">ДОПОВНІТЬ СВІЙ ДОГЛЯД ЗА ШКІРОЮ З...</h3>
            <div className="border-t">
            {/* <BestsellersSwiperDT /> */}
            </div>
          </div>
          </div>
    </>
  );
};