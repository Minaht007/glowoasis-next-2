"use client"
import { useState } from "react";
import Image from "next/image";
import ArrowT from "../../public/icon/arrowTop.svg";
import ArrowB from "../../public/icon/arrowBottom.svg"

export const Filter = ({ onSortByAlphabet, onSortByPrice, onSortBySkinType, onSortBysortByCategory, onSortByBestsellers }) => {
    const [isHoveredSort, setIsHoveredSort] = useState(false);
    const [isHoveredSkin, setIsHoveredSkin] = useState(false);
    const [isHoveredCategories, setIsHoveredCategories] = useState(false);
  
  
    return (
        <div className="w-[350px] md:w-[152px] lg:w-[250px] mb-[35px] md:mb-0 lg:mb-0 md:mr-[19px] lg:mr-[60px]">
      <div className="border-t lg:w-[250px] text-start pb-[15px] pt-[15px]"
        onMouseEnter={() => setIsHoveredSort(true)}
        onMouseLeave={() => setIsHoveredSort(false)}
      >
        <div className="flex">
        <h2 className="text-start text-xl font-bold">СОРТУВАТИ</h2>
        <Image 
        src={isHoveredSort ? ArrowB : ArrowT}
        alt=""
        width={16}
        height={8}
        className="ml-[17px]"
        />
        </div>
        {isHoveredSort && (
          <>
            <button className="block text-lg" onClick={onSortByAlphabet}>а-я</button>
            <button  className="block text-lg" onClick={onSortByPrice}>ціна, від найнижчої</button>
          </>
        )}
      </div>
      <div className="border-t block lg:w-[250px] text-start pb-[15px] pt-[15px]"
        onMouseEnter={() => setIsHoveredSkin(true)}
        onMouseLeave={() => setIsHoveredSkin(false)}
      >
        <div className="flex">
        <h2 className="text-start text-xl font-bold">ТИП ШКІРИ</h2>
        <Image 
        src={isHoveredSkin ? ArrowB : ArrowT}
        alt=""
        width={16}
        height={8}
        className="ml-[17px]"
        />
        </div>
        {isHoveredSkin && (
           <>
      <button className="text-lg" onClick={() => onSortBySkinType("combination")}>комбінована</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("dry")}>суха</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("normal")}>нормальна</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("oily")}>жирна</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("sensitive")}>чутлива</button>
         </>
        )}
      </div>
      <div className="border-t border-b block lg:w-[250px] text-start pb-[15px] pt-[15px]"
        onMouseEnter={() => setIsHoveredCategories(true)}
        onMouseLeave={() => setIsHoveredCategories(false)}
      >
        <div className="flex">
        <h2 className="text-start text-xl font-bold">КАТЕГОРІЯ</h2>
        <Image 
        src={isHoveredCategories ? ArrowB : ArrowT}
        alt=""
        width={16}
        height={8}
        className="ml-[17px]"
        />
        </div>
        {isHoveredCategories && (
           <>
           <button className="block text-lg" onClick={() => onSortBysortByCategory("очищення")}>очищення</button>
             <button className="block text-lg" onClick={() => onSortBysortByCategory("ензимна пудра")}>ензимна пудра</button>
                 <button className="block text-lg" onClick={() => onSortBysortByCategory("догляд навколо очей")}>догляд навколо очей</button>
                  <button className="block text-lg" onClick={() => onSortBysortByCategory("зволожуючі креми")}>зволожуючі креми</button>
               <button className="block text-lg" onClick={() => onSortBysortByCategory("сироватки")}>сироватки</button>
           <button className="block text-lg" onClick={() => onSortBysortByCategory("набори")}>набори</button>
        <button className="block text-lg" onClick={() => onSortBysortByCategory("тонери")}>тонери</button>
        <button className="block text-lg" onClick={() => onSortByBestsellers("бестселлери")}>бестселлери</button>
         </>
        )}
      </div>
      </div>
    );
  };