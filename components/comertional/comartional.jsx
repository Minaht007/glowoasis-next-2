'use client'
import style from "./comertional.module.scss"
import fontStyle from "../fonts/fonts.module.scss"

import Image from "next/image"
import Brand1 from "../../public/img/comertional/hp_brand-1-3x.png"
import Brand2 from "../../public/img/comertional/hp_brand-2-3x.png"
import Brand3 from "../../public/img/comertional/hp_brand-3-3x.png"
import Brand4 from "../../public/img/comertional/hp_brand-4-3x.png"

import Link from 'next/link'




const Comartional = () => {

    return (
        <>
        <div className={style.comertionalBg}>
        <div>
            <h3 className={`${style.comertionalTitle} ${fontStyle.comertionalPhilosopher}`}>експертно розроблений догляд для кожного типу шкіри</h3>
        </div>

        <div className={style.comartionalImgComtainer}>
            <Image 
            src={Brand1}
            alt="brand1"
            width={165}
            height={206}
            />
             <Image 
            src={Brand2}
            alt="brand2"
            width={165}
            height={206}                  
            />
             <Image 
            src={Brand3}
            alt="Brand3"
            width={165}
            height={206}
            />
             <Image 
            src={Brand4}
            alt="Brand4"
            width={165}
            height={206}
            />
        </div>

        <div className={style.linkContainer}>
            <Link className={`${fontStyle.istokWebTitle} ${style.linkBorder}`} href="/">комбінована шкіра</Link>
            <Link className={`${fontStyle.istokWebTitle} ${style.linkBorder}`} href="/">суха шкіра</Link>
            <Link className={`${fontStyle.istokWebTitle} ${style.linkBorder}`} href="/">жирна шкіра</Link>
            <Link className={`${fontStyle.istokWebTitle} ${style.linkBorder}`} href="/">чутлива шкіра</Link>
        </div>



        </div>
        </>
    )

}

export default Comartional