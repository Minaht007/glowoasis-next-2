"use client"
import { useState } from "react";

export const Filter = ({ onSortByAlphabet, onSortByPrice, onSortBySkinType, onSortBysortByCategory }) => {
    const [isHoveredSort, setIsHoveredSort] = useState(false);
    const [isHoveredSkin, setIsHoveredSkin] = useState(false);
    const [isHoveredCategories, setIsHoveredCategories] = useState(false);
  
    return (
        <div className="block">
      <div className="border-t block w-[250px] text-start mr-[30px] ml-[97px] pb-[15px] pt-[15px] pl-[34px]"
        onMouseEnter={() => setIsHoveredSort(true)}
        onMouseLeave={() => setIsHoveredSort(false)}
      >
        <h2 className="text-start text-xl font-bold">СОРТУВАТИ</h2>
        {isHoveredSort && (
          <>
            <button className="block text-lg" onClick={onSortByAlphabet}>а-я</button>
            <button  className="block text-lg" onClick={onSortByPrice}>ціна, від найнижчої</button>
          </>
        )}
      </div>
      <div className="border-t border-b block w-[250px] text-start mr-[30px] ml-[97px] pb-[15px] pt-[15px] pl-[34px]"
        onMouseEnter={() => setIsHoveredSkin(true)}
        onMouseLeave={() => setIsHoveredSkin(false)}
      >
        <h2 className="text-start text-xl font-bold">ТИП ШКІРИ</h2>
        {isHoveredSkin && (
           <>
           <button className="block text-lg" onClick={() => onSortBySkinType("комбінована")}>комбінована</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("суха")}>суха</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("нормальна")}>нормальна</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("жирна")}>жирна</button>
      <button className="block text-lg" onClick={() => onSortBySkinType("чутлива")}>чутлива</button>
         </>
        )}
      </div>
      <div className=" border-b block w-[250px] text-start mr-[30px] ml-[97px] pb-[15px] pt-[15px] pl-[34px]"
        onMouseEnter={() => setIsHoveredCategories(true)}
        onMouseLeave={() => setIsHoveredCategories(false)}
      >
        <h2 className="text-start text-xl font-bold">КАТЕГОРІЯ</h2>
        {isHoveredCategories && (
           <>
           <button className="block text-lg" onClick={() => onSortBysortByCategory("очищення")}>очищення</button>
<button className="block text-lg" onClick={() => onSortBysortByCategory("ензимна пудра")}>ензимна пудра</button>
<button className="block text-lg" onClick={() => onSortBysortByCategory("догляд навколо очей")}>догляд навколо очей</button>
<button className="block text-lg" onClick={() => onSortBysortByCategory("зволожуючі креми")}>зволожуючі креми</button>
<button className="block text-lg" onClick={() => onSortBysortByCategory("сироватки")}>сироватки</button>
<button className="block text-lg" onClick={() => onSortBysortByCategory("набори")}>набори</button>
<button className="block text-lg" onClick={() => onSortBysortByCategory("тонери")}>тонери</button>
         </>
        )}
      </div>
      </div>
    );
  };