

function Chabat(activeLanguage, handleLanguage){

    return(

        <div className="chabat">
            <div className="chabat-fleur">
                    <img src="fleur-chabat-gauche.png" className='fleur-chabat-gauche' />
                    <h1 className="chabat-titre">Le Chabat</h1>
                    <img src="fleur-chabat-droite.png" className="fleur-chabat-droite" />
                </div>
            <div className="chabat-card">
                <h1 className="chabat-noms"><span>Lola</span> <span>&</span><span>Hillel</span></h1>
                <p className="chabat-text">Seront ravis de partager leur chabat hatan avec vous</p>
                <p className="chabat-date">Les Vendredi 08 et Samedi 09 Juin 2024</p>
                <p className="chabat-endroit">
                    <strong>A la synagogue Shaare Elyahou</strong><br />
                    13 Guideon Haozner, Jerusalem
                </p>
                <a href="" className="chabat-waze">Itinéraire Waze</a>
            </div>
        </div>

    )
}

export default Chabat