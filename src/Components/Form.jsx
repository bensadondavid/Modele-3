import { useContext, useState } from "react";
import { Context } from '../Context'
import { ring } from 'ldrs';


function Form(){

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
        number : "",
        message : ''
    })

    const handleChange = (e)=>{
        const { name,type, value, checked } = e.target
        setFormData((prev)=>({
            ...prev, 
            [name]: type === 'checkbox' ? checked : value
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
                    number : "",
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
       <>
        <form method='POST' onSubmit={handleSubmit}>
                <label>Nom*
                <input type="text" name="nom" className='nom' value={formData.nom} required onChange={handleChange}/>
                </label>
                <label>Prénom*
                <input type="text" name="prenom" className='prenom' value={formData.prenom} required onChange={handleChange}/>
                </label>
                <div className="presence">
                    <label>
                    <input type="radio" name='presence' value="assisteront" checked={formData.presence === 'assisteront'} required onChange={handleChange} className='square-checkbox'/>
                    Assisteront
                    </label>
                    {formData.presence === 'assisteront' ?
                    <div className="present">
                            <label>
                            <input type="checkbox" name="mairie" checked={formData.mairie} onChange={handleChange} className='square-checkbox'/>
                            Mairie</label>
                            <label>
                            <input type="checkbox" name="henne" checked={formData.henne} onChange={handleChange} className='square-checkbox'/>
                            Henné</label>
                            <label>
                            <input type="checkbox" name="houppa" checked={formData.houppa} onChange={handleChange} className='square-checkbox'/>
                            Houppa</label>
                            <label>
                            <input type="checkbox" name="poolParty" checked={formData.poolParty} onChange={handleChange} className='square-checkbox'/>
                            Pool Party</label>
                            <label>
                            <input type="checkbox" name="chabat" checked={formData.chabat} onChange={handleChange} className='square-checkbox'/> 
                            Chabat</label>
                        <div className="number">
                            <label>Nombre de personnes*
                            <input type="number" name="number" value={formData.number} onChange={handleChange} className="person-number" required/>
                            </label>
                        </div>
                    </div>
                    :
                    null
                    }
                    <label>
                    <input type='radio' name='presence' value="n'assisteront pas" checked={formData.presence === "n'assisteront pas"} required onChange={handleChange} className='square-checkbox'/>
                    N'assisteront pas
                    </label>
                </div>
                <label className="label-textarea">Message pour les mariés</label>
                <textarea name="message" value={formData.message} onChange={handleChange} />
                <button type='submit' className='submit-button'> 
                    {isLoading ? 
                    <l-ring size="20" stroke="5" bg-opacity="0" speed="2" color="black"></l-ring> 
                    :
                    'Envoyer'
                    }
                    </button>
            </form>
       </>
   )
}

export default Form