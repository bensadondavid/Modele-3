import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Houppa(){

    const { language } = useContext(Context)

    return(

        <div className="houppa">
            <img src="logo-av.png" className='logo-above-houppa' />
            <img src="kol-sasson.png" className='kol-sasson' />
            <div className="houppa-card">
                <img src="fleur-fonce-haut.png" className='fleur-fonce-haut' />
                <h1 className='houppa-title'>LA HOUPPA</h1>
                <img src="logo-houppa.png" className='houppa-logo'/>
                <div className="parents">
                    <div className="parents-fille">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                    <div className="parents-garcon">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                </div>
                <p className='houppa-text'>Ont la joie de vous faire part du mariage de leurs petits enfants et enfants</p>
                <div className="houppa-noms">
                    <h1 className='houppa-nom-1'>Victoria</h1>
                    <h1 className='houppa-and'>&</h1>
                    <h1 className='houppa-nom-2'>Alone</h1>
                </div>
                <p className='houppa-text'>et vous prient de bien vouloir assister a la houppa ainsi qu’a la soiree  qui aura lieu le</p>
                <p className='houppa-date'>Lundi 3 juin 2024 <br />כו’באייר תשפה <br />A partir de 18h00   </p>
                <p className='houppa-endroit'>A la salle Emeralde Garden <br /> Park Taassit Shourak, Beth Shemesh </p>
                <p className="pensee">"Une tendre pensée pour nos grands parents toujours presents dans nos coeurs"</p>
                <Waze name={'waze-houppa'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#271A11' />
                <SaveTheDate name={'save-the-date-houppa'} date={[2024, 6, 3, 12, 0]} iconColor='#271A11' iconHeight='18px' iconWidth='21px'/>
                <img src="fleur-fonce-bas.png" className='fleur-fonce-bas' />
            </div>
        </div>

    )
}

export default Houppa