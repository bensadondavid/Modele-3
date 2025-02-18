import Houppa from "./Houppa"

function Home(activeLanguage, handleLanguage){

    return(

        <div className="home">
            <img src="logo-bleu.png" className="logo-bleu" />
            <Houppa />
        </div>

    )
}

export default Home