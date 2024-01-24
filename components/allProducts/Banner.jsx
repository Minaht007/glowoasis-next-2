
export const Banner = ({ backgroundImage, title, desc}) => {
    console.log(backgroundImage)
     return (
        <div className={`h-[243px] w-screen mr-0 ml-0 lg:pt-[68px] bg-cover bg-center bg-no-repeat bg-inherit`} style={{backgroundImage:`url(${backgroundImage})`}}>
             <div className="layout text-start">
                 <h2 className="text-start text-6xl font-bold text-[#FFF] mb-[11px]">{title}</h2>
                 <p className="text-start text-[#FFF] text-2xl">{desc}</p>
             </div>
         </div>
     );
 };
