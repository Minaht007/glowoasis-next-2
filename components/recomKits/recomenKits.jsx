import Image from "next/image";
import RecGoodsSwiperMob from "./recomKitsSwiper";
import RecomGoodsSwiperTab from "./recomKitsSwiperTab";

import style from "./recomKitsSwiper.module.scss";

import Kit1 from "../../public/img/recKits/recKits-3x.png";
import EarCream from "../../public/img/allGoods/eye-cream-3x.png";
import Kit3 from "../../public/img/allGoods/kit-3-3x.png";

const RecomendKits = () => {
  return (
    <>
      <div className="layout">
        <div className="flex w-screen align-center justify-center pb-8">
          <h1 className="text-istokWeb  text-bold">РЕКОМЕНДОВАНІ НАБОРИ</h1>
        </div>

        {/* FOR MOBILE */}

        <div className={style.showSwiperMom}>
          <RecGoodsSwiperMob />
        </div>

        {/* FOR TABLET */}
        <div className={style.showSwiperTab}>
          <RecomGoodsSwiperTab />
        </div>

        {/* Recomadation Goods fo Desktop */}

        <div className="flex hidden lg:block lg:flex align-center justify-center">
          {/* goods #1 */}
          <div className="w-[327px] ">
            <Image src={Kit1} alt="Kit1" width={327} height={490} />

            <h3>відлущуй ніжним дотиком</h3>
            <span>
              Зробіть свої подорожі яскравішими з ексфоліантом тревел-розміру
            </span>
            <button>купити</button>
          </div>
          {/* goods #2 */}
          <div className="w-[327px] mx-[62px]">
            <h3>результати, які Ви можете побачити</h3>
            <span>
              Додайте зміцнення, освітлення та зволоження вашій делікатній зоні
              навколо очей
            </span>
            <button>купити</button>
            <Image src={EarCream} alt="EarCream" width={327} height={490} />
          </div>
          {/* goods #3 */}
          <div className="w-[327px] ">
            <Image src={Kit3} alt="Kit3" width={327} height={490} />
            <h3>відчуваєш чутливість?</h3>
            <span>Заспокойте, зволожте та збалансуйте втомлену шкіру.</span>
            <button>купити</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecomendKits;
