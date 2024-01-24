import { getOneIngredient } from "@/api/ingredients/data";
import Image from "next/image";

export const IngredientsCart = async () => {
    const ingredients = await getOneIngredient();

    return (
        <div className="">
          <ul className="flex flex-row flex-wrap justify-between">       
            {ingredients.map(({ id, img, title, description, included }) => (
              <li key={id} className="w-[403px] h-[570px] bg-btn-bg-primery-color mb-6 mt-auto">
                <Image
                  src={img}
                  alt={""}
                  width={403}
                  height={201}
                  className="mb-8"
                />
                <div className="px-8 pb-10 flex flex-col h-[350px] justify-between">
                    <div>
                <p className="text-base font-bold mb-2.5 text-start">{title}</p>
                <p className="text-base text-start">{description}</p>
                </div>
                <div className="">
                <p className="text-base font-bold text-start mt-auto">{included.text}</p>
                <p className="text-base font-bold text-start mt-auto">{included.text1}</p>
                </div>
                </div>
                </li>
                ))}
                </ul>
                </div>
     )
}
