"use client"

import React, { useState } from "react";
import Image from "next/image";
import ArrowT from "../../public/icon/arrowTop.svg";
import ArrowB from "../../public/icon/arrowBottom.svg"



export const DropdownList = ({
    title, 
    subTitle, 
    text, 
    title1, 
    subTitle1, 
    text1, 
    subTitle2, 
    text2, 
    subTitle3, 
    text3}) => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);


  return (
    <>
    <div className="text-start h-full">
    <div className="border-t " onMouseEnter={() => setIsOpenFirst(true)} onMouseLeave={() => setIsOpenFirst(false)}>
      <button className="flex items-center text-start pt-[14px] pb-[14px] text-base font-bold">
      <Image 
        src={isOpenFirst ? ArrowB : ArrowT}
        alt=""
        width={14}
        height={7}
        className="mr-[17px]"
        />
        {title}</button>
      {isOpenFirst && (
        <ul className="pl-[32px]">
          <li className="mb-[12px]"><p className="text-start text-base font-bold">{subTitle}</p><p className="text-start text-base">{text}</p></li>
          <li className="mb-[12px]"><p className="text-start text-base font-bold">{subTitle1}</p><p className="text-start text-sm">{text1}</p></li>
          <li className="mb-[12px]"><p className="text-start text-base font-bold">{subTitle2}</p><p className="text-start text-sm">{text2}</p></li>
          <li className="mb-[12px]"><p className="text-start text-base font-bold">{subTitle3}</p><p className="text-start text-sm">{text3}</p></li>
        </ul>
      )}
          </div>
    <div className="border-t text-start" onMouseEnter={() => setIsOpenSecond(true)} onMouseLeave={() => setIsOpenSecond(false)}>
      <button className="flex items-center text-start pt-[14px] pb-[14px] text-base font-bold">
      <Image 
        src={isOpenSecond ? ArrowB : ArrowT}
        alt=""
        width={14}
        height={7}
        className="mr-[17px]"
        />
        {title1}</button>
      {isOpenSecond && (
        <ul className="pl-[32px]">
         {/* <li className="mb-[12px]"><p className="text-start">{subTitle}</p><p className="text-start">{text}</p></li>
          <li className="mb-[12px]"><p className="text-start">{subTitle}</p><p className="text-start">{text}</p></li>
          <li className="mb-[12px]"><p className="text-start">{subTitle}</p><p className="text-start">{text}</p></li>
          <li className="mb-[12px]"><p className="text-start">{subTitle}</p><p className="text-start">{text}</p></li> */}
        </ul>
      )}
    </div>
    </div>
    </>
  );
}