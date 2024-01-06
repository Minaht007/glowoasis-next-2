"use client"

import { useState } from 'react';
import { Counter } from '../utils/Counter';
import { ProductTotalPrice } from './ProductTotalPrice';

export const ProductBtnTotalPrice = ({ price }) => {
    const [count, setCount] = useState(1);
  
    return (
        <>
            <div className="flex items-start">
                <div>
                <Counter count={count} setCount={setCount} />
                </div>
                <div> 
                <button className="border h-[54px] w-[290px] pr-[10px] mb-[16px] ml-[38px] bg-btn-second-color">
                    <div className="flex flex-row justify-center"><p className="text-text-accent-color">у кошик $</p> 
                    <ProductTotalPrice count={count} price={price} />
                    </div>
                </button>
            </div>
            </div>
            <div>
            <button className="border-2 h-[54px] w-[448px] bg-btn-bg-primery-color">залишити відгук</button>
            </div>
        </>
    );
};
