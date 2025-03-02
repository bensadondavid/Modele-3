import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function BeachParty(){

    const { language } = useContext(Context)

    return(

        <div className="beach">
            <div className="beach-card">
                <img src="fleur-fonce-haut.png" className='fleur-fonce-haut' />
                <h1 className='beach-title'>LA POOL PARTY</h1>
                <img src="beach-logo.png" className='beach-logo'/>
                <p className='beach-text'>Afin de prolonger ces precieux instants avec vous </p>
                <div className="beach-noms">
                    <h1 className='beach-nom-1'>Victoria</h1>
                    <h1 className='beach-and'>&</h1>
                    <h1 className='beach-nom-2'>Alone</h1>
                </div>
                <p className='beach-text'>vous convient à une réception au bord de l'eau </p>
                <p className='beach-date'>Le Dimanche 3 juin 2024 <br /> A 20h00 </p>
                <p className='beach-endroit'>A L’hotel Ritz-Carlton <br /> 4 hashunit street Hertzilia </p>
                <p className='beach-dress-code'>DRESS CODE : WHITE</p>
                <Waze name={'waze-beach'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='##806548' />
                <SaveTheDate name={'save-the-date-beach'} date={[2024, 6, 3, 12, 0]} iconColor='#806548' iconHeight='18px' iconWidth='21px'/>
                <img src="fleur-fonce-bas.png" className='fleur-fonce-bas' />
            </div>
        </div>

    )
}

export default BeachParty