"use client"

import { useState, useEffect } from "react";


export const CalculateTotalPrice = ({ count: initialCount, price }) => {
    const [prices, setPrices] = useState([]);
    const [count, setCount] = useState(initialCount);
  
    useEffect(() => {
      setPrices(prevPrices => [...prevPrices, count * price]);
    }, [count, price]);
  
    const totalPrice = prices.reduce((total, price) => total + price, 0);
  
    return (
      <>
        <div className="flex flex-col justify-center items-center">
          <p className="text-3xl font-bold mb-5">Повна вартість {totalPrice} USD</p>
          <button className="border w-[451px] h-12 bg-btn-bg-primery-color">Підтвердити</button>
        </div>
      </>
    );
  };