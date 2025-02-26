import { useContext, useState } from 'react';
import { Context} from '../Context';
import Mairie from './Mairie'
import Henne from './Henne'

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <Mairie />
            <Henne />
        </div>

    )
}

export default Home