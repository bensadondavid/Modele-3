import { useContext, useState } from 'react';
import { Context} from '../Context';
import Houppa from "./Houppa"
import Chabat from "./Chabat"
import Form from "../Components/Form"

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <img src="kol-sasson-bleu.png" className="kol-sasson" />
            <img src="logo-bleu.png" className="logo-bleu" />
            <Houppa />
            <Chabat />
            <Form />
        </div>

    )
}

export default Home