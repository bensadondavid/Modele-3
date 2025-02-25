// NE PAS OUBLIER D'INSTALLER ICS
import { createEvent } from "ics";
import { useContext } from "react";
import { Context } from '../Context'

const SaveTheDate = () => {

  const { language } = useContext(Context)

  const handleDownload = () => {
    // Définir les détails de l'événement
    const event = {
      start: [2025, 8, 24, 19, 15], // [YYYY, MM, DD, HH, MM]
      duration: { hours: 4 },
      title: "Save the Date: Lola & Hillel's wedding",
      location: "Amaré, Ness Tsiona",
    };

    // Générer le fichier ICS
    createEvent(event, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }

      // Créer un fichier Blob et ouvrir dans Safari
      const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      window.location.href = url; // Ouvrir dans Safari
    });
  };

  return (
    <button className="save-the-date" onClick={handleDownload}>{language === 'francais' ? 'Ajouter au calendrier' : 'הוסף ליומן'}</button>
  );
};

export default SaveTheDate;