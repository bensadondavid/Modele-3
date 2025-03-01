import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(

        <div className="response">
            <div className="response-card">
                <img src="fleur-fonce-haut.png" className='fleur-fonce-haut' />
                <h1 className="response-title">LA RÉPONSE</h1>
                <p className='reponse-souhaite'>Réponse souhaitée dès réception</p>
                <Form />
                <img src="fleur-fonce-bas.png" className='fleur-fonce-bas' />
            </div>
        </div>

    )
}

export default Response