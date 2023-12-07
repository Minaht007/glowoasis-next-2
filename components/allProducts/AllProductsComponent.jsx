import { Banner } from "./Banner";
import { AllProductsCard } from "./AllProductsCard"; 


export const AllProductsComponent = () => {
    return <>
    <div className="layout">
        <Banner
        title="всі товари" 
        desc="Досліджуйте веганську доглядову косметику з пробіотиками, розроблену для вашого мікробіому."
        />
    <div className="flex mt-[42px]">
    <AllProductsCard/>
    </div>
    </div>
    </>
}