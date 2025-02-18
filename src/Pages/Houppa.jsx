function Houppa(activeLanguage, handleLanguage){

    return(

        <div className="houppa">
            <div className="houppa-fleur">
                    <img src="fleur-bleue-gauche.png" className='fleur-bleue-gauche' />
                    <h1 className="houppa-titre">La Houppa</h1>
                    <img src="fleur-bleue-droite.png" className="fleur-bleue-droite" />
                </div>
            <div className="houppa-card">
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
                <p className="houppa-text">Ont la joie de vous faire part du mariage de leur petits-enfants et enfants</p>
                <h1 className="noms"><span>Lola</span> <span>&</span><span>Hillel</span></h1>
                <p className="houppa-text">et vous prient de bien vouloir assister à la houppa qui aura lieu</p>
                <h3 className="houppa-date">
                    Lundi 03 Juin 2024 <br />
                    כו' באייר תשפ"ה <br />
                    A 18h00
                </h3>
                <p className="houppa-endroit">
                    A la salle Emerald Garden <br />
                    Park Taassit Shourak, Beth Shemesh
                </p>
                <p className="houppa-reception">La Houppa sera suivie d'une réception</p>
                <p className="houppa-pensee">"Une tendre pensée pour nos grands-parents toujours présents dans nos coeurs"</p>
            </div>
        </div>

    )
}

export default Houppa