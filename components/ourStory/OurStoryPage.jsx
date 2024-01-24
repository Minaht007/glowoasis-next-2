import Image from "next/image";
import founder from "../../public/img/ourStory/about-founder.png";
import infographic from "../../public/img/ourStory/about-infographic.png";
import { AllProductIcons } from "../utils/AllProductsIconsComponent";



export const OurStory = () => {
    return (
      <div className="pt-11 pb-20 bg-main-background">
        <div className="layout">
        <div className="flex mb-16">
        <Image
        src={founder}
        alt={founder}
        width={591}
        height={673}
        className="mr-[68px]"/>
        <div className="flex flex-col text-start w-[591px]"> 
        <h2 className="text-6xl font-bold text-start mb-8">про бренд: історія розвитку glowoasis</h2>
        <p className="text-base mb-2 text-start">Після глибокого дослідження ми зрозуміли, що шкіра може отримати користь від пробіотиків так само, як наш організм, тому ми застосували ті ж самі принципи пробіотиків і внутрішнього здоров'я до догляду за шкірою. Ми створили Glowoasis, щоб використовувати силу веганських пробіотиків для здорової, збалансованої мікробіоти шкіри.</p>
        <p className="text-base mb-2 text-start">Більше десяти років ми присвятили розробці чистих, здорових та безпечних веганських засобів для догляду за руками, ногами та тілом для фахівців у галузі краси. Ця подорож привела нас до створення Glowoasis, бренду, який втілює наші погляди і цінності. З Glowoasis ми прагнемо допомогти кожному досягти оптимального здоров'я шкіри.</p>
        <p className="text-base mb-2 text-start">Для нас дуже важливо, щоб усі наші продукти були чистими й ефективними, тому ми переконалися, що у нас немає тисяч сумнівних інгредієнтів, оскільки ви не повинні вибирати між інгредієнтами, які корисні для вас, і тими, які працюють.</p>
        <p className="text-base mb-2 text-start">У результаті, ми хочемо, щоб кожен відчував себе впевнено “в своїй шкірі"</p>
        <p className="text-base font-bold text-start">ВЕРА ОХ + ДЖОЗЕФ ЧОЙ</p>
        </div>
        </div>
        <div>
            <div className="flex mb-14">
            <div className="flex flex-col">
                <h2 className="text-6xl font-bold text-start mb-8">магія у наших формулах</h2>
                <p className="text-base mb-2 text-start">Ми вважаємо, що важливо усунути першопричину проблем шкіри та
Правда полягає в тому, що більшість проблем зі шкірою виникають через незбалансований мікробіом. Ось чому ми наповнюємо наші формули запатентованими веганськими пробіотиками з капусти Напа. Наш інноваційний процес бродіння та агроекстракції допомагає зберегти всі основні поживні речовини капусти для користі для вашої шкіри.</p>
            <p className="text-base mb-2 text-start">Веганські пробіотики, коли їх поєднують з іншими інгредієнтами, які дбають про шкіру, та безпечними консервантами, утворюють ретельно продуману формулу, дружелюбну до мікробіоти, яка допомагає збалансувати та зміцнити бар'єр шкіри. Ми вибираємо веганські пробіотики, оскільки вони не подразнюють шкіру та є безпечними, без додавання будь-яких добавок. Вони також викидають менше вуглецю в атмосферу, що робить їх більш відповідальним вибором порівняно з пробіотиками на основі молока.</p>
           <p className="text-base mb-2 text-start">Ми виявили, що більшість засобів по догляду за шкірою залишаються на поверхні шкіри, не проникаючи в епідерміс, що перешкоджає надходженню необхідних поживних речовин. Щоб вирішити цю проблему, ми невпинно працювали над погодженням патенту на ліпосомну технологію, яка укриває наші веганські пробіотики захисними мікро-бульбашками, допомагаючи їм глибоко проникнути в шкіру для максимального поглинання та результатів.</p>
           <p className="text-base mb-2 text-start">Ми разом з нашим патентом на ліпосомну технологію революціонізували галузь догляду за шкірою.</p>
           </div>
        <Image
        src={infographic}
        alt={infographic}
        width={591}
        height={467}
        className="ml-9"/>
        </div>
        </div>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-8">ВСІ НАШІ ТОВАРИ</h3>
            <AllProductIcons />
        </div>
      </div>  
    )
}