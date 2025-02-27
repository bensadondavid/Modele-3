import { useContext } from 'react';
import { Context} from '../Context';
import Musique from '../Components/Musique'
import Mairie from './Mairie'
import Henne from './Henne'
import Houppa from './Houppa'
import BeachParty from './BeachParty';
import Chabat from './Chabat';

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <p className='bsd'>בס"ד</p>
            <Musique />
            <Mairie />
            <Henne />
            <Houppa />
            <BeachParty />
            <Chabat />
        </div>

    )
}

export default Home