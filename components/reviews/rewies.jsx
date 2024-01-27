import RewiesSwiper from "../reviews/reviewsSwiper"

const Rewies =() => {
    return (
        <>
        <div className="flex items-center w-screen h-[900px] bg-[#D0C3BB] layout">
        <div className="">
        <h1 className="text-start ml-[96px] mb-[30px] text-lg font-bold">РЕАЛЬНИЙ ДОСВІД</h1>
            <RewiesSwiper />
        </div>
        </div>         
        </>
    )
}

export default Rewies