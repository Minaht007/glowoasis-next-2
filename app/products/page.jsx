import { AllProductsCard } from "@/components/allProducts/AllProductsCard";
import { ModalProvider } from "@/components/modalBasket/ModalContext";

const AllProductPage = () => {
    return (
        <ModalProvider>
        <AllProductsCard />
        </ModalProvider>
    ) 
}

export default AllProductPage;