"use client"

import { useState } from "react";
import Image from "next/image";
import dataProducts from "../../public/json/allProducts";
import { Filter } from "./Filter";

export const AllProductsCard = () => {
  const [originalProducts] = useState(dataProducts);
  const [products, setProducts] = useState(originalProducts);

  const sortByAlphabet = () => {
    const sortedProducts = [...originalProducts].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  };

  const sortByPrice = () => {
    const sortedProducts = [...originalProducts].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortBySkinType = (skinType) => {
    const sortedProducts = [...originalProducts].filter((product) => product.skin === skinType);
    setProducts(sortedProducts);
  };
  
  const sortByCategory = (category) => {
    const sortedProducts = [...originalProducts].filter((product) => product.category === category);
    setProducts(sortedProducts);
  };

  return (
    <>
      <Filter onSortByAlphabet={sortByAlphabet} onSortByPrice={sortByPrice} onSortBySkinType={sortBySkinType} onSortBysortByCategory={sortByCategory} />
      <div className="layout h-screen"> 
        <div className="flex layout w-[1318px]">
          <ul className="flex flex-wrap ">       
            {products.map(({ id, img, alt, text, btn }) => (
              <li key={id} className=" mr-[16px] ml-0 mb-[28px] place-items-center">
                <Image
                  src={img}
                  alt={alt}
                  width={322}
                  height={483}
                  className="mr-0 ml-0 mb-[20px] h-[483px] items-center place-items-center"
                />
                <div className="mb-[10px] h-[86px] w-[324px] text-center">
                  <p className="">{text}</p>
                </div>
                <div className="justify-center">
                  <button type="button" className="w-[322px] h-[50px] ml-0 mr-0 text-center border-2">{btn}</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

