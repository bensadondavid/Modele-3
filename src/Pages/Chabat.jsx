import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Chabat(){

    const { language } = useContext(Context)

    return(

        <div className="chabat">
           <div className="chabat-card">
                <img src="fleur-fonce-haut.png" className='fleur-fonce-haut' />
                <h1 className='chabat-title'>LE CHABAT</h1>
                <img src="logo-chabat.png" className='logo-chabat'/>
                <div className="chabat-noms">
                    <h1 className='chabat-nom-1'>Victoria</h1>
                    <h1 className='chabat-and'>&</h1>
                    <h1 className='chabat-nom-2'>Alone</h1>
                </div>
                <p className='chabat-text'>Seront ravis de partager leur chabat hatan avec vous </p>
                <p className='chabat-date'>Le vendredi 8 <br /> et samedi 9 juin 2024</p>
                <p className='chabat-endroit'>A la synagogue Shaare Elyahou 13 guideon haozner<br />Jérusalem</p>
                <Waze name={'waze-chabat'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#C6A58A' />
                <SaveTheDate name={'save-the-date-chabat'} date={[2024, 6, 3, 12, 0]} iconColor='#C6A58A' iconHeight='18px' iconWidth='21px'/>
                <img src="fleur-fonce-bas.png" className='fleur-fonce-bas' />
            </div>
        </div>

    )
}

export default Chabat