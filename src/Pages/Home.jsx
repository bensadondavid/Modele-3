import { useContext, useState } from 'react';
import { Context} from '../Context';
import Mairie from './Mairie'
import Henne from './Henne'
import Houppa from './Houppa'
import BeachParty from './BeachParty';

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <Mairie />
            <Henne />
            <Houppa />
            <BeachParty />
        </div>

    )
}

export default Home