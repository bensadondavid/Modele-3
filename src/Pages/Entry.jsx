import CountDown from '../Components/CountDown'
import { Link } from 'react-router-dom'

function Entry(activeLanguage, handleLanguage){

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <div className="logo-coutdown">
                <img src="logo-dore.png" className="logo-entry" />
                <CountDown />
            </div>
            <div className="voir-invit">
                <div className="lien">
                    <img src="fleur-gauche.png" className='fleur-gauche' />
                    <Link to='/home'>Voir l'invitation</Link>
                    <img src="fleur-droite.png" className='fleur-droite'/>
                </div>
                <img src="fleur-dore-bas.png" className='fleur-dore-bas' />
            </div>
        </div>

    )
}

export default Entry