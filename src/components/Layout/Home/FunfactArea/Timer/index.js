import './Timer.css'
import { useState, useRef, useEffect } from 'react';

function Timer() {
    const timer = useRef(null);
    const calculateTimeLeft = () => {
        let now = new Date().getTime();
        let countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();
        let distance = countDownDate - now;
        let timeLeft = {};
        if (distance > 0) {
            timeLeft = {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        timer.current = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="timer d-flex justify-content-between my-40 px-30">
                <div className="timer-item">
                    <span>
                        {timeLeft.days}
                        <p>DAYS</p>
                    </span>
                </div>
                <div className="timer-item">
                    <span>
                        {timeLeft.hours}
                        <p>HOURS</p>
                    </span>
                </div>
                <div className="timer-item">
                    <span>
                        {timeLeft.minutes}
                        <p>MINUTES</p>
                    </span>
                </div>
                <div className="timer-item">
                    <span>
                        {timeLeft.seconds}
                        <p>SECONDS</p>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Timer;
