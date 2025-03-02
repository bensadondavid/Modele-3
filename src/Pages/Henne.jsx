import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Henne(){

    const { language } = useContext(Context)

    return(

        <div className="henne">
            <div className="henne-card">
                <img src="fleur-clair-haut.png" className='fleur-fonce-haut' />
                <h1 className='henne-title'>LE HENNÉ</h1>
                <img src="henne-logo.png" className='henne-logo'/>
                <div className="henne-noms">
                    <h1 className='henne-nom-1'>Victoria</h1>
                    <h1 className='henne-and'>&</h1>
                    <h1 className='henne-nom-2'>Alone</h1>
                </div>
                <p className='henne-text'>Ont la joie de vous convier au henné</p>
                <p className='henne-date'>le Dimanche 3 juin 2024 <br /> A 20h00 </p>
                <p className='henne-endroit'>A la salle de fetes ORION <br /> Saint brice sous foret, 95350 </p>
                <Waze name={'waze-henne'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#402E20' />
                <SaveTheDate name={'save-the-date-henne'} date={[2024, 6, 3, 12, 0]} iconColor='#402E20' iconHeight='18px' iconWidth='21px'/>
                <img src="fleur-clair-bas.png" className='fleur-fonce-bas' />
            </div>
        </div>

    )
}

export default Henne