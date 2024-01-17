"use client"

import Image from "next/image"
import Brand1 from "../../public/img/comertional/hp_brand-1-3x.png"
import Brand2 from "../../public/img/comertional/hp_brand-2-3x.png"
import Brand3 from "../../public/img/comertional/hp_brand-3-3x.png"
import Brand4 from "../../public/img/comertional/hp_brand-4-3x.png"

import Link from 'next/link'


const Comartional = ({ onSortBySkinType }) => {

    return (
        <>
        <div className="flex flex-col h-[985px] justify-center md:h-[1224px] lg:h-[807px] lg:flex-row w-screen lg:items-center lg:relative bg-cover bg-center bg-no-repeat bg-comertional-bg">
                <div className="layout flex flex-col items-start w-[209px] mb-[60px] md:w-[568px] lg:w-[615px] lg:ml-[250px] lg:absolute lg:mr-[1100px] lg:mb-[250px]">
                    <h3 className="text-3xl font-bold text-start md:text-5xl lg:text-6xl">експертно розроблений догляд для кожного типу шкіри</h3>
                </div>
                <div className="grid order-3 self-center space-y-5 md:space-y-0 md:w-[500px] md:grid md:gap-7 md:grid-cols-2 lg:space-y-0 lg:order-1 lg:absolute lg:mr-[850px] lg:mt-[280px]">
                    <button className="border flex items-center justify-center w-[240px] h-[44px] md:h-[50px] cursor-pointer bg-btn-bg-primery-color" href={`/products?skin=комбінована`} as="/products?skin=комбінована">комбінована шкіра</button>
                    <button className="border flex items-center justify-center w-[240px] h-[44px] md:h-[50px] cursor-pointer bg-btn-bg-primery-color" href="/products?skin=dry" passHref>суха шкіра</button>
                    <button className="border flex items-center justify-center w-[240px] h-[44px] md:h-[50px] cursor-pointer bg-btn-bg-primery-color" onClick={() => onSortBySkinType("oily")} passHref>жирна шкіра</button>
                    <button className="border flex items-center justify-center w-[240px] h-[44px] md:h-[50px] cursor-pointer bg-btn-bg-primery-color" href="products?skin=sensitive" passHref>чутлива шкіра</button>
                </div>
                <div className="w-[330px] order-2 grid gap-8 grid-cols-2 self-center md:w-[580px] mb-[32px] lg:order-3 lg:w-[530px] lg:absolute lg:ml-[810px] lg:mb-0">
                <Image 
            src={Brand1}
            alt="brand1"
            width={165}
            height={206}
            className="w-[165px] md:w-[280px] lg:w-[244px] "
            />
            <Image 
            src={Brand2}
            alt="brand2"
            width={165}
            height={206}  
            className="w-[165px] md:w-[280px] lg:w-[244px]"                
            />
            <Image 
            src={Brand3}
            alt="Brand3"
            width={165}
            height={206}
            className="w-[165px] md:w-[280px] lg:w-[244px]"
            />
            <Image 
            src={Brand4}
            alt="Brand4"
            width={165}
            height={206}
            className="w-[165px] md:w-[280px] lg:w-[244px]"
            />
                </div>
                <div>
            </div>
        </div> 
    </>
    )
}

export default Comartional