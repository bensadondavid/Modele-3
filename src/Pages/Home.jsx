import { useContext, useState } from 'react';
import { Context} from '../Context';
import Mairie from './Mairie'

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <Mairie />
        </div>

    )
}

export default Home