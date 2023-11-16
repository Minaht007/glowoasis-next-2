import Hero from  "../../components/hero/hero"
import AdvantagesMain from "@/components/advantages/advantages"
import Bestsellers from "../../components/bestsellers/bestsellers"
import Pluses from "../../components/pluses/threePluses"
import RecomendKits from "../../components/recomKits/recomenKits"
import Comertional from "../../components/comertional/comartional"

const MainPage = () => {
    return (
        <>
        <Hero />
        <AdvantagesMain />
        <Bestsellers />
        <Pluses />
        <RecomendKits />
        <Comertional />
        </>
        
    )
}

export default MainPage