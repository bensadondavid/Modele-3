import { useContext } from "react";
import { Context } from '../Context'
import LocationIcon from "../assets/icons-svg/LocalisationIcon";


const WazeButton = ({ name, lat, long, iconWidth, iconHeight, iconColor }) => {

  const { language } = useContext(Context)

  const handleOpenWaze = () => {
    // Coordonnées de la destination (latitude et longitude)
    const latitude = lat; 
    const longitude = long;

    // URL pour ouvrir Waze
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

    // Redirection vers l'URL
    window.location.href = wazeUrl;
  };

  return (
    <div className={name}>
      <a className="waze-link" onClick={handleOpenWaze}>{language === "francais" ? "Itineraire Waze" : "מסלול ב-waze"}</a>
      <LocationIcon width={iconWidth} height={iconHeight} color={iconColor} />
    </div>
  );
};

export default WazeButton;