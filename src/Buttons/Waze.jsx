import { useContext } from "react";
import { Context } from '../Context'


const WazeButton = () => {

  const { language } = useContext(Context)

  const handleOpenWaze = () => {
    // Coordonnées de la destination (latitude et longitude)
    const latitude = "31.915749"; 
    const longitude = "34.778700";

    // URL pour ouvrir Waze
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

    // Redirection vers l'URL
    window.location.href = wazeUrl;
  };

  return (
    <button className="waze" onClick={handleOpenWaze}>{language === "francais" ? "Ouvrir dans Waze" : "מסלול ב-waze"}</button>
  );
};

export default WazeButton;