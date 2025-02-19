import { useState } from 'react';
import Houppa from "./Houppa"
import Chabat from "./Chabat"
import Form from "../Components/Form"

function Home(){

    const [activeLanguage, setActiveLanguage] = useState("francais"); 

    const handleLanguage = (language) => {
        setActiveLanguage(language); 
    }

    return(

        <div className="home">
            <img src="kol-sasson-bleu.png" className="kol-sasson" />
            <img src="logo-bleu.png" className="logo-bleu" />
            <Houppa activeLanguage={'francais'}/>
            <Chabat activeLanguage={'francais'}/>
            <Form activeLanguage={'francais'}/>
        </div>

    )
}

export default Home