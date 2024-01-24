import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./ModalContext";
import Image from 'next/image';
import close from "../../public/icon/close.svg";
import trash from "../../public/icon/trash.svg";
import { ModalPrice } from "./ModalPrice";
import { CalculateTotalPrice } from "./CalculateTotalPrice";

export const Modal = ({ children, selectedProducts }) => {
  const { isOpen, closeModal, removeContent } = useContext(ModalContext);
  if (!isOpen) return null;

  return createPortal(
    <div  className="fixed flex justify-end items-start top-0 left-0 w-full h-full bg-bg-modal-basket"> 
      <div style={{
        width: "50%",
        height: "100%",
      }}
      className="relative overflow-y-auto bg-main-background">
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
        {selectedProducts.map(content => {
                    const { img, text, price, id, count } = content; 
                    return (
            <div key={id} className="flex space-between p-8"> 
              <Image
              src={img}
              alt="product"
              width={157}
               height={236}
               className="w-[157px] h-[236px] mr-[19px]"
              />
                <div className="flex flex-col text-start">
              <p className="w-[360px] h-[85px] mb-[19px] text-start text-lg font-bold">{text}</p>
              <div className="flex flex-row mb-9">
                <div className="flex flex-col">
              <ModalPrice price={price} />
               </div>
              <button onClick={() => { removeContent(id);}} className="mt-12">
                <Image
                src={trash}
                alt="trash-basket-button"
                width={24}
                height={24}
                className="flex flex-row ml-9"
                />
               </button>
               </div>
              </div>
          </div>
          )
        })}
          <div className="sticky bottom-0 w-full h-[174px] bg-second-backround py-9">
          <CalculateTotalPrice  />
      </div>
      </div> 
    </div>,
    document.body
  );
};





// export const Modal = ({ children, selectedProducts }) => {
//   const { isOpen, closeModal, removeContent } = useContext(ModalContext);
//   if (!isOpen) return null;
  
//   return createPortal(
//     <div  className="fixed flex justify-end items-start top-0 left-0 w-full h-full bg-bg-modal-basket"> 
//       <div style={{
//         width: "50%",
//         height: "100%",
//       }}
//       className="relative overflow-y-auto bg-main-background">
//         {children}
//         <div className="flex justify-between p-8">
//         <h3 className="text-3xl">Кошик</h3>
//         <button onClick={closeModal}>
//             <Image 
//              src={close}
//              alt="close-button"
//              width={44}
//              height={44}
//              className=""
//             />
//             </button>
//         </div>
//         {selectedProducts.map(content => {
//                     const { img, text, price, id, count } = content; 
//                     return (
//             <div key={id} className="flex space-between p-8"> 
//               <Image
//               src={img}
//               alt="product"
//               width={157}
//                height={236}
//                className="w-[157px] h-[236px] mr-[19px]"
//               />
//                 <div className="flex flex-col text-start">
//               <p className="w-[360px] h-[85px] mb-[19px] text-start text-lg font-bold">{text}</p>
//               <div className="flex flex-row mb-9">
//                 <div className="flex flex-col">
//               <ModalPrice price={price} />
//                </div>
//               <button onClick={() => { removeContent(id);}} className="mt-12">
//                 <Image
//                 src={trash}
//                 alt="trash-basket-button"
//                 width={24}
//                 height={24}
//                 className="flex flex-row ml-9"
//                 />
//                </button>
//                </div>
//               </div>
//           </div>
//           )
//         })}
//           <div className="sticky bottom-0 w-full h-[174px] bg-second-backround py-9">
//           <CalculateTotalPrice /> 
//       </div>
//       </div> 
//     </div>,
//     document.body
//   );
// };