// Installer ldrs
import { useState } from "react";
import { ring } from 'ldrs';


function Form({ activeLanguage }) {

    // Enregistre le Web Component globalement
    ring.register();

    const urlForm = "cloudflare url";

    const initialFormData = {
        nom: "",
        prenom: "",
        number: "",
        message: "",
        presence: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const [isSent, setIsSent] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSent(true);
    
        try {
            const response = await fetch(urlForm, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            console.log("Réponse serveur :", data);
    
            if (response.ok && data.success) {
                alert("Merci pour votre réponse !");
                setFormData(initialFormData);
            } else {
                alert("Erreur : " + (data.error || "La réponse n'a pas pu être envoyée."));
            }
        } catch (error) {
            console.error("Erreur :", error);
            alert("Erreur lors de l'envoi.");
        } finally {
            setIsSent(false);
        }
    };

    

    return (
            <form method="post" onSubmit={handleSubmit}>
                {activeLanguage === "francais" ? (
                    <>
                        <div className="rsvp-titre">
                            <h1 className="votre-reponse">Votre réponse</h1>
                            <p className="reponse-souhaite">Réponse souhaitée dès réception</p>
                        </div>
                        <div className="rsvp-inputs">
                                <label style={{ marginTop: "30px" }}>Nom *</label>
                                <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />

                                <label>Prénom *</label>
                                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />

                                <div className="presence">
                                    <label>
                                        <input
                                            type="radio"
                                            name="presence"
                                            value="assisteront"
                                            checked={formData.presence === "assisteront"}
                                            onChange={handleChange}
                                            className="square-checkbox"
                                        />{" "}
                                        Assisteront
                                    </label>
                                    {formData.presence === "assisteront" && (
                                        <>
                                            <label>Nombre de personnes</label>
                                            <input
                                                type="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={(e) => setFormData({ ...formData, number: parseInt(e.target.value) || "" })}
                                                required
                                            />
                                        </>
                                    )}

                                    <label>
                                        <input
                                            type="radio"
                                            name="presence"
                                            value="n_assisteront_pas"
                                            checked={formData.presence === "n_assisteront_pas"}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    presence: e.target.value,
                                                    number: "", 
                                                });
                                            }}
                                            className="square-checkbox"
                                        />{" "}
                                        N'assisteront pas
                                    </label>
                                </div>

                                <label>Message pour les mariés</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} />
                                
                                {!isSent ? 
                                    <button type="submit">Envoyer</button>
                                    :
                                    <div className="loader">
                                        <l-ring size="40" stroke="5" bg-opacity="0" speed="2" color="black"></l-ring>
                                    </div>
                                }
                        </div>
                    </>
                ) : (
                    <>
                        <div className="reponse">
                            <h1>תשובתכם</h1>
                            <p className="reponse">נודה לתשובתכם בהקדם לאחר קבלת ההודעה</p>
                        </div>

                        <label style={{ marginTop: "30px" }}>שם משפחה *</label>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />

                        <label>שם פרטי *</label>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />

                        <div className="presence">
                            <label>
                                <input
                                    type="radio"
                                    name="presence"
                                    value="assisteront"
                                    checked={formData.presence === "assisteront"}
                                    onChange={handleChange}
                                    className="square-checkbox"
                                />{" "}
                                ישתתפו
                            </label>

                            {formData.presence === "assisteront" && (
                                <>
                                    <label>מספר המשתתפים</label>
                                    <input
                                        type="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={(e) => setFormData({ ...formData, number: parseInt(e.target.value) || "" })}
                                        required
                                    />
                                </>
                            )}

                            <label>
                                <input
                                    type="radio"
                                    name="presence"
                                    value="n_assisteront_pas"
                                    checked={formData.presence === "n_assisteront_pas"}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            presence: e.target.value,
                                            number: "", 
                                        });
                                    }}
                                    className="square-checkbox"
                                />{" "}
                                לא ישתתפו
                            </label>
                        </div>

                        <label>הודעה לחתן והכלה</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} />

                        {!isSent ? 
                            <button type="submit">שלח</button>
                            :
                            <div className="loader">
                                <l-ring size="40" stroke="5" bg-opacity="0" speed="2" color="black"></l-ring>
                            </div>
                        }

                    </>
                )}
            </form>
    );
}

export default Form;