"use client"

import { useState } from "react";
import { Counter } from "../../components/utils/Counter";
import { ProductTotalPrice } from "../allProducts/ProductTotalPrice";

export const ModalPrice =  ({ price }) => {
    const [count, setCount] = useState(1);
  
    return (
        <>
            <div className="flex flex-col items-start">
            <div > 
            <div className="flex my-5"><p className="flex">$ <ProductTotalPrice count={count} price={price} /></p>     
            </div>
            </div>
            </div>
            <div className="">
                <Counter count={count} setCount={setCount} />
                </div>
        </>
    );
};
