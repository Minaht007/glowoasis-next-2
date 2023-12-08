import RewiesSwiper from "../reviews/reviewsSwiper";
import RewiesSwiperDT from "./reviesSwiperDT";
import styles from "./reviews.module.scss";

const Rewies = () => {
  return (
    <>
      <div className="bg-cardColor sm:w-screen sm:h-[720px] layout">
        <h1 className={`pt-5 text-start pl-6  ${styles.rewiesTitle}`}>
          РЕАЛЬНИЙ ДОСВІД
        </h1>
        <div className="visible lg:hidden layout">
          <RewiesSwiper />
        </div>
        <div className="hidden lg:block layout w-[1440px]">
          <RewiesSwiperDT />
        </div>
      </div>
    </>
  );
};

export default Rewies;
