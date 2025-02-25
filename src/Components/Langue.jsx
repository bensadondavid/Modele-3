import { useContext } from "react";
import { Context } from '../Context'

function Language(){

     const { language, setLanguage } = useContext(Context)

     const handleLanguage = ()=>{
        if(language === 'francais'){
            setLanguage('hebreu')
        }
        else if(language === 'hebreu'){
            setLanguage('francais')
        }
     }
    
    return(
        <>
        <div className="langue">
            <div className="langue-button">
                <button
                onClick={handleLanguage}
                className={`francais ${language === "francais" ? "active" : ""}`}
                >
                Fr
                </button>
                <button
                onClick={handleLanguage}
                className={`hebreu ${language === "hebreu" ? "active" : ""}`}
                >
                ע
                </button>
            </div>
        </div>
        </>
    )
}

export default Language