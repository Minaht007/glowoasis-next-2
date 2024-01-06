import { useState, useEffect } from 'react';


export const ProductTotalPrice = ({ count, price }) => {
    const [totalPrice, setTotalPrice] = useState(count * price);
  
    useEffect(() => {
      setTotalPrice(count * price);
    }, [count, price]);
  
    return <p className="text-text-accent-color ml-[3px]">{totalPrice}</p>;
};