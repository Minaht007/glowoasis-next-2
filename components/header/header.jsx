import Image from "next/image"
import searchGlass from "../../public/icon/searchGlass.svg"
import Logo from "../../public/img/logo.png"
import regIcon from "../../public/icon/person.svg"
import basket from "../../public/icon/backet.svg"
import burger from "../../public/icon/burger.svg"

export const  Header =() => {
    return (
        <section>
            <div className="bg-[#D0C3BB] h-8 w-full"></div>
            <div className="flex bg-[#fff]">
                <div className="flex">
                    <div className="relative  hidden md:block lg:visible ml-[96px] lg:pt-[14px]">
                        <input type="serch" placeholder="пошук" className="pl-10 w-[219px] h-[37px] " />
                        <button className="absolute top-6 left-3">
                            <Image                            
                            src={searchGlass}
                            width={20}
                            height={20}
                            alt="searchGlass"
                            />
                        </button>                       
                    </div>

                    {/* контейнер з бургер */}
                    <div>
                    <button className="visible md:hidden lg:hidden ml-5 pt-4 pb-4">
                            <Image
                            src={burger}
                            width={15}
                            height={10}
                            alt="burger"
                            />
                        </button>
                    </div>

                    {/* контейнер з лого */}
                    <div className="ml-16 pt-[10px] pb-[10px] lg:ml-[270px]">
                        <Image
                        className="w-[114px] h-5 lg:w-[249px] lg:h-[45px]"
                        src={Logo}                       
                        alt="Logo"
                        />
                    </div>
                     {/* контейнер з іконками */}
                     <div className="flex ml-[148px] lg:ml-[500px]">
                        <Image
                        className="hidden md:block lg:visible lg:mr-3"
                        src={regIcon}
                        width={19}
                        height={21}
                        alt="regIcon"
                         />
                          <Image                          
                        src={basket}
                        width={19}
                        height={24}
                        alt="basket"
                         />
                     </div>
                </div>
            </div>
        </section>
    )
}