// NE PAS OUBLIER D'INSTALLER ICS
import { createEvent } from "ics";
import { useContext } from "react";
import { Context } from '../Context'
import CalendarIcon from "../assets/icons-svg/CalendarIcon";

const SaveTheDate = ({ name, date, iconWidth, iconHeight, iconColor }) => {

  const { language } = useContext(Context)

  const handleDownload = () => {
    // Définir les détails de l'événement
    const event = {
      start: date, // [YYYY, MM, DD, HH, MM]
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
    <div className={name}>
      <a className="save-the-date-link" onClick={handleDownload}>{language === 'francais' ? 'Ajouter au calendrier' : 'הוסף ליומן'}</a>
      <CalendarIcon width={iconWidth} height={iconHeight} color={iconColor} />
    </div>
  );
};

export default SaveTheDate;