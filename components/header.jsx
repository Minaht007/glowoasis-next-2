import Image from "next/image"
import searchGlass from "../public/icon/searchGlass.svg"
import Logo from "../public/img/logo.png"
import regIcon from "../public/icon/person.svg"
import basket from "../public/icon/backet.svg"
import burger from "../public/icon/burger.svg"

export const  Header =() => {
    return (
        <section>
            <div className="bg-[#D0C3BB] h-8 w-full"></div>
            <div className="flex">
                <div className="flex">
                    <div className="relative  hidden md:block lg:visible">
                        <input type="serch" placeholder="пошук" className="p-3 w-[219px] h-[37px] " />
                        <button className="absolute top-2 left-2">
                            <Image                            
                            src={searchGlass}
                            width={15}
                            height={15}
                            alt="searchGlass"
                            />
                        </button>

                        <button className="visible sm:visible md:invisible lg:invisible">
                            <Image
                            src={burger}
                            width={15}
                            height={10}
                            alt="burger"
                            />
                        </button>
                    </div>
                    {/* контейнер з лого */}
                    <div>
                        <Image
                        className="w-[114px] h-5 lg:w-[249px] lg:h-[45px]"
                        src={Logo}                       
                        alt="Logo"
                        />
                    </div>
                     {/* контейнер з іконками */}
                     <div className="flex">
                        <Image
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