import { useContext, useState } from 'react'
import { Context } from '../Context'
import { ring } from 'ldrs';

function Response(){

    ring.register();
    const [isLoading, setIsLoading] = useState(false)

    const { language } = useContext(Context)

    const urlForm = 'cloudflare'

    const [formData, setFormData] = useState({
        nom : '',
        prenom : '',
        presence : '',
        mairie : false,
        henne : false,
        houppa : false,
        poolParty : false,
        chabat : false, 
        number : 0,
        message : ''
    })

    const handleChange = (e)=>{
        const { name,type, value, checked } = e.target
        setFormData((prev)=>({
            ...prev, 
            [name]: type === 'checkbox' ? checked 
              : type === 'number' ? Number(value) || 0 
              : value
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setIsLoading(true)

        try{
            const response = await fetch(urlForm, {
                method : "POST", 
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData)
            })

            const data = await response.json()
            console.log(data);
            
            if(response.ok){
                alert("Merci pour votre réponse !")
                setFormData({
                    nom : '',
                    prenom : '',
                    presence : "",
                    mairie : false,
                    henne : false,
                    houppa : false,
                    poolParty : false,
                    chabat : false, 
                    number : 0,
                    message : ''
                })
            }
            else{
                alert('Réponse non envoyée, un problème est survenue')
            }
        }
        catch(error){
            alert('Erreur serveur')
            console.error(error)
        }
    }

    return(

        <div className="response">
            <h1 className="response-title">LA RÉPONSE</h1>
            <p className='reponse-souhaite'>Réponse souhaitée dès réception</p>

            <form method='POST' onSubmit={handleSubmit}>
                <label>Nom *</label>
                <input type="text" name="nom" className='nom' value={formData.nom} required onChange={handleChange}/>
                <label>Prénom *</label>
                <input type="text" name="prenom" className='prenom' value={formData.prenom} required onChange={handleChange}/>
                <div className="presence">
                    <label>Assisteront</label>
                    <input type="radio" name='presence' value="assisteront" checked={formData.presence === 'assisteront'} required onChange={handleChange}/>
                    {formData.presence === 'assisteront' ?
                    <div className="present">
                        <label>Mairie</label>
                            <input type="checkbox" name="mairie" checked={formData.mairie} onChange={handleChange}/>
                        <label>Henné</label>
                            <input type="checkbox" name="henne" checked={formData.henne} onChange={handleChange}/>
                        <label>Houppa</label>
                            <input type="checkbox" name="houppa" checked={formData.houppa} onChange={handleChange}/>
                        <label>Pool Party</label>
                            <input type="checkbox" name="poolParty" checked={formData.poolParty} onChange={handleChange}/>
                        <label>Chabat</label>
                            <input type="checkbox" name="chabat" checked={formData.chabat} onChange={handleChange}/> 
                        <div className="number">
                            <label>Nombre de personnes</label>
                            <input type="number" name="number" value={formData.number} onChange={handleChange}/>
                        </div>
                    </div>
                    :
                    null
                    }
                    <label>N'assisteront pas</label>
                    <input type='radio' name='presence' value="n'assisteront pas" checked={formData.presence === "n'assisteront pas"} required onChange={handleChange}/>
                </div>
                <label>Message pour les mariés</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
                <button type='submit' className='submit-button'> 
                    {isLoading ? 
                    <l-ring size="20" stroke="5" bg-opacity="0" speed="2" color="black"></l-ring> 
                    :
                    'Envoyer'
                    }
                    </button>
            </form>
        </div>

    )
}

export default Response