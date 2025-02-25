import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
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