import Houppa from "./Houppa"
import Chabat from "./Chabat"

function Home(activeLanguage, handleLanguage){

    return(

        <div className="home">
            <img src="kol-sasson-bleu.png" className="kol-sasson" />
            <img src="logo-bleu.png" className="logo-bleu" />
            <Houppa />
            <Chabat />
        </div>

    )
}

export default Home