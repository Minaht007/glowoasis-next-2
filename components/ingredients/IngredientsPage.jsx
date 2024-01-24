import Image from "next/image";
import { AllProductIcons } from "../utils/AllProductsIconsComponent";
import { IngredientsCart } from "./IngredientsCart";
import bannedIngredients from "../../public/img/ingredients/banned-ingredients.png"


export const Ingredients = () => {
    return (
        <div className="pt-11 pb-20 bg-main-background">
            <div className="layout ">
            <div className="flex flex-col items-center">
                <div className="w-[827px] mb-16">
                <h2 className="text-6xl font-bold text-center mb-10">краса, що трансформується: наш революційний догляд за шкірою</h2>
                <p className="text-lg">Ми особливо зосереджуємо свою увагу на безпечному складу кожного нашого засобу, звертаючи увагу на кожен інгредієнт, уникаючи всіх шкідливих, навіть мінімально. Ми завжди забезпечуємо повну прозорість щодо того, що міститься у наших засобах для догляду за шкірою. Ми використовуємо інгредієнти, що є максимально безпечними та водночас ефективними; також особливу увагу звертаємо на пакування та мінімізацію шкідливого впливу на навколишнє середовище.</p>
                </div>
                <div className="mb-14">
                    <h3 className="text-2xl font-bold mb-8">ВСІ НАШІ ТОВАРИ</h3>
                <AllProductIcons />
                </div>
            </div>
           <div className="flex mb-[68px]">
            <Image
            src={bannedIngredients}
            alt={bannedIngredients}
            width={700}
            height={700}
            className="mr-12"/>  
           <div className="">
            <p className="text-base font-bold text-start mb-2">Заборонені інгредієнти.</p>
            <p className="text-base mb-5 text-start">Ми з гордістю заявляємо, що виключаємо шкідливі токсини, які часто порушують барєр шкіри, включаючи 2,100 (і ця кількість продовжує зростати) інгредієнтів, визнаних потенційно шкідливими Європейським союзом, та за результатами наших власних досліджень.</p>
            <p className="text-base font-bold mb-2 text-start">Інгредієнти та побічні продукти тваринного походження.</p>
            <p className="text-base mb-5 text-start">Інгредієнти тваринного походження часто класифікуються як природного походження або одержані таким чином, щоб не зашкодити тваринам. Однак, варто розуміти, що політика соціального забезпечення для захисту тварин працює мінімально. Інгредієнти тваринного походження використовуються у заспокійливих засобах, емолієнтах, емульгаторах, барвниках, засобах для догляду за шкірою та волоссям тощо.</p>
            <p className="text-base font-bold mb-2 text-start">Синтетичні сульфати.</p>
            <p className="text-base text-start">Натрій лаурет сульфат (SLS) пов'язаний з подразненням та розладами ендокринної системи. Він також може викликати алергічні реакції та подразнення. SLS використовується як поверхнево-активна речовина для видалення бруду та олії з поверхонь, утворюючи піну.</p>
           </div>
           </div>
           <div className="flex flex-row justify-between mb-24">
            <div className="w-[591px]">
                <p className="text-base font-bold mb-2 text-start">Циклічний силікон/сілоксан:</p>
                <p className="text-base text-start">Сілоксан, хоча і використовується у косметиці, несе значні ризики. Відомо, що він токсичний, стійкий та може викликати розлади ендокринної системи, що може мати зв'язок із проблемами фертильності. Циклопентасилоксан, один із видів сілоксану, також може впливати на нейротрансмітери в нервовій системі.</p>
            </div>
            <div className="w-[591px]">
                <p className="text-base font-bold mb-2 text-start">Жодні жорсткі хімічні речовини:</p>
                <p className="text-base text-start">Ми виключили понад 2,100 інгредієнтів, включаючи жорсткі хімічні речовини, такі як парабени, фталати, етаноламінові сполуки (MEA, DEA, TEA), триклозан, хімічні УФ-фільтри (октіноксат та оксібензон), парафіни та петролатум, формальдегід та речовини, що виділяють формальдегід, а також ВНА/ВНТ.</p>
            </div>
           </div>
           <p className="text-lg font-bold mb-10 text-start">ІНГРЕДІЄНТИ</p>
           <IngredientsCart />
        </div>
        </div>
    )
}