"use client"

import { useState } from "react";
import Image from "next/image";

export const ProductImg = ({ oneProduct }) => {

const [img, setImg] = useState(oneProduct.img);

  const handleClick = (newImg) => {
    setImg(newImg);
  };

  return (
    <>
    <div className="mr-[24px]">
      <Image
        src={oneProduct.img}
        alt=""
        width={68}
        height={68}
        className="aspect-[1/1] mb-[24px] cursor-pointer"
        onClick={() => handleClick(oneProduct.img)}
      />
      <Image
        src={oneProduct.preview.img1}
        alt=""
        width={68}
        height={68}
        onClick={() => handleClick(oneProduct.preview.img1)}
        className="mb-[24px] aspect-[1/1] cursor-pointer"
      />
      <Image
        src={oneProduct.preview.img}
        alt=""
        width={68}
        height={68}
        className="aspect-[1/1] cursor-pointer"
        onClick={() => handleClick(oneProduct.preview.img)}
      />
    </div>
    <Image
      src={img}
      alt=""
      width={489}
      height={734}
      className="h-full object-cover"
    />
  </>
  );
}