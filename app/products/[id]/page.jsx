import { getOneProduct } from "@/api/products/data";
import { ProductDetails } from "@/components/allProducts/ProductDetails";

export const generateStaticParams = async () => {
    const products = await getOneProduct(); 
    return products.map((product) => ({
     params: { id: product.id },
    }));
  }
 
 const ProductPage = async ({ params: { id } } ) => {
 const data = await getOneProduct(id);
 const productData = data.find((item) => item.id === id);
   return (
      <>
        <ProductDetails id={productData ? productData.id: ""}/>
      </>
    );
  };
 
export default ProductPage;