import CountDown from '../Components/CountDown'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
        </div>

    )
}

export default Entry