import { useState, useEffect } from "react";

function CountDown(){

    const calculateTimeLeft = () => {
        const now = new Date();
        const weddingDate = new Date("2025-08-24T17:30:00");
        const difference = weddingDate.getTime() - now.getTime();
    
        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      return(
        <>
         <div className="countdown">
              <div className="time">{timeLeft.days} <br /> days</div>
              <div className="time">{timeLeft.hours} <br /> hours</div>
              <div className="time">{timeLeft.minutes} <br /> minutes</div>
              <div className="time">{timeLeft.seconds} <br /> seconds</div>
        </div>
        </>
      )
      
}

export default CountDown