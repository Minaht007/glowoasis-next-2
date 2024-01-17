import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./ModalContext";
import Image from 'next/image';
import close from "../../public/icon/close.svg";
import { Counter } from "../utils/Counter";
import { ProductBtnTotalPrice } from "../allProducts/ProductBtnTotalPrice";

export const Modal = ({ children}) => {
    const { isOpen, closeModal, content } = useContext(ModalContext);
    const { img, text, price  } = content;
  
    if (!isOpen) return null;
  
    return createPortal(
      <div  className="fixed flex justify-end items-start top-0 left-0 w-full h-full bg-bg-modal-basket opacity-50"> 
        <div style={{
          width: "50%",
          height: "100%",
          padding: "1em",
        }}
        className=" bg-main-background">
          {children}
          <div className="flex justify-between p-8">
          <h3 className="text-3xl">Кошик</h3>
          <button onClick={closeModal}>
              <Image 
               src={close}
               alt="close-button"
               width={44}
               height={44}
               className=""
              />
              </button>
          </div>
          <div className="flex space-between p-8"> 
              <Image
              src={img}
              alt="product"
              width={157}
               height={236}
               className="mr-[19px]"
              />
                <div className="flex flex-col text-start">
              <p className="w-[197px] mb-[64px] text-start text-lg font-bold">{text}</p>
              <Counter  />
              </div>
          </div>
          <div className="h-[174px] bg-second-backround pt-[35px] "> 
          <h3 className="text-3xl mb-[20px]">Повна вартість $</h3>
          <button className="border w-[451px] h-[50px] bg-btn-bg-primery-color text-sm">ПІДТВЕРДИТИ</button>
       <ProductBtnTotalPrice price={price}/>
        </div>
        </div>
      </div>,
      document.body
    );
  };

