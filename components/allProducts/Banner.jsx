export const Banner = ({ backgroundImage="img/allProducts/banner.png", title, desc}) => {
    return (
        <div className={`layout h-[243px] mr-0 ml-0 lg:pl-[95px] lg:pt-[68px] bg-cover bg-center bg-no-repeat banner-bg`} style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className="text-start ml-[3px]">
                <h2 className="text-start text-6xl font-bold text-[#FFF] mb-[11px]">{title}</h2>
                <p className="text-start text-[#FFF] text-2xl">{desc}</p>
            </div>
        </div>
    );
};
