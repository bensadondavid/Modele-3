import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <div className="logo-entry">
                <img src="logo-av.png" className='logo-av-entry' />
                <p className='entry-date'>03 . 06 . 2024</p>
            </div>
            <p className="entry-noms">Victoria <span className='and'>&</span> Alone</p>
            <CountDown />
            <Link className='invit-link'><button className='invit-button'>Voir l'invitation</button></Link>
        </div>

    )
}

export default Entry