"use client"

import { useState, useEffect } from "react";



export const ProductTotalPrice = ({ count, price, className }) => {
  const [totalPrice, setTotalPrice] = useState(count * price);

  useEffect(() => {
    setTotalPrice(count * price);
  }, [count, price]);

  return <p className={`ml-[3px] ${className}`}>{totalPrice}</p>;
};







