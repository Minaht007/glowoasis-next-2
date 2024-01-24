"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ModalContext } from "../modalBasket/ModalContext";
import { Modal } from "../modalBasket/Modal";
import Image from "next/image";
import Link from "next/link";
import dataProducts from "../../public/json/allProducts";
import { Filter } from "./Filter";
import { Banner } from "./Banner";
import defaultImage from "../../public/img/allProducts/banner.png";


export const AllProductsCard = () => {
  const [originalProducts] = useState(dataProducts);
  const [products, setProducts] = useState(originalProducts);
  const [banner, setBanner] = useState(null);
  const [bannerTitle, setBannerTitle] = useState(null);
  const [bannerText, setBannerText] = useState(null);
  const [filterType, setFilterType] = useState(null);

  const router = useRouter();
    const { addContent, openModal } = useContext(ModalContext);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const handleButtonClick = (product) => {
        setSelectedProducts(prevProducts => {
            const newProducts = [...prevProducts, product];
            addContent(newProducts);
            return newProducts;
        });
        openModal();
    };

  // useEffect(() => {
  //   setOriginalProducts(dataProducts);
  // }, [dataProducts]);


  useEffect(() => {
    if (!banner) {
      setBanner(defaultImage?.src);
      setBannerTitle("всі товари");
      setBannerText("Досліджуйте веганську доглядову косметику з пробіотиками, розроблену для вашого мікробіому.");
    }
  }, [banner]);

  const sortByAlphabet = () => {
    const sortedProducts = [...originalProducts].sort((a, b) => a.text.localeCompare(b.text));
    setProducts(sortedProducts);
    const bannerProduct = sortedProducts[0].defaultBanner; 
    setBanner(bannerProduct); 
  };

  const sortByPrice = () => {
    const sortedProducts = [...originalProducts].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    const bannerProduct = sortedProducts[0].defaultBanner;
    setBanner(bannerProduct);
  };

  const sortBySkinType = (skin) => {
    const sortedProducts = [...originalProducts].filter((product) => product.skin === skin);
    setProducts(sortedProducts);
    setFilterType("skin");
    router.push(`/products?skin=${skin}`, undefined, { shallow: true });
    const bannerSkin = sortedProducts[0]?.bannerSkin; 
    setBanner(bannerSkin); 
    const bannerTitleSkin = sortedProducts[0]?.bannerTitleSkin; 
    setBannerTitle(bannerTitleSkin);
    const bannerTextSkin = sortedProducts[0]?.bannerTextSkin;
    setBannerText(bannerTextSkin); 
  };
  
  const sortByCategory = (category) => {
    const sortedProducts = [...originalProducts].filter((product) => product.category === category);
    setProducts(sortedProducts);
    setFilterType("category");
    const bannerCategory = sortedProducts[0]?.bannerCategory;
    setBanner(bannerCategory); 
    const bannerTitleSkin = sortedProducts[0]?.bannerCategoryTitle;
    setBannerTitle(bannerTitleSkin);
    const bannerCategoryText = sortedProducts[0]?.bannerCategoryText;
    setBannerText(bannerCategoryText); 
  };

  const sortByBestsellers = () => {
    const bestsellerProducts = [...originalProducts].filter((product) => product.bestseller === "true");
    setProducts(bestsellerProducts);
    setFilterType("bestseller");
    const bannerBestsellers = bestsellerProducts[0]?.bannerBestsellers; 
    setBanner(bannerBestsellers); 
    const bannerTitleBestsellers = bestsellerProducts[0]?.bannerTitleBestsellers; 
    setBannerTitle(bannerTitleBestsellers);
    const bannerTextBestsellers = bestsellerProducts[0]?.bannerTextBestsellers;
    setBannerText(bannerTextBestsellers); 
  };

  return (
    <>
    <div>
      <Banner backgroundImage={banner} title={bannerTitle} desc={bannerText}/>
      </div>
      <div className="flex pt-[42px] bg-main-background">
        <div className="layout flex flex-col md:flex-row lg:flex-row">
      <Filter 
      onSortByAlphabet={sortByAlphabet} 
      onSortByPrice={sortByPrice} 
      onSortBySkinType={sortBySkinType}
      onSortBysortByCategory={sortByCategory}
      onSortByBestsellers={sortByBestsellers}  />
      <div className=""> 
        <div className="flex">
          <ul className="flex flex-wrap ">       
            {products.map(({ id, img, alt, text, btn, price }) => (
              <li key={id} className="w-[160px] mr-[10px] lg:w-[322px] lg:mr-[16px] ml-0 mb-[28px] place-items-center">
                <Link href={`/products/${id}`}>
                <Image
                  src={img}
                  alt={alt}
                  width={322}
                  height={483}
                  className="mr-0 ml-0 mb-[20px] h-[248px] w-full lg:h-[483px] items-center place-items-center"
                />
                </Link>
                <div className="mb-[10px] h-[86px] w-full text-center">
                  <p className="">{text}</p>
                </div>
                <div className="justify-center">
                <button type="button" onClick={() => handleButtonClick({img, text, price, id})} className="w-full h-[50px] ml-0 mr-0 text-center border bg-btn-bg-primery-color">
                        {btn}
                      </button>
                      <Modal selectedProducts={selectedProducts} /> 
                </div>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};










